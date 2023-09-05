import React, {FC} from 'react'
import './footer.css';
import Wave from "react-wavify";

const Footer: React.FC = () =>
    <div className={"footer"}>
        <Wave mask="url(#mask)" fill="#f79902" options={{height: 20}}>
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0" stopColor="white" />
                    <stop offset="0.5" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                    <rect x="0" y="0" width="5000" height="400" fill="url(#gradient)"  />
                </mask>
            </defs>
        </Wave>
        <div className={"footer_txt_wrapper"}>
            <div className={"upper_footer_wrapper"}>
                <div className={"upper_footer_txt_projects"}>
                    <p style={{fontSize: "25px", textAlign: "center", marginLeft: "-70px"}}>Projekte</p>
                    <ul className={"footer_project_list"}>
                        <li>Digital Cockpit</li>
                        <li>Facial Motion Capture</li>
                        <li>FoodFill</li>
                        <li>Django vs. Vaadin</li>
                        <li>Angular vs. Vue.js</li>
                        <li>StateofDart</li>
                        <li>Fireprotect</li>
                        <li>Weitere Projekte</li>
                    </ul>
                </div>
                <div className={"upper_footer_txt_about_me"}>
                    <p id={"footer_about_me"}>Über mich</p>
                </div>
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
    </div>

export default Footer