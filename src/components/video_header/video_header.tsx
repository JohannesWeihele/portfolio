import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './video_header.css';

import fullscreen_icon from '../../resources/icons/fullscreen_icon.png'

interface VideoHeaderProps {
    src: string;
}

const VideoHeader: FC<VideoHeaderProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isLoading, setIsLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleScroll = () => {
        const element = videoRef.current;
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const videoHeight = element.offsetHeight;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        const visibleArea = windowHeight - elementPosition;

        if (visibleArea >= videoHeight * 0.5) {
            element.classList.add('animate');
            element.play();
        } else {
            element.classList.remove('animate');
            element.pause();
        }
    };

    const toggleFullscreen = () => {
        const element = videoRef.current;
        if (!element) return;

        if (!isFullscreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                window.scrollTo(0, 0); // Scroll to the top of the page
            }
        }
    };




    const handleLoadedData = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        const element = videoRef.current;
        if (!element) return;

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            element.pause();
        };
    }, []);

    return (
        <div className="video-header">
            {isLoading && (
                <div className="loading-overlay">
                    <span>Loading...</span>
                </div>
            )}
            <div className={'video_container'}>
                <div>
                    <video
                        ref={videoRef}
                        className={isMobile ? 'mobile' : 'desktop'}
                        muted
                        disablePictureInPicture
                        loop
                        onLoadedData={handleLoadedData}
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
                <button className="fullscreen-button" onClick={toggleFullscreen}>
                    {isFullscreen ? 'Exit Fullscreen' : ''}
                    <img src={fullscreen_icon}/>
                </button>
            </div>
        </div>
    );
};

export default VideoHeader;
