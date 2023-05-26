import React, {useEffect, useRef, useState} from 'react';
import "./projects.css";
import "animate.css/animate.min.css"
import { Canvas, useFrame, useLoader } from '@react-three/fiber';

//----------------Videos------------//
import VideoHeader from "../../video_header/video_header";
import VideoMobile from "../../video_mobile/video_mobile";
import qt_video from '../../../resources/videos/praxissemester/qt_projekt_auto.mp4'
import facial_mocap_video from '../../../resources/videos/facial_mocap/facial_mocap.mp4'
import foodfill_video from '../../../resources/videos/foodfill/foodfill.mp4'
import django_vaadin_video from '../../../resources/videos/django_vaadin/django_vaadin.mp4'
import angular_vuejs_video from '../../../resources/videos/angular_vuejs/angular_vuejs.mp4'
import stateofdart_video from '../../../resources/videos/stateofdart/stateofdart.mp4'
import adrive_video from '../../../resources/videos/praxissemester/adrive_video.mp4'

//----------------Bilder-------------//
import digital_cockpit_picture from '../../../resources/images/digital_cockpit_picture.png'
import digital_cockpit_picture_td from '../../../resources/images/digital_cockpit_picture_td.png'
import office_image from '../../../resources/images/office.jpeg'
import porsche_driving from '../../../resources/images/porsche_driving.png'
import portrait from "../portrait";


import { AnimationOnScroll} from "react-animation-on-scroll";
import Car from "../../3D/car";
import {OrbitControls} from "@react-three/drei";

function getWindowWidth(): number {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

const Projects_Timeline: React.FC = () => {

    const [canvasSize, setCanvasSize] = useState<number>(300);

    const [buttonData, setButtonData] = useState([
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null) },
    ]);

    const toggleContentVisibility = (index: number) => {
        const updatedButtonData = [...buttonData];
        updatedButtonData[index].isContentVisible = !updatedButtonData[index].isContentVisible;
        updatedButtonData[index].isButtonExpanded = !updatedButtonData[index].isButtonExpanded;
        if (!updatedButtonData[index].isButtonExpanded) {
            scrollToDiv(updatedButtonData[index].divRef);
        }
        setButtonData(updatedButtonData);
    };

    const scrollToDiv = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
    };

    const handle3DClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    return (
        <div>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"}>
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Bachelor
                    </p>
                    <p className={'timeline_year_right'}>
                        2018
                    </p>
                </div>
                <div className={"horizontal_line_right"} id={"same_line_right"}>
                    <AnimationOnScroll initiallyVisible={true} delay={-1000} offset={0} animateIn={"animate__pulse"} animateOut={"animate__pulse"}>
                        <div className="dot_right"></div>
                    </AnimationOnScroll>
                    <div>
                        <div className="header-container">
                            <h1 className={'timeline_header'}>
                                Digital Cockpit
                            </h1>
                        </div>
                        <div className={"timeline_icon_right_one"}>
                            <img src={require('../../../resources/icons/qt_icon.png')} alt={"Qt_Icon"}/>
                        </div>
                        <div className={"timeline_icon_right_two"}>
                            <img src={require('../../../resources/icons/C++_Icon.png')} alt={"C++_Icon"}/>
                        </div>
                        <div className={"timeline_icon_right_three"}>
                            <img src={require('../../../resources/icons/blender_icon.png')} alt={"Blender_Icon"}/>
                        </div>
                    </div>
                </div>
                <div className="horizontal_line_left" id={"same_line_left"}>
                    <AnimationOnScroll initiallyVisible={true} delay={-1000} offset={0} animateIn={"animate__pulse"} animateOut={"animate__pulse"}>
                        <div className="dot_left"></div>
                    </AnimationOnScroll>
                    <div>
                        <div className="header-container">
                            <h1 className={'timeline_header'}>
                                <div className={'model_left'}>
                                    <Canvas id={"canvas_model_left"} style={{ width: "300px", height: "300px"}}>
                                        <Car/>
                                    </Canvas>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"}>
            <div className={'project_timeline_short'}/>
            <VideoHeader src={qt_video} />
                <div ref={buttonData[0].divRef}>
                    <button
                        onClick={() => toggleContentVisibility(0)}
                        className={`square-button ${buttonData[0].isButtonExpanded ? 'expanded' : ''}`}
                        style={{ height: buttonData[0].isButtonExpanded ? 'auto' : 'initial' }}
                    >
                        {buttonData[0].isButtonExpanded ? (
                        <div>
                            <div>
                                <h1 style={{color: "black", fontFamily: "Agency FB"}}>Digital Cockpit</h1>
                            </div>
                            <p className="max_width_text">
                                Während meines Praxissemesters des Informatik-Studiums mit Schwerpunkt Game-Engineering, unterstützte ich das
                                <a onClick={handleLinkClick}
                                    href={"https://www.hs-kempten.de/fakultaet-maschinenbau/forschung/einrichtungen/adrive-living-lab"} target={"_blank"} rel={"noopener noreferrer"}><i> Adrive Living Lab </i>
                                </a>
                                der
                                <a onClick={handleLinkClick}
                                    href={"https://www.hs-kempten.de/"} target={"_blank"} rel={"noopener noreferrer"}><i> Hochschule Kempten </i>
                                </a>
                                tatkräftig bei der Weiterentwicklung ihres Fahrsimulators.
                                Mit einer 210° umfassenden 9 auf 4 Meter großen Leinwand bildet das Hochschul-Labor durch ein hochmodernes, präzises und realistisches System das indviduelle Fahrgefühl seiner Tester auf einer hochgenauen Bewegungsplattform nach.<div className={"mobile_newLine"}><br/><br/></div>
                            </p>
                            <div className={"project_video"}>
                                <VideoHeader src={adrive_video} showFullscreenButton={false}/>
                            </div>
                            <p className={"source_text"}>Quelle: https://www.youtube.com/watch?v=c1Wo7ZtoK2Q</p>
                            <p className={"max_width_text"}>
                                Meine Hauptaufgabe im Rahmen meines Praktikums war es, ein virtuelles Cockpit für eben diesen Simulator zu entwickeln. Das Cockpit sollte mithilfe eines Tablets am Simulator befestigt werden und zusätzliche Anzeigen für Fahrerassistenzsysteme sowie grundlegende Funktionen eines herkömmlichen Autocockpits bieten. Da ich meine bisherigen Kenntnisse und Fähigkeiten als Game-Engineer einbringen und das Cockpit modern gestalten wollte, entschied ich mich nach umfangreicher Recherche für die Verwendung von
                                <a onClick={handleLinkClick}
                                    href={"https://www.qt.io/"} target={"_blank"} rel={"noopener noreferrer"}><i> Qt. </i>
                                </a><br/><br/>
                                Qt ist ein GUI-Toolkit und Anwendungsframework, das ich bereits während meines Studiums im Bereich Computergrafik-Entwicklung kennengelernt hatte. Da ich zudem in den ersten Semestern meines Studiums hauptsächlich mit C++ gearbeitet habe, sah ich dies als eine optimale Gelegenheit, meine bisherigen Kenntnisse in einem großen und eigenständigen Projekt weiter zu festigen. Hierfür entdeckte ich den GUI-Editor
                                <a onClick={handleLinkClick}
                                    href={"https://www.qt.io/blog/2017/02/20/introducing-qt-3d-studio"} target={"_blank"} rel={"noopener noreferrer"}><i> Qt 3D Studio</i>
                                </a>, welcher mir ermöglichen sollte, neben der Darstellung und Entwicklung gewöhnlicher 2D-Elemente, auch 3D-Objekte in das Projekt zu laden, um so beispielsweise 3D-Modelle von Fahrzeugen in die UI einzubinden.<br/><br/>
                                Nach einer kurzen Einarbeitungsphase in Qt, sowie Qt’s Programmiersprache QML und die Funktionalität des Frameworks (z.B. Signals und Slots), erzielte ich fix die ersten Fortschritte und präsentierte die erste Version meiner Benutzeroberfläche, die jedoch noch auf vordefinierte Eingabewerte basierte. Benötigte Komponenten wie Tankanzeige, Kühltemperatur, Zeiger und Hintergründe designte ich selbst, um flexibel in Bezug auf mögliche Farb- und Formvariationen zu bleiben und ein individuelles Designerlebnis zu schaffen.
                            </p><div className={"mobile_newLine"}><br/></div>
                            <img className={"project_img"} src={digital_cockpit_picture}/><div className={"mobile_newLine"}><br/><br/></div>
                            <p className={"max_width_text"}>
                                Mithilfe der Software
                                <a onClick={handleLinkClick}
                                    href={"https://ipg-automotive.com/de/produkte-loesungen/software/carmaker/"} target={"_blank"} rel={"noopener noreferrer"}><i> IPG CarMaker, </i>
                                </a>
                                 die für die Strecken- und Fahrzeugvisualisierung des Simulators benötigt wurde, konnte ich anschließend über eine TCP-Schnittstelle relevante Variablen wie Geschwindigkeit und Drehzahl abrufen und an die entwickelte UI übergeben. Dadurch konnten die Zeiger beispielsweise den korrekten Drehwinkel für die km/h- oder aber die Drehzahl-Anzeige darstellen.<br/><br/>
                                Nachdem die ersten Variablen nach und nach korrekt dargestellt wurden, erweiterte ich das Cockpit um eine zusätzliche Ansicht, die die gewünschte 3D-Darstellung des Cockpits ermöglichte. Ich passte ein Modell eines Porsches, welches kostenlos über das Portal
                                <a onClick={handleLinkClick}
                                    href={"https://free3d.com"} target={"_blank"} rel={"noopener noreferrer"}><i> free3d.com </i>
                                </a> verfügbar war, mit der kostenlosen 3D-Modellierungssoftware Blender an und lud es in eine neue Ansicht der Qt-UI. Im letzten Schritt sollte das Cockpit auch die Fahrerassistenzsysteme der Simulation darstellen. Glücklicherweise gab es auch dafür verschiedene Variablen in CarMaker, um schließlich die endgültige Darstellung des virtuellen Cockpits für das Adrive Living Lab zu erreichen.
                            </p><div className={"mobile_newLine"}><br/></div>
                            <img className={"project_img"} src={digital_cockpit_picture_td}/><div className={"mobile_newLine"}><br/><br/></div>
                            <p className={"max_width_text"}>
                              <b>Fazit:</b> <br/><br/>
                                Das Praktikum im Adrive Living Lab bot mir eine ideale Gelegenheit eigenverantwortlich zu arbeiten und diente als wichtiger Wegweiser für meine darauffolgende Spezialisierung zur Software- und Webentwicklung. Die Kombination aus kreativer und technischer Entwicklung weckte in mir den Wunsch nach mehr wofür ich dem Hochschul-Labor sehr dankbar bin.
                                Am Meisten beeindruckt hat mich während meines 20-wöchigen Praktikums das unglaubliche Team vom Adrive Living Lab, bestehend aus (damals) etwa 20 liebenswerten Mitarbeitern. <br/><br/>
                                <div className={"multi_pictures_container"}>
                                    <img className={"project_img"} src={porsche_driving}/>
                                    <img className={"project_img"} src={office_image}/>
                                </div><br/>
                                Der dort zu findende, lockere und humorvolle Umgang miteinander, kombiniert mit gegenseitigem Respekt ist genau das, was ich mir für mein zukünftiges Berufsleben wünsche.
                                Jeder einzelne Mitarbeiter hat mir stets das Gefühl gegeben, ein wichtiger Bestandteil des Teams zu sein, dessen Meinung den gleichen Wert hat wie die jedes anderen Kollegen. Die familiäre Umgebung, die unter der Leitung von Prof. Dr. Bernhard Schick geschaffen wurde, hat ein starkes Zugehörigkeitsgefühl hervorgerufen, an das ich mich für lange Zeit gerne zurückerinnern werde.
                            </p>
                            <p className={"close_button_text"}>
                                schließen
                            </p>
                        </div>
                            ) : (
                            <p className={"more_text"}>Erfahre mehr</p>
                        )}
                        <span className={`arrow-down ${buttonData[0].isButtonExpanded ? 'expanded' : ''}`} />
                    </button>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"}>
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Bachelor
                    </p>
                    <p className={'timeline_year_left'}>
                        2019
                    </p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOut={"animate__fadeOutRightBig"}>
            <div className={'horizontal_line_left'}>
                <AnimationOnScroll animateIn={"animate__pulse"}>
                    <div className="dot_left"></div>
                </AnimationOnScroll>
                <div>
                    <div className="header-container">
                        <h1 className={'timeline_header'}>
                            Facial Motion Capture
                        </h1>
                    </div>
                    <div className={"timeline_icon_left_one"}>
                        <img src={require('../../../resources/icons/unreal_engine_icon.png')} alt={"UE_Icon"}/>
                    </div>
                    <div className={"timeline_icon_left_two"}>
                        <img src={require('../../../resources/icons/blender_icon.png')} alt={"Blender_Icon"}/>
                    </div>
                </div>
            </div>
            <div className={'project_timeline_short'}/>
            <VideoHeader src={facial_mocap_video} />
                <div ref={buttonData[1].divRef}>
                    <button
                        onClick={() => toggleContentVisibility(1)}
                        className={`square-button ${buttonData[1].isButtonExpanded ? 'expanded' : ''}`}
                        style={{ height: buttonData[1].isButtonExpanded ? 'auto' : 'initial' }}
                    >
                        {buttonData[1].isButtonExpanded ? (
                        <div>

                        </div>
                    ) : (
                            <p className={"more_text"}>Erfahre mehr</p>
                        )}
                        <span className={`arrow-down ${buttonData[1].isButtonExpanded ? 'expanded' : ''}`} />
                    </button>
                </div>
                <p className="button_or">
                    <span>oder</span>
                </p>
                <div ref={buttonData[6].divRef}>
                    <button
                        onClick={() => toggleContentVisibility(6)}
                        className={`td_square-button ${buttonData[6].isButtonExpanded ? 'expanded' : ''}`}
                        style={{ height: buttonData[6].isButtonExpanded ? 'auto' : 'initial' }}
                    >
                        {buttonData[6].isButtonExpanded ? (
                            <div className={"model_container"}>
                                <div className={'button_model'}>
                                    <Canvas style={{ width: "1000px", height: "900px", objectFit: "contain"}} onClick={handle3DClick}>

                                    </Canvas>
                                </div>
                                <p className={"close_button_text"} style={{zIndex: "5"}}>
                                    schließen
                                </p>
                            </div>
                        ) : (
                            <p className={"more_text"}>3D-Model Ansehen</p>
                        )}
                        <span className={`arrow-down ${buttonData[6].isButtonExpanded ? 'expanded' : ''}`} />
                    </button>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"}>
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Bachelor
                    </p>
                    <p className={'timeline_year_right'}>
                        2020
                    </p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"}>
            <div className="horizontal_line_right">
                <AnimationOnScroll animateIn={"animate__pulse"}>
                    <div className="dot_right"></div>
                </AnimationOnScroll>
                <div className="header-container">
                    <h1 className={'timeline_header'}>
                        FoodFill (BA)
                    </h1>
                </div>
                <div className={"timeline_icon_right_one"}>
                    <img src={require('../../../resources/icons/android_studio_Icon.png')} alt={"Android_Studio_Icon"}/>
                </div>
                <div className={"timeline_icon_right_two"}>
                    <img src={require('../../../resources/icons/java_icon.png')} alt={"Java_Icon"}/>
                </div>
                <div className={"timeline_icon_right_three"}>
                    <img src={require('../../../resources/icons/blender_icon.png')} alt={"Blender_Icon"}/>
                </div>
            </div>
            <div className={'project_timeline_short'}/>
            <VideoMobile src={foodfill_video} />
            <div ref={buttonData[2].divRef}>
                <button
                    onClick={() => toggleContentVisibility(2)}
                    className={`square-button ${buttonData[2].isButtonExpanded ? 'expanded' : ''}`}
                    style={{ height: buttonData[2].isButtonExpanded ? 'auto' : 'initial' }}
                >
                    {buttonData[2].isButtonExpanded ? (
                        <div>

                        </div>
                    ) : (
                        <p className={"more_text"}>Erfahre mehr</p>
                    )}
                    <span className={`arrow-down ${buttonData[2].isButtonExpanded ? 'expanded' : ''}`} />
                </button>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"}>
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Master
                    </p>
                    <p className={'timeline_year_left'}>
                        2021
                    </p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOut={"animate__fadeOutRightBig"}>
                <div className="horizontal_line_right" id={"same_line_right"}>
                    <AnimationOnScroll animateIn={"animate__pulse"}>
                        <div className="dot_right"></div>
                    </AnimationOnScroll>
                    <div className="header-container">
                        <h1 className={'timeline_header'}>
                            Vaadin
                        </h1>
                    </div>
                    <div className={"timeline_icon_right_one"}>
                        <img src={require('../../../resources/icons/vaadin_icon.png')} alt={"Vaadin_Icon"}/>
                    </div>
                    <div className={"timeline_icon_right_two"}>
                        <img src={require('../../../resources/icons/java_icon.png')} alt={"Java_Icon"}/>
                    </div>
                </div>
                <div className="horizontal_line_left" id={"same_line_left"}>
                    <AnimationOnScroll animateIn={"animate__pulse"}>
                        <div className="dot_left"></div>
                    </AnimationOnScroll>
                    <div className="header-container">
                        <h1 className={'timeline_header'}>
                            Django
                        </h1>
                        <div className={"timeline_icon_left_one"}>
                            <img src={require('../../../resources/icons/django_icon.png')} alt={"Django_Icon"}/>
                        </div>
                        <div className={"timeline_icon_left_two"}>
                            <img src={require('../../../resources/icons/python_icon.png')} alt={"Python_Icon"}/>
                        </div>
                    </div>
                </div>

            <div>
                <p className={"vs-container"}>vs.</p>
            </div>
            <div className={'project_timeline_short'}/>
            <VideoHeader src={django_vaadin_video} />
            <div ref={buttonData[3].divRef}>
                <button
                    onClick={() => toggleContentVisibility(3)}
                    className={`square-button ${buttonData[3].isButtonExpanded ? 'expanded' : ''}`}
                    style={{ height: buttonData[3].isButtonExpanded ? 'auto' : 'initial' }}
                >
                    {buttonData[3].isButtonExpanded ? (
                        <div>

                        </div>
                    ) : (
                        <p className={"more_text"}>Erfahre mehr</p>
                    )}
                    <span className={`arrow-down ${buttonData[3].isButtonExpanded ? 'expanded' : ''}`} />
                </button>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} >
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Master
                    </p>
                    <p className={'timeline_year_right'}>
                        2022
                    </p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"}>
            <div className="horizontal_line_right" id={"same_line_right"}>
                <AnimationOnScroll animateIn={"animate__pulse"}>
                    <div className="dot_right"></div>
                </AnimationOnScroll>
                <div className="header-container">
                    <h1 className={'timeline_header'}>
                        Vue.js
                    </h1>
                </div>
                <div className={"timeline_icon_right_one"}>
                    <img src={require('../../../resources/icons/vuejs_icon.png')} alt={"Vuejs_Icon"}/>
                </div>
                <div className={"timeline_icon_right_two"}>
                    <img src={require('../../../resources/icons/typescript_icon.png')} alt={"TypeScript_Icon"}/>
                </div>
            </div>
            <div className="horizontal_line_left" id={"same_line_left"}>
                <AnimationOnScroll animateIn={"animate__pulse"}>
                    <div className="dot_left"></div>
                </AnimationOnScroll>
                <div className="header-container">
                    <h1 className={'timeline_header'}>
                        Angular
                    </h1>
                </div>
                <div className={"timeline_icon_left_one"}>
                    <img src={require('../../../resources/icons/angular_icon.png')} alt={"Angular_Icon"}/>
                </div>
                <div className={"timeline_icon_left_two"}>
                    <img src={require('../../../resources/icons/typescript_icon.png')} alt={"TypeScript_Icon"}/>
                </div>
            </div>

            <div>
                <p className={"vs-container"}>vs.</p>
            </div>
            <div className={'project_timeline_short'}/>
            <VideoHeader src={angular_vuejs_video} />
            <div ref={buttonData[4].divRef}>
                <button
                    onClick={() => toggleContentVisibility(4)}
                    className={`square-button ${buttonData[4].isButtonExpanded ? 'expanded' : ''}`}
                    style={{ height: buttonData[4].isButtonExpanded ? 'auto' : 'initial' }}
                >
                    {buttonData[4].isButtonExpanded ? (
                        <div>

                        </div>
                    ) : (
                        <p className={"more_text"}>Erfahre mehr</p>
                    )}
                    <span className={`arrow-down ${buttonData[4].isButtonExpanded ? 'expanded' : ''}`} />
                </button>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"}>
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Master
                    </p>
                    <p className={'timeline_year_left'}>
                        2023
                    </p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOut={"animate__fadeOutRightBig"}>
            <div className="horizontal_line_left">
                <AnimationOnScroll animateIn={"animate__pulse"}>
                    <div className="dot_left"></div>
                </AnimationOnScroll>
                <div className="header-container">
                    <h1 className={'timeline_header'}>
                        StateofDart
                    </h1>
                </div>
                <div className={"timeline_icon_left_one"}>
                    <img src={require('../../../resources/icons/tensorflow_icon.png')} alt={"TensorFlow_Icon"}/>
                </div>
                <div className={"timeline_icon_left_two"}>
                    <img src={require('../../../resources/icons/android_studio_Icon.png')} alt={"Android_Studio_Icon"}/>
                </div>
                <div className={"timeline_icon_left_three"}>
                    <img src={require('../../../resources/icons/java_icon.png')} alt={"Java_Icon"}/>
                </div>
            </div>

            <div className={'project_timeline_short'}/>
            <VideoHeader src={stateofdart_video} />
            <div ref={buttonData[5].divRef}>
                <button
                    onClick={() => toggleContentVisibility(5)}
                    className={`square-button ${buttonData[5].isButtonExpanded ? 'expanded' : ''}`}
                    style={{ height: buttonData[5].isButtonExpanded ? 'auto' : 'initial' }}
                >
                    {buttonData[5].isButtonExpanded ? (
                        <div>

                        </div>
                    ) : (
                        <p className={"more_text"}>Erfahre mehr</p>
                    )}
                    <span className={`arrow-down ${buttonData[5].isButtonExpanded ? 'expanded' : ''}`} />
                </button>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"}>
                <div className={'project_timeline_long'}>
                    <p className={'timeline_text'}>
                        Master
                    </p>
                    <p className={'timeline_year_right'}>
                        2023
                    </p>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"}>
            <div className="horizontal_line_right">
                <AnimationOnScroll animateIn={"animate__pulse"}>
                    <div className="dot_right"></div>
                </AnimationOnScroll>
                <div className="header-container">
                    <h1 className={'timeline_header'}>
                        Fireprotect (MA)
                    </h1>
                </div>
                <div className={"timeline_icon_right_one"}>
                    <img src={require('../../../resources/icons/android_studio_Icon.png')} alt={"Android_Studio_Icon"}/>
                </div>
                <div className={"timeline_icon_right_two"}>
                    <img src={require('../../../resources/icons/java_icon.png')} alt={"Java_Icon"}/>
                </div>
                <div className={"timeline_icon_right_three"}>
                    <img src={require('../../../resources/icons/wear_os_icon.png')} alt={"Wear_OS_Icon"}/>
                </div>
            </div>
            </AnimationOnScroll>
            <div className={'project_timeline_short'}/>
        </div>
    );
};
//DAAAAAAAAAAAAAARAN DENKEN IN DER ERKLÄRUNG NOCH EIN VIDEO VON VUE.JS REINZUBRINGEN DASS DAS RESPONSIVE DESIGN ZEIGT!
export default Projects_Timeline;
