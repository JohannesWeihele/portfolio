import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './video_header.css';

interface VideoHeaderProps {
    src: string;
    showPlayButton?: boolean;
    isSmartphoneVideo?: boolean;
    zoomed?: boolean;
}

const VideoHeader: FC<VideoHeaderProps> = ({
                                               src,
                                               isSmartphoneVideo = false,
                                               zoomed = true,
                                           }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    let zoomed_class: string = '';
    let initial_play: boolean = false;

    if (!zoomed) {
        zoomed_class = 'no_zoomed_video';
    }

    return (
        <div className={isSmartphoneVideo ? 'video-mobile' : 'video-header'}>
            <div>
                <video
                    controls
                    preload={"metadata"}
                    ref={videoRef}
                    className={isMobile ? 'mobile' : `desktop ${zoomed_class}`}
                    loop
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default VideoHeader;