import React from 'react';
import './YearList.css';

const YearList: React.FC = () => {
    return (
        <div className="year-list-container">
            <ul className="year-list">
                <li>Digital Cockpit</li>
                <li>Facial Motion Capture</li>
                <li>FoodFill (BA)</li>
                <li>CanYouPlayIt?</li>
                <li>FoodSupport</li>
                <li>StateofDart</li>
                <li>FireProtect</li>
            </ul>
        </div>
    );
};

export default YearList;
