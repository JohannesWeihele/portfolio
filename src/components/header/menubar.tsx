import React, {useRef} from 'react';
import {FC} from 'react';
import './header.css';

const MenuBar: FC = () => {

    const scrollToProjects = () => {
        const scrollPosition = 1000;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <ul className="menu-bar">
                <li>Start</li>
                <li onClick={scrollToProjects}>Projekte</li>
                <li>Über mich</li>
            </ul>
        </div>
    );
};

export default MenuBar;