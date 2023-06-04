import React, {useEffect, useRef, useState} from 'react';
import Portrait from "./portrait";
import Introduction from "./introduction";
import landscape_image from "../../resources/images/backgrounds/landscape.png"
import landscape_front from "../../resources/images/backgrounds/landscape_front.png"
import landscape_front_mirrored from "../../resources/images/backgrounds/landscape_front_mirrored.png"
import "./main_body.css"
import Projects from "./projects/projects";
import { Parallax } from 'react-parallax';
import { ParallaxBanner} from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

const Main_Body: React.FC = () =>{



    return <div className={"main_body"}>
        <Parallax bgImage={landscape_image} strength={400}>
            <ParallaxBanner
                layers={[
                    //{image: landscape_image, speed: 10, scale: [0.9, 1.5, 'easeIn']},
                    {image: landscape_front_mirrored, speed: 0, scale: [1, 1.5, 'easeIn']},
                    {image: landscape_front_mirrored, speed: 35, scale: [1, 1.5, 'easeIn']},
                    {image: landscape_front, speed: 50, scale: [1, 1.5, 'easeIn'] },
                ]}>
            <div style={{height: 1200}} className={"introduction_body"}>
                <Tilt>
                     <Portrait />
                </Tilt>
                <Introduction />
            </div>
            </ParallaxBanner>
        </Parallax>
            <div className="introduction_body">
            </div>
        <div className={"projects_body"}>
            <Projects/>
        </div>
    </div>
}
export default Main_Body