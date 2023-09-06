import React, { useEffect, useState } from 'react';
import Portrait from "../portrait";
import Introduction from "../introduction";
import landscape_background from "../../../resources/images/backgrounds/landscape.png"
import landscape_front from "../../../resources/images/backgrounds/landscape_front.png"
import landscape_front_mirrored from "../../../resources/images/backgrounds/landscape_front_mirrored.png"
import "../main_body.css"
import { ParallaxBanner } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import EventsLoader from "../eventsloader/eventsloader";

interface OpenerProps {}

const Opener: React.FC<OpenerProps> = () => {
    const [isMobileChecked, setIsMobileChecked] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [isBannerLoaded, setIsBannerLoaded] = useState(false);

    useEffect(() => {
        if (!isMobileChecked) {
            setIsMobileChecked(true);
            setIsMobileView(window.innerWidth <= 768);
        }
    }, [isMobileChecked, isMobileView]);

    useEffect(() => {
        // Simulate a delay for the loader to disappear (e.g., 2 seconds)
        const timeout = setTimeout(() => {
            setIsBannerLoaded(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const handleBannerLoad = () => {
        setIsBannerLoaded(true);
    };

    return (
        <div>
            {!isBannerLoaded ? (
                <EventsLoader />
            ) : (
                <ParallaxBanner
                    onLoad={() => handleBannerLoad}
                    layers={[
                        { image: landscape_background, speed: -80, expanded: false, disabled: isMobileView },
                        { image: landscape_front_mirrored, speed: 0, scale: [1, 1.5, 'easeIn'] },
                        { image: landscape_front_mirrored, speed: 35, scale: [1, 1.5, 'easeIn'] },
                        { image: landscape_front, speed: 50, scale: [1, 1.5, 'easeIn'] },
                    ]}
                >
                    <div style={{ height: 1200 }} className={"introduction_body"}>
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <Portrait />
                        </Tilt>
                        <Introduction />
                    </div>
                </ParallaxBanner>
            )}
        </div>
    );
}

export default Opener;
