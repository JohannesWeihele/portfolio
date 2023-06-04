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
            }, 75); // Geschwindigkeit der Animation (in Millisekunden)
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
                        setAnimatedText1(""); // Zurücksetzen des ersten Texts
                        startAnimation1();
                    }, 7500); // Nach 8 Sekunden Animation neu starten
                }
            }, 75); // Geschwindigkeit der Animation (in Millisekunden)
        };

        startAnimation1();

        return () => {
            if (timer1) {
                clearInterval(timer1);
            }
            if (timer2) {
                clearInterval(timer2);
            }
        };
    }, []);

    return (

            <div className="introduction">
                <div>
                    <h2>Willkommen zu meinem Portfolio</h2>
                </div>
                <div className={"introduction_text_container"}>
                    <h1 id={"intro_job_title "} style={{color: "white"}}>{animatedText1} </h1>
                    <h1 id={"intro_job_title"} style={{color: "#fd8c3f"}}>{animatedText2} <span className="invisible_writer_dot"></span></h1>
                    <p className={"introduction_text"}>Willkommen auf meiner Portfolio-Website, einer Plattform, auf der ich stolz eine Auswahl meiner bisherigen Projekte präsentiere. Diese Projekte sind das engagierte Ergebnis während des Studiums zum Game-Engineer, sowie meiner erworbenen Fachkenntnisse als Web- und Software-Engineer im anschließenden Masterstudium.</p>
                    <p className={"introduction_text"}>Begleite mich auf dieser spannenden Reise durch Codes und Designs, während ich dir meine Fähigkeiten und Kreativität demonstriere. Diese Timeline gewährt dir einen Einblick in die persönliche Entwicklung als Programmierer und zeigt meinen fortwährenden Wunsch, mich durch die unterschiedlichsten Technologien stetig weiterzuentwickeln. Tauche ein in diese digitale Welt und lass uns gemeinsam die unendlichen Möglichkeiten des Internets entdecken. </p>
                    <p className={"introduction_final"}><b>Bist du bereit für unser nächstes Projekt? <span className="flame-emoji" role="img" aria-label="Flammen-Emote">🔥</span></b></p>
                </div>
            </div>
    );
}

export default Introduction;
