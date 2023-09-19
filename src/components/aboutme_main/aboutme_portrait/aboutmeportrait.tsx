import React from 'react'
import './aboutmeportrait.css';
import {Carousel} from "react-responsive-carousel";
import bewerbungsbild from "../../../resources/portrait/bewerbungsbild.png"
import portrait_two from "../../../resources/portrait/portrait_two.png"
import huettenbild from "../../../resources/portrait/huette.jpeg"
import office from "../../../resources/portrait/office.jpeg"

interface AboutmePortraitProps {
    dataFromChild: any;
}

const AboutmePortrait: React.FC<AboutmePortraitProps> = ({ dataFromChild }) => {

    let imgSrc = '';

    switch (dataFromChild) {
        case 'About':
            imgSrc = portrait_two;
            break;
        case 'Skills':
            imgSrc = bewerbungsbild;
            break;
        case 'Freizeit':
            imgSrc = office;
            break;
        default:
            imgSrc = 'About';
            break;
    }

    console.log(dataFromChild);

    return (
        <div className={"aboutme_portrait_container"}>
            <div className={"img-container"}>
                <div>
                    <img src={imgSrc} alt="Bild" />
                </div>
            </div>
            <div className={"portrait_container_input"}>
                <p className={"portrait_name"}>Johannes Weihele</p>
                <p className={"portrait_position"}>- M.Sc. Informatik - Software-Engineering -</p>
                <p className={"portrait_title"}><b>Web- und Software-Engineer</b></p>
            </div>
        </div>
    );
};


export default AboutmePortrait