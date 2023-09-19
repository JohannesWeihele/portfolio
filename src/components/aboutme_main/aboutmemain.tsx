import React, {useState} from 'react'
import './aboutmemain.css';
import {Carousel} from "react-responsive-carousel";
import one from "../../resources/portrait/portrait.png"
import AboutmeNavigation from "./aboutme_navigation/aboutmenavigation";
import AboutmePortrait from "./aboutme_portrait/aboutmeportrait";
import AboutmeInput from "./aboutme_input/aboutmeinput";

const AboutmeMain: React.FC = () => {

    const [dataFromChild, setDataFromChild] = useState('About');

    function handleDataFromChild(data: any): void{
        setDataFromChild(data);
    };

    return (
        <div className={"aboutme_container"}>
            <div className={"aboutme_wrapper"}>
                <AboutmeNavigation sendDataToParent={handleDataFromChild}/>
                <AboutmePortrait dataFromChild={dataFromChild}/>
                <AboutmeInput dataFromChild={dataFromChild}/>
            </div>
        </div>
    );
};


export default AboutmeMain