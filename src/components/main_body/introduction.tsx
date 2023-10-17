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
                    }, 3000);
                }
            }, 75);
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
                    <h1 id={"intro_job_title "} style={{color: "black"}}>{animatedText1} </h1>
                    <h1 id={"intro_job_title"} style={{color: "#fd8c3f"}}>{animatedText2} <span className="invisible_writer_dot"></span></h1>
                    <p className={"introduction_text"}>
                        Meine Leidenschaft für professionelle Softwareentwicklung ist der Motor meiner beruflichen Ambitionen. Ich bin davon überzeugt, dass erstklassige Softwarelösungen das Rückgrat für den Erfolg moderner Unternehmen und Projekte sind. Durch meine bisherigen Projekterfahrungen habe ich nicht nur meine technischen Fähigkeiten weiterentwickelt, sondern auch gelernt, effizient im Team zu arbeiten und komplexe Herausforderungen zu meistern. Die transparente Darstellung eben dieser Projekterfahrungen ist mir ein Anliegen, um einen authentischen Einblick in meine fachlichen Qualifikationen als Entwickler zu ermöglichen. Auf dieser Plattform möchte ich diesen Einblick anhand von Projekten aus meinem Bachelorstudium als Game Engineer und meinem anschließenden Masterstudium als Web- und Software Engineer ermöglichen.<br/><br/>
                        Mein Ziel ist es dir zu zeigen wer ich bin, meine Kreativität zu demonstrieren und meine Herangehensweise zur Identifizierung und Umsetzung von Lösungen anhand von Software-Architekturen und Diagrammen zu verdeutlichen. Diese Chronologie ermöglicht es mir außerdem, meine kontinuierliche berufliche und persönliche Entwicklung als Programmierer zu verfolgen und zeigt meinen anhaltenden Ehrgeiz, mich kontinuierlich mit neuen und den unterschiedlichsten Technologien weiterzuentwickeln.
                    </p>
                    <p className={"introduction_final"}><b>Bist du bereit für unser nächstes Projekt? <span className="flame-emoji" role="img" aria-label="Flammen-Emote">🔥</span></b></p><br/><br/><br/><br/>
                </div>
            </div>
    );
}

export default Introduction;
