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
    const isMobile = useMediaQuery({ maxWidth: 767 });

    let zoomed_class: string = '';

    if (!zoomed) {
        zoomed_class = 'no_zoomed_video';
    }

    const [videoError, setVideoError] = useState<boolean>(false);

    const handleVideoError = () => {
        if (!videoError) {
            setVideoError(true);
            const element = videoRef.current;
            if (element) {
                element.load();
            }
        }
    };

    return (
        <div className={isSmartphoneVideo ? 'video-mobile' : 'video-header'}>
            <div>
                <video
                    controls
                    preload={'auto'}
                    ref={videoRef}
                    className={isMobile ? 'mobile' : `desktop ${zoomed_class}`}
                    loop
                    disablePictureInPicture
                    onError={handleVideoError}
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default VideoHeader;