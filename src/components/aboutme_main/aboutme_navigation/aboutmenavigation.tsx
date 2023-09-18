import React from 'react'
import './aboutmenavigation.css';
import freetime from "../../../resources/icons/freetime.png"
import gallery from "../../../resources/icons/gallery.png"
import about from "../../../resources/icons/user.png"
import skills from "../../../resources/icons/skills.png"

const AboutmeNavigation: React.FC = () => {

    return (
        <div className={"navigation_container"}>
            <div className={"navigation_wrapper"}>
                <ul className={"navigation_bar"}>
                    <li>
                        <div className={"navigation_bar_element"}>
                            <img className={"navigation_img"} src={about}/>
                            <p>About</p>
                        </div>
                    </li>
                    <li>
                        <div className={"navigation_bar_element"}>
                            <img className={"navigation_img"} src={skills}/>
                            <p>Skills</p>
                        </div>
                    </li>
                    <li>
                        <div className={"navigation_bar_element"}>
                            <img className={"navigation_img"} src={freetime}/>
                            <p>Freizeit</p>
                        </div>
                    </li>
                    <li>
                        <div className={"navigation_bar_element"}>
                            <img className={"navigation_img"} src={gallery}/>
                            <p>Galerie</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default AboutmeNavigation