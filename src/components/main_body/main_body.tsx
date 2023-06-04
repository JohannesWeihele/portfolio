import React, {useEffect, useRef, useState} from 'react';
import Portrait from "./portrait";
import Introduction from "./introduction";
import landscape_image from "../../resources/images/backgrounds/landscape.png"
import "./main_body.css"
import Projects from "./projects/projects";
import { Parallax} from 'react-parallax';
import Tilt from "react-parallax-tilt";

const Main_Body: React.FC = () =>{



    return <div className={"main_body"}>
        <Parallax bgImage={landscape_image} strength={700}>
            <div style={{height: 1200}} className={"introduction_body"}>
                <Tilt>
                     <Portrait />
                </Tilt>
                <Introduction />
            </div>
        </Parallax>
            <div className="introduction_body">
            </div>
        <div className={"projects_body"}>
            <Projects/>
        </div>
    </div>
}
export default Main_Body