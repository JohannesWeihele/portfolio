import React, { useEffect, useRef, useState } from 'react';
import Portrait from "../portrait";
import Introduction from "../introduction";
import landscape_background from "../../../resources/images/backgrounds/landscape.png"
import landscape_front from "../../../resources/images/backgrounds/landscape_front.png"
import landscape_front_mirrored from "../../../resources/images/backgrounds/landscape_front_mirrored.png"
import "../main_body.css"
import { ParallaxBanner } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import {ClimbingBoxLoader} from "react-spinners";

interface OpenerProps {
    isLoading?: boolean;
}

const Opener: React.FC<OpenerProps> = ({isLoading= false}) => {
    const [isMobileChecked, setIsMobileChecked] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        if (!isMobileChecked) {
            setIsMobileChecked(true);
            setIsMobileView(window.innerWidth <= 768); // Set the threshold based on your design
        }
    }, [isMobileChecked, isMobileView]);

    return (
        <div>
            <ParallaxBanner
                layers={[
                    { image: landscape_background, speed: -80, expanded: false, disabled: isMobileView},
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
                    {isLoading && (
                        <div className={"loader"}>
                            <ClimbingBoxLoader color={"#fd8c3f"} size={6}/>
                            <p className={"loader_text"}>Lädt schöne Dinge...</p>
                        </div>
                    )}
                </div>
            </ParallaxBanner>
        </div>
    );
}

export default Opener;
