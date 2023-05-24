import React, {FC, useEffect, useRef, useState} from 'react';
import { useMediaQuery } from 'react-responsive';

interface VideoMobileProps {
    src: string;
}

const VideoMobile: FC<VideoMobileProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const handleLoadedData = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        const containerElement = containerRef.current;

        if (!videoElement || !containerElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.classList.add('animate');
                        videoElement.play();
                    } else {
                        videoElement.classList.remove('animate');
                        videoElement.pause();
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // 50% Sichtbarkeitsschwelle
            }
        );

        observer.observe(containerElement);

        return () => {
            observer.unobserve(containerElement);
        };
    }, []);

    return (
        <div className="video-mobile">
            {isLoading && (
                <div className="loading-overlay">
                    <span>Loading...</span>
                </div>
            )}
            <div ref={containerRef} className={'video_container'}>
                <video
                    ref={videoRef}
                    className={isMobile ? 'mobile' : 'desktop'}
                    muted
                    disablePictureInPicture
                    onLoadedData={handleLoadedData}
                    loop
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default VideoMobile;
