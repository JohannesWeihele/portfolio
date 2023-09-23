import React, { FC, useRef } from 'react';
import "./main_body.css";
import {Link} from "react-router-dom";

const Portrait: FC = () => {

    return (
    <Link to="/aboutme">
        <div className="portrait">
            <img src={require('../../resources/portrait/portrait.png')} alt="Portrait" />
        </div>
    </Link>
    );
};

export default Portrait;
