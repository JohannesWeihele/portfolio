import React, { useState } from 'react';
import './aboutmenavigation.css';
import freetime from "../../../resources/icons/freetime.png"
import gallery from "../../../resources/icons/gallery.png"
import about from "../../../resources/icons/user.png"
import skills from "../../../resources/icons/skills.png"

interface AboutmeNavigationProps {
    sendDataToParent: (data: string | null) => void;
}

const AboutmeNavigation: React.FC<AboutmeNavigationProps> = ({ sendDataToParent }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>("About");

    const handleItemClick = (itemName: string) => {
        setSelectedItem(itemName);
        sendDataToParent(itemName);
    };

    return (
        <div className="navigation_container">
            <div className="navigation_wrapper">
                <ul className="navigation_bar">
                    <li
                        onClick={() => handleItemClick("About")}
                        className={`navigation_bar_element ${selectedItem === "About" ? "selected" : ""}`}
                    >
                        <div>
                            <img className="navigation_img" src={about} alt="About" />
                            <p>About</p>
                        </div>
                    </li>
                    <li
                        onClick={() => handleItemClick("Skills")}
                        className={`navigation_bar_element ${selectedItem === "Skills" ? "selected" : ""}`}
                    >
                        <div>
                            <img className="navigation_img" src={skills} alt="Skills" />
                            <p>Skills</p>
                        </div>
                    </li>
                    <li
                        onClick={() => handleItemClick("Freizeit")}
                        className={`navigation_bar_element ${selectedItem === "Freizeit" ? "selected" : ""}`}
                    >
                        <div>
                            <img className="navigation_img" src={freetime} alt="Freizeit" />
                            <p>Freizeit</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutmeNavigation;
