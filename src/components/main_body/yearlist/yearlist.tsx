import React, {useEffect} from 'react';
import './YearList.css';

const YearList: React.FC = () => {

    useEffect(() => {

        function checkScrollPosition() {
            if (window.scrollY >= 3500 && window.scrollY <= 4900) {
                console.log("Jetzt");
            }
        }

        // Event-Listener für das Scrollen hinzufügen
        window.addEventListener('scroll', checkScrollPosition);

        // Event-Listener beim Komponentenabbau entfernen
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <div className="year-list-container">
            <ul className="year-list">
                <li className={""}>Digital Cockpit</li>
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
