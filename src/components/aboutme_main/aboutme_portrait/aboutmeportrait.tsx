import React, { useEffect } from 'react';
import './aboutmeportrait.css';
import bewerbungsbild from "../../../resources/portrait/bewerbungsbild.jpg";
import portrait_two from "../../../resources/portrait/portrait_two.png";
import huettenbild from "../../../resources/portrait/huette.jpeg";
import office from "../../../resources/portrait/freizeit.jpeg";

interface AboutmePortraitProps {
    dataFromChild: any;
}

const AboutmePortrait: React.FC<AboutmePortraitProps> = ({ dataFromChild }) => {
    useEffect(() => {
        const images = [bewerbungsbild, portrait_two, huettenbild, office];
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

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
            imgSrc = portrait_two;
            break;
    }

    return (
        <div className="aboutme_portrait_container">
            <div className="img-container">
                <img src={imgSrc} alt="Bild" />
            </div>
            <div className="portrait_container_input">
                <p className="portrait_name">Johannes Weihele</p>
                <p className="portrait_position">- M.Sc. Informatik - Software-Engineering -</p>
                <p className="portrait_title"><b>Web- und Software-Engineer</b></p>
            </div>
        </div>
    );
};

export default AboutmePortrait;
