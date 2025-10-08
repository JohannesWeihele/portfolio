import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './video_header.css';

interface VideoHeaderProps {
    src: string;
    isSmartphoneVideo?: boolean;
    zoomed?: boolean;
}

const VideoHeader: FC<VideoHeaderProps> = ({
                                               src,
                                               isSmartphoneVideo = false,
                                               zoomed = true,
                                           }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [videoError, setVideoError] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    let zoomed_class: string = zoomed ? '' : 'no_zoomed_video';

    const handleVideoError = () => {
        if (!videoError) {
            setVideoError(true);
            const element = videoRef.current;
            if (element) {
                element.load();
            }
        }
    };

    // 👉 Lazy Loading (lädt erst, wenn sichtbar)
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={isSmartphoneVideo ? 'video-mobile' : 'video-header'}
            ref={containerRef}
            style={{ minHeight: '200px', position: 'relative' }}
        >
            {!isVisible ? (
                // Placeholder/Loader
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: '#111',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.2rem',
                        fontFamily: 'sans-serif',
                        minHeight: '300px',
                    }}
                >
                    Lädt Video …
                </div>
            ) : (
                <video
                    controls
                    preload="metadata"
                    ref={videoRef}
                    className={isMobile ? 'mobile' : `desktop ${zoomed_class}`}
                    loop
                    disablePictureInPicture
                    onError={handleVideoError}
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>

            )}
        </div>
    );
};

export default VideoHeader;
