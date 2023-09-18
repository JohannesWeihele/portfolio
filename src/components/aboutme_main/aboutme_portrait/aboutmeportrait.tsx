import React from 'react'
import './aboutmeportrait.css';
import {Carousel} from "react-responsive-carousel";
import bewerbungsbild from "../../../resources/portrait/bewerbungsbild.png"
import portrait_two from "../../../resources/portrait/portrait_two.png"
import huettenbild from "../../../resources/portrait/huette.jpeg"
import office from "../../../resources/portrait/office.jpeg"
import linkedin from "../../../resources/icons/linked_in_logo.png"
import xing from "../../../resources/icons/xing_logo.png"
import background from "../../../resources/images/backgrounds/aboutme_background.png"

const AboutmePortrait: React.FC = () => {

    return (
        <div className={"aboutme_portrait_container"}>
            <div className={"img-container"}>
                <div>
                    <img src={bewerbungsbild}/>
                </div>
            </div>
            <div className={"portrait_container_input"}>
                <p className={"portrait_name"}>Johannes Weihele</p>
                <p className={"portrait_position"}>- M.Sc. Informatik - Software-Engineering -</p>
                <p className={"portrait_title"}>Web- und Software-Engineer </p>
            </div>
        </div>
    );
};


export default AboutmePortrait