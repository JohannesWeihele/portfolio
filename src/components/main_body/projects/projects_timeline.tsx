import React, {useEffect, useRef, useState} from 'react';

import "./projects.css";
import "animate.css/animate.min.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

//----------------Videos------------//
import VideoHeader from "../../video_header/video_header";
import VideoMobile from "../../video_mobile/video_mobile";
import qt_video from '../../../resources/videos/praxissemester/qt_projekt_auto.mp4'
import facial_mocap_video from '../../../resources/videos/facial_mocap/facial_mocap_neu.mp4'
import foodfill_video from '../../../resources/videos/foodfill/foodfill.mp4'
import django_video from '../../../resources/videos/django_vaadin/django.mp4'
import vaadin_video from '../../../resources/videos/django_vaadin/vaadin.mp4'
import angular_vuejs_video from '../../../resources/videos/angular_vuejs/angular_vuejs.mp4'
import stateofdart_video from '../../../resources/videos/stateofdart/stateofdart.mp4'
import adrive_video from '../../../resources/videos/praxissemester/adrive_video.mp4'
import fa_mocap_emotions_video from '../../../resources/videos/facial_mocap/fa_mocap_emotions.mp4'

//----------------Bilder-------------//
import digital_cockpit_picture from '../../../resources/images/digital_cockpit_picture.png'
import digital_cockpit_picture_td from '../../../resources/images/digital_cockpit_picture_td.png'
import office_image from '../../../resources/images/office.jpeg'
import porsche_driving from '../../../resources/images/porsche_driving.png'
import fa_mocap_scene_one from '../../../resources/images/fa_mocap_scene_1.jpg'
import fa_mocap_scene_two from '../../../resources/images/fa_mocap_scene_2.jpg'
import life_is_strange from '../../../resources/images/life_is_strange.jpg'
import qt_3d_studio from '../../../resources/images/qt_3d_studio.png'
import facial_mocap_hardware from '../../../resources/images/facial_mocap_hardware.jpg'

import { AnimationOnScroll} from "react-animation-on-scroll";
import { Carousel } from 'react-responsive-carousel';

import Timeline_long from "../timeline_long/timeline_long";
import HorizontalLine from "../horizontal_line/horizontal_line";
import ExpandingButton from "../expanding_button/expanding_button";
import ExpandingList from "../expanding_list/expanding_list";
import Dachboden_Stuff from "../../3D/dachboden_stuff";
import {Canvas} from "@react-three/fiber";
import Dachboden from "../../3D/dachboden";

const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
};

const Projects_Timeline: React.FC = () => {

    return (
        <div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOnce={true}>
                    <Timeline_long name={"Bachelor"} year={"2018"} side={"right"}/>
                    <HorizontalLine name={"Digital Cockpit"} side={"right"} sameLine={true} icon_name_one={'qt_icon'} icon_name_two={'C++_Icon'} icon_name_three={'blender_icon'}/>
                    <HorizontalLine side={"left"} sameLine={true} td_model={"car"}/>
                </AnimationOnScroll>
            </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                    <VideoHeader src={qt_video} />
                    <ExpandingButton>
                        <div>
                            <ExpandingList name={"Über das Projekt"} open={true}>
                                <div>
                                    <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "50px"}}>Digital Cockpit</h1>
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
                                    <VideoHeader src={adrive_video} showFullscreenButton={false} showPlayButton={true} zoomed={false}/>
                                </div>
                                <p className={"source_text"}>Quelle: https://www.youtube.com/watch?v=c1Wo7ZtoK2Q</p>
                            </ExpandingList>
                            <ExpandingList name={"Mein Ziel"}>
                                <p className={"max_width_text"}>
                                    Meine Hauptaufgabe im Rahmen meines Praktikums war es, ein virtuelles Cockpit für eben diesen Simulator zu entwickeln. Das Cockpit sollte mithilfe eines Tablets am Simulator befestigt werden und zusätzliche Anzeigen für Fahrerassistenzsysteme sowie grundlegende Funktionen eines herkömmlichen Autocockpits bieten. Da ich meine bisherigen Kenntnisse und Fähigkeiten als Game-Engineer einbringen und das Cockpit modern gestalten wollte, entschied ich mich nach umfangreicher Recherche für die Verwendung von
                                    <a onClick={handleLinkClick}
                                       href={"https://www.qt.io/"} target={"_blank"} rel={"noopener noreferrer"}><i> Qt. </i>
                                    </a>
                                </p>
                            </ExpandingList>
                            <ExpandingList name={"Entwicklungsumgebung"}>
                                <p className={"max_width_text"}>
                                    Qt ist ein GUI-Toolkit und Anwendungsframework, das ich bereits während meines Studiums im Bereich Computergrafik-Entwicklung kennengelernt hatte. Da ich zudem in den ersten Semestern meines Studiums hauptsächlich mit C++ gearbeitet habe, sah ich es als optimale Gelegenheit, meine bisherigen Kenntnisse in einem großen und eigenständigen Projekt weiter zu festigen. Hierfür entdeckte ich den GUI-Editor
                                    <a onClick={handleLinkClick}
                                       href={"https://www.qt.io/blog/2017/02/20/introducing-qt-3d-studio"} target={"_blank"} rel={"noopener noreferrer"}><i> Qt 3D Studio</i>
                                    </a>, welcher mir ermöglichen sollte, neben der Darstellung und Entwicklung gewöhnlicher 2D-Elemente, auch 3D-Objekte in das Projekt zu laden, um so beispielsweise 3D-Modelle von Fahrzeugen in die aktuelle Szene einzubinden.
                                </p>
                                <img className={"project_img"} src={qt_3d_studio}/>
                            </ExpandingList>
                            <ExpandingList name={"Design & Implementierung"}>
                                <p className={"max_width_text"}>
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
                            </ExpandingList>
                            <ExpandingList name={"Was ich gelernt habe"}>
                                <p className={"max_width_text"}>
                                    Das Praktikum im Adrive Living Lab bot mir eine ideale Gelegenheit eigenverantwortlich zu arbeiten und diente als wichtiger Wegweiser für meine darauffolgende Spezialisierung zur Software- und Webentwicklung. Die Kombination aus kreativer und technischer Entwicklung weckte in mir den Wunsch nach mehr wofür ich dem Hochschul-Labor sehr dankbar bin.
                                    Am Meisten beeindruckt hat mich während meines 20-wöchigen Praktikums das unglaubliche Team vom Adrive Living Lab, bestehend aus (damals) etwa 20 genialen Mitarbeitern. <br/><br/>
                                    <div className={"multi_pictures_container"}>
                                        <img className={"project_img"} src={porsche_driving}/>
                                        <img className={"project_img"} src={office_image}/>
                                    </div><br/>
                                    Der dort zu findende, lockere und humorvolle Umgang miteinander, kombiniert mit gegenseitigem Respekt ist genau das, was ich mir für mein zukünftiges Berufsleben wünsche.
                                    Jeder einzelne Mitarbeiter hat mir stets das Gefühl gegeben, ein wichtiger Bestandteil des Teams zu sein, dessen Meinung den gleichen Wert hat wie die jedes anderen Kollegen. Die familiäre Umgebung, die unter der Leitung von Prof. Dr. Bernhard Schick geschaffen wurde, hat ein starkes Zugehörigkeitsgefühl hervorgerufen, an das ich mich für lange Zeit gerne zurückerinnern werde.
                                </p>
                            </ExpandingList>
                        </div>
                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
           <div className={"timeline_wrapper"}>
               <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOnce={true}>
                   <Timeline_long name={"Bachelor"} year={"2019"} side={"left"}/>
                   <HorizontalLine side={"left"} sameLine={false} name={"Facial Motion Capture"} icon_name_one={"unreal_engine_icon"} icon_name_two={"blender_icon"}/>
               </AnimationOnScroll>
           </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOut={"animate__fadeOutRightBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                    <VideoHeader src={facial_mocap_video} />
                    <ExpandingButton>
                        <div>
                            <div>
                                <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "50px"}}>Facial Motion Capture</h1>
                            </div>
                            <ExpandingList name={"Über das Projekt"} open={true}>
                            <p className="max_width_text">
                                Im folgenden Semester stand dann das DV-Projekt des Bachelor-Studiums der Hochschule Kempten an. Obwohl es eine Vielzahl spannender Themen gab, war es keine große Überraschung, dass ich mich direkt für das Projekt „Facial Motion Capture“ entschied, nachdem ich bereits einige Erfahrungen mit dem Motion Capture-System der Hochschule machen konnte und ich zudem ein großer Fan von Animationsfilmen bin. <br/> <br/>
                                Dieses Projekt hatte hierbei alles was das Herz eines Game-Engineers begehrte: Wir würden unseren eigenen 3D-Charakter mit Blender erschaffen, ihm mit diversen Animationen Leben einhauchen und daraus abschließend ein Videospiel mit der
                                <a onClick={handleLinkClick}
                                   href={"https://www.unrealengine.com/de"} target={"_blank"} rel={"noopener noreferrer"}><i> Unreal-Engine </i>
                                </a>
                                erschaffen. Dabei war sich mein Team, das aus drei Kommilitonen und mir bestand, sehr schnell einig: Wir wollten ein Storytelling-Spiel erschaffen, das an die Großartigkeit von „Life is Strange“ erinnert und so viele unterschiedliche Gesichtsanimationen wie möglich visualisiert.
                            </p>
                                <div className={"mobile_newLine"}><br/></div>
                                <img className={"project_img"} src={life_is_strange}/>
                                <div className={"mobile_newLine"}><br/><br/></div>
                                <p className={"max_width_text"}>
                                    Und so nahm die Geschichte von Tim's Attic ihren Anfang. Ein junger Vater namens Tim wurde auf den Dachboden seines Hauses gelockt, nachdem sein Sohn ein kleines Missgeschick verursacht hatte. Dort oben angekommen, entdeckt er eine Schatztruhe voller alter Erinnerungen und spannender Geschichten...
                                </p>
                            </ExpandingList>
                            <ExpandingList name={"Gesichtsanimationen"}>
                                <p className={"max_width_text"}>
                                    Hierfür nutzten wir meine "schauspielerischen Fähigkeiten", um später mithilfe einer speziellen Kamera Videos verschiedener Emotionen aufzunehmen, um sie im Anschluss auf den zukünftigen Charakter übertragen zu können.
                                   Um die Gesichtsanimationen umzusetzen, wurde mir dazu ein professionelles Facial Motion Capture-System der Hochschule anvertraut. Hierzu malte ich mir zunächst einige Punkte ins Gesicht, die als Orientierungspunkte für die darauffolgende Umsetzung mittels Blender dienten. Dort konnten die Markierungen dann mit den Gesichts-„Bones“ des Charakters verbunden werden, um so die Bewegungsmuster meines Gesichtes zu imitieren. Auf diese Weise konnte ich meine eigenen Gesichtszüge auf Tim übertragen und die entsprechenden Animationen innerhalb der Engine unter bestimmten Spiel-Bedingungen aktivieren.
                                </p><br/>
                                <div className={"project_video"}>
                                    <VideoHeader src={fa_mocap_emotions_video} showFullscreenButton={false} zoomed={false}/><br/>
                                </div>
                            </ExpandingList>
                            <ExpandingList name={"Entwicklung Szenerie & Dachboden"}>
                                <p className={"max_width_text"}>
                                    Nachdem die wesentlichen Arbeiten zur Entwicklung einzelner Gesichtsanimationen abgeschlossen waren, konnten wir uns darum kümmern die respektiven Gesichtszüge mit einer entsprechenden Szene in Tims Attic zu verknüpfen.
                                    Der Umfang der Szenarie teilte sich hierfür in zwei Teilbereiche ein:
                                    <ul>
                                        <li> einem Gang des Erdgeschosses zur Initialisierung des Spielstarts</li>
                                        <li>  und dem Dachboden als Hauptschauplatz.</li>
                                    </ul>
                                    Die Idee bestand darin, dass der Spieler zunächst mit einem Blackscreen startet, bis ein zerbrechendes Fenster auf dem Dachboden zu hören ist. Im Anschluss schwenkt die Kamera auf Tim der sich im Erdgeschoss frägt, was sein Sohn jetzt wohl wieder angestellt hat. Danach erhält der Spieler selbst die volle Kontrolle über den Charakter zur Erkundung der Spielwelt und kann in einer Third-Person-Perspektive mit den verschiedenen Gegenständen der Spielwelt interagieren. Dabei erzählt jeder Gegenstand im Spiel seine eigene Geschichte, die Tim in seinen Gedanken abruft und daraufhin entsprechende Gesichtszüge auslöst.<br/>
                                </p>
                                <div className={"mobile_newLine"}><br/></div>
                                <img className={"project_img"} src={fa_mocap_scene_one}/>
                                <div className={"mobile_newLine"}><br/><br/></div>
                                <p className={"max_width_text"}>
                                    Obwohl die Entwicklung der Gesichtsanimationen bereits sehr viel Zeit kostete, wollten wir, dass die Szenarie der Spielwelt selbst ebenso möglichst glaubhaft und professionell wirkt. Aus diesem Grund
                                    <ul>
                                        <li>fügten wir diverse 3D-Modelle von Möbeln, Gemälderahmen, Bücher, Türen etc. hinzu,</li>
                                        <li>íntegrierten eine Hintergrund-Soundkulisse zwischernder Vögel für ein immersiveres Spielerlebnis, </li>
                                        <li>suchten nach passenden Texturen für Wände, Böden und selbsterstellten 3D-Objekten,</li>
                                        <li>erstelllten Normal-Maps, um die Texturen durch eine Tiefenstruktur realistischer wirken zu lassen,</li>
                                        <li>fügten passende ambiente Lichter zu den 3D-Objekten der Lichtquellen hinzu, </li>
                                        <li>entwickelten Visual-Effects zur Hervorhebung der interagierbaren Objekte im Spiel, </li>
                                        <li>gaben dem 3D-Charakter zusätzliche Bewegungsanimationen zum Gehen, Springen und dem Interagieren mit Objekten,</li>
                                        <li>und und und...</li>
                                    </ul>
                                </p>
                                <img className={"project_img"} src={fa_mocap_scene_two}/>
                                <div className={"mobile_newLine"}><br/><br/></div>
                                <p className={"max_width_text"}>
                                    Das Projekt entwickelte sich schnell zu einer "Mammut-Aufgabe" und erforderte dementsprechend einen expliziten Zeitplan und eine strukturelle Aufteilung der einzelnen Aufgabenpakete. Da ich neben den Gesichtsanimationen zudem die "Synchronstimme" von Tim erhielt, nahm ich für jede Erinnerung des Charakters Sprachaufnahmen auf, die bei den entsprechenden Szenen abgespielt werden konnten.<br/><br/>
                                    Werf' hierzu gern einen kurzen Blick in eine frühe Version des Dachbodens rein, um ein Gefühl für die Szenarie zu erhalten ;):
                                </p>
                                <ExpandingList name={"Der Dachboden"}>
                                    <div className={"model_container"}>
                                        <div className={'button_model'}>
                                            <Canvas style={{width: "1000px", height: "900px", objectFit: "contain"}}>
                                                <Dachboden/>
                                                <Dachboden_Stuff/>
                                            </Canvas>
                                        </div>
                                    </div>
                                </ExpandingList>
                            </ExpandingList>
                            <ExpandingList name={"Was ich gelernt habe"}>
                                <p className={"max_width_text"}>
                                    Auch am Ende dieses Projekts hatte ich wieder jede Menge gelernt. Ich hatte die Herausforderung gemeistert mich in, mir völlig unbekannter Hardware einzuarbeiten und mit ihr möglichst professionell umzugehen. Wir haben uns in die, für uns zuvor unbekannte Entwicklungsumgebung der Unreal-Engine eingearbeitet und gelernt professionelle, digitale Welten mittels Blueprints zu erschaffen. Zudem habe ich erfahren, wie echtes Teamwork im Workflow eines größeren Projekts mit straffem Zeitplan aussehen kann.
                                </p>
                                <div className={"mobile_newLine"}><br/></div>
                                <img className={"project_img"} src={facial_mocap_hardware}/>
                                <div className={"mobile_newLine"}><br/><br/></div>
                                <p className={"max_width_text"}>
                                    Natürlich war uns allen dabei stets bewusst, dass unser Werk kein Blockbuster von Ubisoft oder Rockstar Games werden würde. Auch meine schauspielerischen Fähigkeiten, sowie meine Fähigkeiten als Synchronsprecher kannten zudem ihre Grenzen :). Nichtsdestotrotz schafften wir es, jegliche unserer vorher definierten Teil-Etappenziele zu erreichen und ein - für die uns vorliegenden zeitlichen, sowie personellen Ressourcen - beachtliches Ergebnis zu erzielen, ohne dabei das für uns Wichtigste aus den Augen zu verlieren:<br/><br/>
                                    Wir hatten jede Menge Spaß dabei. <span className="flame-emoji" role="img" aria-label="Flammen-Emote">🔥</span>
                                </p>
                            </ExpandingList>
                        </div>
                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOnce={true}>
                    <Timeline_long name={"Bachelor"} year={"2020"} side={"right"}/>
                    <HorizontalLine side={"right"} sameLine={false} name={"FoodFill (BA)"} icon_name_one={"android_studio_Icon"} icon_name_two={"java_icon"} icon_name_three={"blender_icon"}/>
                </AnimationOnScroll>
            </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                    <VideoMobile src={foodfill_video} />
                    <ExpandingButton>

                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOnce={true}>
                    <Timeline_long name={"Master"} year={"2021"} side={"left"}/>
                    <HorizontalLine side={"right"} sameLine={true} name={"Vaadin"} icon_name_one={"vaadin_icon"} icon_name_two={"java_icon"}/>
                    <HorizontalLine side={"left"} sameLine={true} name={"Django"} icon_name_one={"django_icon"} icon_name_two={"python_icon"}/>
                    <div>
                        <p className={"vs-container"}>vs.</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOut={"animate__fadeOutRightBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                    <Carousel>
                        <div>
                            <VideoHeader src={django_video} />
                        </div>
                        <div>
                            <VideoHeader src={vaadin_video} />
                        </div>
                    </Carousel>
                    <ExpandingButton>

                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOnce={true}>
                    <Timeline_long name={"Master"} year={"2022"} side={"right"}/>
                    <HorizontalLine side={"right"} sameLine={true} name={"Vue.js"} icon_name_one={"vuejs_icon"} icon_name_two={"typescript_icon"}/>
                    <HorizontalLine side={"left"} sameLine={true} name={"Angular"} icon_name_one={"angular_icon"} icon_name_two={"typescript_icon"}/>
                    <div>
                        <p className={"vs-container"}>vs.</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                    <VideoHeader src={angular_vuejs_video} />
                    <ExpandingButton>

                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOnce={true}>
                    <Timeline_long name={"Master"} year={"2023"} side={"left"}/>
                    <HorizontalLine side={"left"} sameLine={false} name={"StateofDart"} icon_name_one={"tensorflow_icon"} icon_name_two={"android_studio_Icon"} icon_name_three={"java_icon"}/>
                </AnimationOnScroll>
            </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOut={"animate__fadeOutRightBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                    <VideoHeader src={stateofdart_video} />
                    <ExpandingButton>

                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOnce={true}>
                    <Timeline_long name={"Master"} year={"2023"} side={"right"}/>
                    <HorizontalLine side={"right"} sameLine={false} name={"Fireprotect (MA)"} icon_name_one={"android_studio_Icon"} icon_name_two={"java_icon"} icon_name_three={"wear_os_icon"}/>
                </AnimationOnScroll>
            </div>
            <div className={"project_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInRightBig"} animateOut={"animate__fadeOutLeftBig"} animateOnce={true}>
                    <div className={'project_timeline_short'}/>
                </AnimationOnScroll>
            </div>
        </div>
    );
};
//DAAAAAAAAAAAAAARAN DENKEN IN DER ERKLÄRUNG NOCH EIN VIDEO VON VUE.JS REINZUBRINGEN DASS DAS RESPONSIVE DESIGN ZEIGT!
export default Projects_Timeline;
