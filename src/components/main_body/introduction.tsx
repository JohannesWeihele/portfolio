import React, { FC, useEffect, useState } from 'react';
import "./main_body.css";

const text1 = "Hey! Ich bin Johannes";
const text2 = "Web- und Software-Engineer.";

const Introduction: FC = () => {
    const [animatedText1, setAnimatedText1] = useState<string>("");
    const [animatedText2, setAnimatedText2] = useState<string>("");

    useEffect(() => {
        let index1 = 0;
        let index2 = 0;
        let timer1: NodeJS.Timeout | null = null;
        let timer2: NodeJS.Timeout | null = null;

        const startAnimation1 = () => {
            setAnimatedText2("");
            timer1 = setInterval(() => {
                setAnimatedText1(text1.slice(0, index1));
                index1++;
                if (index1 > text1.length) {
                    clearInterval(timer1!);
                    timer1 = null;
                    startAnimation2();
                }
            }, 75);
        };

        const startAnimation2 = () => {
            timer2 = setInterval(() => {
                setAnimatedText2(text2.slice(0, index2));
                index2++;
                if (index2 > text2.length) {
                    clearInterval(timer2!);
                    timer2 = null;
                    setTimeout(() => {
                        index1 = 0;
                        index2 = 0;
                        setAnimatedText1("");
                        startAnimation1();
                    }, 5000);
                }
            }, 75);
        };

        startAnimation1();

        return () => {
            if (timer1) clearInterval(timer1);
            if (timer2) clearInterval(timer2);
        };
    }, []);

    return (
        <div className="introduction">
            <div className="introduction_text_container">
                <h1 id="intro_job_title" style={{ color: "black" }}>{animatedText1}</h1>
                <h1 id="intro_job_title" style={{ color: "#fd8c3f" }}>{animatedText2} <span className="invisible_writer_dot"></span></h1>

                <p className="introduction_text">
                    Softwareentwicklung ist für mich mehr als nur ein Beruf – sie ist meine Leidenschaft.
                    Ich liebe es, aus Ideen funktionierende Systeme zu bauen, die echten Mehrwert schaffen.
                    In den letzten Jahren durfte ich in verschiedenen Projekten erleben, wie gute Software
                    Probleme löst, Teams verbindet und Visionen greifbar macht.<br/><br/>

                    Auf dieser Plattform möchte ich genau das zeigen: meinen Weg als Entwickler, meine
                    Herangehensweise und meine Begeisterung für kreative, saubere und durchdachte Lösungen.
                    Von den ersten Projekten im Game Engineering bis hin zur Web- und Softwareentwicklung –
                    hier dokumentiere ich meine Entwicklung, meine Denkweise und meinen Anspruch,
                    immer ein Stück besser zu werden.
                </p>

                <p className="introduction_final">
                    <b>Bist du bereit für unser nächstes Projekt? <span className="flame-emoji" role="img" aria-label="Flammen-Emote">🔥</span></b>
                </p>
                <br/><br/><br/><br/>
            </div>
        </div>
    );
};

export default Introduction;
