import { FC, useRef } from 'react';
import "./main_body.css";

const Portrait: FC = () => {

    return (
            <div className="portrait">
                <img src={require('../../resources/portrait/portrait.png')} alt="Portrait" />
            </div>
    );
};

export default Portrait;
