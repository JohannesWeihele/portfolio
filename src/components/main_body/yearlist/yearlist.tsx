import React from 'react';
import './YearList.css';

const YearList: React.FC = () => {
    return (
        <div className="year-list-container">
            <ul className="year-list">
                <li>2018</li>
                <li>2019</li>
                <li>2020</li>
                <li>2021</li>
                <li>2022</li>
                <li>2023</li>
            </ul>
        </div>
    );
};

export default YearList;
