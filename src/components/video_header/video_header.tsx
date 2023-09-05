import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './video_header.css';
import Tilt from 'react-parallax-tilt'

import fullscreen_icon from '../../resources/icons/fullscreen_icon.png'
import player_icon from '../../resources/icons/player_button.png'
import pause_icon from '../../resources/icons/pause_button.png'
import {ClimbingBoxLoader} from "react-spinners";

interface VideoHeaderProps {
    src: string;
    showFullscreenButton?: boolean;
    showPlayButton?: boolean;
    zoomed?: boolean
}

const VideoHeader: FC<VideoHeaderProps> = ({ src , showFullscreenButton= true, showPlayButton = true, zoomed = true}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isLoading, setIsLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPauseVideo, setIsPauseVideo] = useState(true);
    let zoomed_class: string = '';
    let initial_play: boolean = false;

    if(!zoomed){
        zoomed_class = 'no_zoomed_video';
    }

    const handleScroll = () => {
        const element = videoRef.current;
        if (!element) return;

        const img = imgRef.current;
        if (!img) return;

        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const videoHeight = element.offsetHeight;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        const visibleArea = windowHeight - elementPosition;

        if (visibleArea >= videoHeight * 0.5) {
            if(initial_play){
                element.play();
                img.className ='item_gone';
            }
        } else {
            if(initial_play){
                element.pause();
            }
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
            }
        }
    };


    const handleLoadedData = () => {
        setIsLoading(false);
    };

    const handlePlayerClick = () => {
        const element = videoRef.current;
        if (!element) return;
        if(isPauseVideo){
            setIsPauseVideo(false);
            element.play()
            if(!initial_play){
                initial_play = true;
            }
            handleMouseLeave();
        } else {
            setIsPauseVideo(true);
            element.pause();
            handleMouseEnter();
        }
    }

    const handleMouseEnter = () => {
        const img = imgRef.current;
        if (!img) return;
        img.className ='item_visible';
    }

    const handleMouseLeave = () => {
        if(!isPauseVideo || initial_play){
            const img = imgRef.current;
            if (!img) return;
            img.className ='item_gone';
        }
    }

    useEffect(() => {
        const element = videoRef.current;
        if (!element) return;

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            element.pause();
        };
    }, []);

    useEffect(() => {
        const element = videoRef.current;
        if (!element) return;

        window.addEventListener('scroll', handleScroll);

        // Überprüfe, ob der Browser Safari ist
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
            element.setAttribute('playsinline', 'true'); // Hinzufügen des playsinline-Attributs für Safari
            element.setAttribute('muted', 'true'); // Hinzufügen des muted-Attributs für Safari
            element.setAttribute('autoplay', 'true'); // Hinzufügen des autoplay-Attributs für Safari
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            element.pause();
        };
    }, []);

    return (
        <div className="video-header">
            {isLoading && (
                <div className="loading-overlay">
                    <ClimbingBoxLoader size={10} color={"#fd8c3f"}/>
                    <span className={"loading_text"}>Lädt schöne Dinge...</span>
                </div>
            )}
            <div className={'video_container'}>
                <div>
                    <video
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={videoRef}
                        className={isMobile ? 'mobile' : `desktop ${zoomed_class}`}
                        disablePictureInPicture
                        loop
                        playsInline
                        onLoadedData={handleLoadedData}
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
                <div>
                    {showFullscreenButton && ( // Überprüfe die Prop, um den Button anzuzeigen
                        <button className="fullscreen-button" onClick={toggleFullscreen}>
                            {isFullscreen ? 'Exit Fullscreen' : ''}
                            <img src={fullscreen_icon} alt="Fullscreen" />
                        </button>
                    )}
                </div>
                {showPlayButton && (
                    <div className={"player_button"} onClick={handlePlayerClick}>
                        <img
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            ref={imgRef} src={isPauseVideo ? player_icon : pause_icon}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoHeader;
