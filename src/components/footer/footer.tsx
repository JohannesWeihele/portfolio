import React from 'react'
import './footer.css';
import Wave from "react-wavify";
import {Location, useLocation} from 'react-router-dom';

const Footer: React.FC = () => {

    let location: Location = useLocation();

    function scrollToPosition(position: number): void {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

    function checkLocation(): boolean {
        return location.pathname === "/";
    };


    return (
        <div className={"footer"}>
            {checkLocation() ? (
                <div className={"footer_back"}>
                    <p onClick={() => scrollToPosition(0)}>Zurück zum Anfang</p>
                </div>
            ) : null}
            <div className={"downer_footer_wrapper"}>
                <img src={require('../../resources/logo/Logo_ohne.png')} alt={"Logo"} id={"footer_logo"}/>
                <a href={"https://www.xing.com/profile/Johannes_Weihele2/cv"} target={"_blank"}>
                    <img src={require('../../resources/icons/xing_logo.png')} id={"footer_xing"}/>
                </a>
                <a href={"https://www.linkedin.com/in/johannes-weihele-52b326153/"} target={"_blank"}>
                    <img src={require('../../resources/icons/linked_in_logo.png')} id={"footer_linked_in"}/>
                </a>
                <p className={"footer_rights"}>© 2023 Johannes Weihele. All rights reserved</p>
                </div>
            </div>
    );
};


export default Footer