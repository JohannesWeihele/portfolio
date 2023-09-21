import React, {useRef} from 'react';
import {FC} from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/">
                    <li onClick={scrollToProjects}>Projekte</li>
                </Link>
                <Link to="/aboutme">
                    <li>Über mich</li>
                </Link>
            </ul>
            <ul className={"native_menuebar"}>
                <Link to="/" style={{width: "50%"}}>
                    <li onClick={scrollToProjects}>Projekte</li>
                </Link>
                <Link to="/aboutme" style={{width: "50%"}}>
                    <li>Über mich</li>
                </Link>
            </ul>

        </div>
    );
};

export default MenuBar;