import React, { useEffect, useState } from 'react';
import Portrait from "../portrait";
import Introduction from "../introduction";
import landscape_background from "../../../resources/images/backgrounds/landscape.png"
import landscape_front from "../../../resources/images/backgrounds/landscape_front.png"
import landscape_front_mirrored from "../../../resources/images/backgrounds/landscape_front_mirrored.png"
import background from "../../../resources/images/backgrounds/background.jpg"
import "../main_body.css"
import { ParallaxBanner } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";


interface OpenerProps {}

const Opener: React.FC<OpenerProps> = () => {
    const [isMobileChecked, setIsMobileChecked] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        if (!isMobileChecked) {
            setIsMobileChecked(true);
            setIsMobileView(window.innerWidth <= 768);
        }
    }, [isMobileChecked, isMobileView]);

    return (
        <div>
            <ParallaxBanner
                layers={[
                    { image: background, speed: 0, expanded: false, disabled: isMobileView},
                ]}
            >
                <div style={{ height: 1400 }} className={"introduction_body"}>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <Portrait />
                    </Tilt>
                    <Introduction />
                </div>
            </ParallaxBanner>
        </div>
    );
}

export default Opener;
