import React from 'react'
import './footer.css';
import Wave from "react-wavify";

const Footer: React.FC = () => {

    function scrollToPosition(position: number): void {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };


    return (
        <div className={"footer"}>
            <Wave mask="url(#mask)" fill="#f78902" options={{height: 20}}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white"/>
                        <stop offset="0.5" stopColor="black"/>
                    </linearGradient>
                    <mask id="mask">
                        <rect x="0" y="0" width="5000" height="400" fill="url(#gradient)"/>
                    </mask>
                </defs>
            </Wave>
            <div className={"footer_back"}>
                <p onClick={() => scrollToPosition(0)}>Zurück zum Anfang</p>
            </div>
            <div className={"downer_footer_wrapper"}>
                    <img src={require('../../resources/logo/Logo_ohne.png')} alt={"Logo"} id={"footer_logo"}/>
                    <a href={"https://www.xing.com/profile/Johannes_Weihele2/cv"} target={"_blank"}>
                        <img src={require('../../resources/icons/xing_logo.png')} id={"footer_xing"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/johannes-weihele-52b326153/"} target={"_blank"}>
                        <img src={require('../../resources/icons/linked_in_logo.png')} id={"footer_linked_in"}/>
                    </a>
                </div>
            </div>
    );
};


export default Footer