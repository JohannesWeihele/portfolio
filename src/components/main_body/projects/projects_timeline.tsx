import React, {useEffect, useRef, useState} from 'react';

import "./projects.css";
import "animate.css/animate.min.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-medium-image-zoom/dist/styles.css'

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
import foodfill_group from '../../../resources/images/foodfill_group.jpg'
import usability_engineering_lifecycle from '../../../resources/images/usability_engineering_lifecycle.jpg'
import user_empathy_map from '../../../resources/images/empathy_map.jpg'
import user_needs_table from '../../../resources/images/user_needs_table.jpg'
import content_diagramm from '../../../resources/images/content_diagramm.jpg'
import essential_use_case from '../../../resources/images/essential_use_case.jpg'
import mockup_one from '../../../resources/images/mockup_one.jpg'
import mockup_two from '../../../resources/images/mockup_two.jpg'
import mockup_three from '../../../resources/images/mockup_three.jpg'
import mockup_four from '../../../resources/images/mockup_four.jpg'
import mockup_five from '../../../resources/images/mockup_five.jpg'
import mockup_six from '../../../resources/images/mockup_six.jpg'
import mockup_seven from '../../../resources/images/mockup_seven.jpg'
import foodfill_architecture_one from '../../../resources/images/foodfill_architecture_one.jpg'
import foodfill_architecture_two from '../../../resources/images/foodfill_architecture_two.jpg'
import foodfill_architecture_three from '../../../resources/images/foodfill_architecture_three.jpg'
import foodfill_architecture_four from '../../../resources/images/foodfill_architecture_four.jpg'
import foodfill_architecture_firestore from '../../../resources/images/foodfill_architecture_firestore.jpg'
import foodfill_logo from '../../../resources/images/foodfill_logo.png'
import canyourunit from '../../../resources/images/canyourunit.jpg'
import canyourunit_django_architecture from '../../../resources/images/canyourunit_django_architecture.jpg'
import canyourunit_vaadin_architecture from '../../../resources/images/canyourunit_vaadin_architecture.jpg'
import canyourunit_final from '../../../resources/images/canyourunit_final.jpg'

//------------------GIFS---------------//
import step_one from '../../../resources/gifs/step_one.gif'
import step_two from '../../../resources/gifs/step_two.gif'
import step_three from '../../../resources/gifs/step_three.gif'

import { AnimationOnScroll} from "react-animation-on-scroll";
import { Carousel } from 'react-responsive-carousel';

import Timeline_long from "../timeline_long/timeline_long";
import HorizontalLine from "../horizontal_line/horizontal_line";
import ExpandingButton from "../expanding_button/expanding_button";
import ExpandingList from "../expanding_list/expanding_list";
import Dachboden_Stuff from "../../3D/dachboden_stuff";
import {Canvas} from "@react-three/fiber";
import Dachboden from "../../3D/dachboden";
import Zoom from "react-medium-image-zoom";

const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
};

function scrollToPosition(position: number): void {
    window.scrollTo({
        top: position,
        behavior: 'smooth',
    });
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
                            <ExpandingList name={"Was ich gelernt hab"}>
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
                            <ExpandingList name={"Was ich gelernt hab"}>
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
                        <div>
                            <div>
                                <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "50px"}}>Bachelorarbeit: FoodFill</h1>
                            </div>
                            <ExpandingList name={"Über das Projekt"} open={true}>
                                <p className={"max_width_text"}>
                                    Nachdem ich bereits während des Projekts
                                    <a onClick={() => scrollToPosition(1500)} style={{cursor: "pointer"}}> Digital Cockpit </a>
                                     merkte, dass mir die Software-Entwicklung mehr liegt, als die Entwicklung von Videospielen, beschloss ich, dass meine Bachelorarbeit diesen Schwerpunkt in Form meiner ersten eigenen App weiter festigen sollte. Prof. Dr. Dreier der Hochschule Kempten schlug mir deshalb vor, eine Anwendung zur Steuerung und Überwachung eines 3D-gedruckten Abfüllautomaten des Projekts "FoodFill" entwickeln solle, was ich sofort dankend annahm.<br/><br/>
                                    In Kooperation mit dem Fraunhofer Institut konstruierte das Forschungsinstitut
                                    <a onClick={handleLinkClick}
                                       href={"https://www.hs-kempten.de/klevertec"} target={"_blank"} rel={"noopener noreferrer"}><i> Klevertec</i>
                                    </a> der Hochschule Kempten hier einen Automaten, der komplett aus dem 3D-Drucker erzeugt wird, um eine nachhaltige Lösung für kühlpflichtige Lebensmittel ohne den Einsatz von Verpackungsmaterial zu liefern.
                                </p>
                                <img className={"project_img"} src={foodfill_group} />
                                <p className={"source_text"}>Quelle: https://www.hs-kempten.de/hochschule/aktuelles/default-bfc1402e07-127</p>
                                <p className={"max_width_text"}>
                                    Die hungrigen Kunden des Automaten sollen hierzu zukünftig einfach ihre eigenen (Tupper-) Behälter in den Verkaufsmarkt mitnehmen und die individuell gewünschte Menge eines lokalen Lieferanten von Joghurt, Milchreis, Frischkäse etc. abfüllen und an der Kasse bezahlen können. Die von mir entwickelte App sollte darüber hinaus eine zusätzliche Hilfestellung der einzelnen Benutzergruppen des Systems bereitstellen, um die individuellen User-Needs der Kunden, Mitarbeiter und des Marktleiters möglichst benutzerfreundlich zu erfüllen.<br/>
                                    Alle Produkt- sowie Herstellerinformationen sollten außerdem über einen Cloud-Speicher in Echtzeit abgerufen werden können, um so stets die aktuellen Informationen zu den jeweiligen Produkten innerhalb der App griffbereit zu halten. So ergab sich der offizielle Titel meiner Bachelorarbeit:
                                </p>
                                <p className={"highlighted_text"}>
                                    "Usability-Engineering und Entwicklung eines Prototyps einer Android-App mit Cloudanbindung zur Überwachung und Steuerung eines Lebensmittel-Abfüllautomaten"
                                </p>
                                <p className={"max_width_text"}>
                                    Mithilfe des Usability-Engineerings sollten hierzu innerhalb der Anforderungsanalyse explizit die einzelnen, individuellen Nutzerwünsche der respektiven Nutzergruppen herausgearbeitet werden, um diese im weiteren Verlauf genauer spezifizieren und implementieren zu können.
                                </p>
                            </ExpandingList>
                            <ExpandingList name={"Usability-Engineering"}>
                                <p className={"max_width_text"}>
                                    Bei der Erarbeitung der Software mittels des Usability-Engineerings orientierte ich mich an bestehenden Praktiken des Design-Thinking Konzepts, sowie einigen gängigen Praktiken des Usability-Engineering Lifecycles.
                                </p>
                                <Zoom>
                                    <img className={"project_img"} src={usability_engineering_lifecycle}/>
                                </Zoom>
                                <p className={"max_width_text"}>
                                    Im Zuge meines Bachelorarbeit setzte ich mir demnach zum Ziel, einen vollständigen Iterationszyklus des Lifecycles mit den Kategorien
                                    <ul>
                                        <li>Analyse,</li>
                                        <li>Modellierung,</li>
                                        <li>Spezifikation,</li>
                                        <li>Realisierung,</li>
                                        <li>und Evaluation</li>
                                    </ul>
                                    zu durchlaufen, um so den Prototyp einer vollumfänglichen, nutzerorientierten Android-Applikation zu entwickeln. Da die Gesamtlänge meiner Bachelorarbeit am Ende stolze <b>144 Seiten </b> betrug, sollen die einzelnen Unterkategorien im Folgenden lediglich grob angeschnitten werden, um das grundlegende Konzept der Entwicklung zu verdeutlichen.
                                </p>
                                <ExpandingList name={"Analyse"}>
                                    <p className={"max_width_text"}>
                                        Während der Anforderungsanalyse gliederte ich die Benutzergruppen des FoodFill-Abfüllautomaten zunächst in Kunden, Mitarbeiter und Marktleiter eines Lebensmittel-Marktes. Im Anschluss entwarf ich für jede dieser Gruppen einen Fragebogen mit potenziellen Nutzerbedürfnissen und -wünschen, um daraus die Priorisierung der einzelnen User-Needs ermitteln zu können. Beispielsweise konnten die Probanden bei den User-Needs
                                        <ul>
                                            <li><i>Als <b>Kunde</b> eines Biosupermarktes möchte ich mich über den Hersteller meines gewünschten Produktes informieren können.</i></li><br/>
                                            <li><i>Als <b>Mitarbeiter</b> eines Biosupermarktes möchte ich mich über die aktuelle Temperatur der Produkte, die eine Kühlung benötigen informieren können.</i></li><br/>
                                            <li><i>Als <b>Marktleiter</b> eines Biosupermarktes möchte ich mich über den aktuellen Bestand/Restbestand des jeweiligen Produkts informieren können.</i></li>
                                        </ul>
                                        zwischen den Kategorien von <i>"Stimme überhaupt nicht zu"</i> bis <i>"Stimme voll und ganz zu"</i> die Priorisierung der einzelnen Wünsche konkretisieren, wodurch sich am Ende der Auswertung 65 positive User-Needs ergaben, die bei der weiteren Entwicklung des Systems berücksichtigt werden müssen.
                                    </p>
                                </ExpandingList>
                                <ExpandingList name={"Modellierung"}>
                                    <p className={"max_width_text"}>
                                        Bei der Modellierung entwickelte ich anschließend zunächst <i>User-Empathy-Maps</i>, um jede Benutzergruppe aus den Perspektiven
                                        <ul>
                                            <li>Sees,</li>
                                            <li>Hears,</li>
                                            <li>Thinks & Feels</li>
                                            <li>Says & Does</li>
                                            <li>und Pain & Gains</li>
                                        </ul>
                                        zu betrachten und sich dadurch als Entwickler besser in die Person hineinversetzen zu können. Hier als Beispiel die Empathy-Map für Kunden:
                                    </p>
                                    <Zoom>
                                        <img className={"project_img"} src={user_empathy_map}/>
                                    </Zoom>
                                    <p className={"max_width_text"}>
                                        Die einzelnen, positiven <i>User-Needs</i> werden anschließend in Tabellen weiter spezifiziert, um so im weiteren Entwicklungsverlauf unkompliziert Systemanforderungen extrahieren zu können, die sich aus den User-Needs ergeben. <br/>
                                        Beispielsweise:
                                    </p>
                                    <Zoom>
                                        <img className={"project_img"} src={user_needs_table}/>
                                    </Zoom>
                                    <p className={"max_width_text"}>
                                        Im letzten Schritt der Modellierung wurden für die herausgearbeiteten Nutzergruppen darüber hinaus individuelle <i>Personae</i> angefertigt, um jeder Gruppe ein visuelles, stereotypisches Gesicht geben zu können.
                                    </p>
                                </ExpandingList>
                                <ExpandingList name={"Spezifikation"}>
                                    <p className={"max_width_text"}>
                                        Innerhalb der Spezifikation sollten jetzt noch <i>User-Szenarien</i> angefertigt werden, in denen die einzelnen Benutzergruppen beispielhaft zu den jeweiligen Nutzerbedürfnissen gelangen könnten und wie diese User-Needs im Anschluss durch eine Interaktion mit dem System befriedigt werden können.
                                        Als Ergebnis erhält der Entwickler dadurch einen Einblick in einige realitätsnahe Alltagsszenarien des Anwenders und eine Auflistung aller Funktionen, die benötigt werden, um eben diese erarbeiteten Wünsche zu erfüllen. <br/><br/>
                                        Mit den <i>Essential Use-Case-Tabellen</i> können die Funktionen der User-Szenarien im letzten Schritt aufgegliedert und mit benötigten Reaktionen des Systems verknüpft werden, um so zu jeder Aktion des Nutzers eine entsprechende Verarbeitung der Software herausarbeiten zu können. Hier ein Beispiel:
                                    </p>
                                    <Zoom>
                                        <img className={"project_img"} src={essential_use_case}/>
                                    </Zoom>
                                </ExpandingList>
                                <ExpandingList name={"Realisierung"}>
                                    <p className={"max_width_text"}>
                                        Die gesamte Vorarbeit der vergangenen Kategorien eines Iterationszykluses findet innerhalb der Realisierung nun seinen Höhepunkt, wenn die eigentliche Implementierung der Software erarbeitet werden kann <i>(siehe Software-Architektur)</i>. Mithilfe eines detaillierten <i>Content-Diagramms</i> können die einzelnen Funktionen nun in passende Aktivitäten gegliedert und miteinander verknüpft werden, sodass die App möglichst intuitiv und die Wege zwischen den Funktionen nach Möglichkeit minimal ausfällt. <br/>
                                        Hier ein Ausschnitt des Diagramms:<br/><br/>
                                        <Zoom>
                                            <img className={"project_img"} src={content_diagramm}/>
                                        </Zoom><br/>
                                        Die konkretisierten Views wurden im Anschluss mithilfe von <i>Adobe Xd</i> in Form eines Mockups spezifiziert, sowie Buttons, Beschriftungen etc. anhand eines zuvor entwickelten <i>Papier-Prototyps</i> möglichst intuitiv platziert, um das Nutzererlebnis der Anwender zu maximieren. Am Ende entstand daraus dieses finale Konzept einer UI, welches im Anschluss als Vorlage für die Programmierung des Systems verwendet werden würde:
                                    </p>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_one}/>
                                    </Zoom><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_two}/>
                                    </Zoom><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_three}/>
                                    </Zoom><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_four}/>
                                    </Zoom><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_five}/>
                                    </Zoom><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_six}/>
                                    </Zoom><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={mockup_seven}/>
                                    </Zoom><br/>
                                </ExpandingList>
                                <ExpandingList name={"Evaluation"}>
                                    <p className={"max_width_text"}>
                                        Die Evaluation soll am Ende eines Iterationszykluses des Usability-Engineering Lifecyclces aufschluss darüber geben, ob die Nutzerbedürfnisse mit den daraus erarbeiteten Funktionalitäten der Software übereinstimmen.
                                        Mithilfe zuvor angefertigter User-Szenarien konnten die einzelnen Benutzergruppen nun die verschiedenen Funktionen testen, sowie anhand des danach geführten Interviews ihre eigene Meinung und Verbesserungsvorschläge anbringen.<br/>
                                        Die daraus ermittelten Optimierungen dienen anschließend als Entwicklungsgrundlage für den zweiten Iterationszyklus.
                                    </p>
                                </ExpandingList>
                            </ExpandingList>
                            <ExpandingList name={"Entwicklungsumgebung"}>
                                <p className={"max_width_text"}>
                                    <p className={"highlighted_text"}>
                                        Android-Studio
                                    </p>
                                    Die Entwicklungsumgebung zur Implementierung der Android-App konnte ich selbst wählen und entschied mich nach kurzer Recherche für Android-Studio und Java. Android-Studio umfasst eine großflächige Dokumentation über die Herangehensweise zur professionellen Entwicklung einer eigenen App, zudem gab es jede Menge Youtube-Tutorials im Netz, daher empfand ich die Nutzung der IDE als recht einsteigerfreundlich.
                                    <p className={"highlighted_text"}>
                                        Adobe Xd
                                    </p>
                                    Wie bereits innerhalb <i>Usability-Engineering</i> beschrieben, nutzte ich für die Entwicklung eines Mockups der zukünftigen Android-App, Adobe Xd der
                                    <a onClick={handleLinkClick}
                                       href={"https://www.adobe.com/de/creativecloud.html"} target={"_blank"} rel={"noopener noreferrer"}><i> Adobe Creative Cloud. </i>
                                    </a>
                                    Dafür entschied ich mich weil ich gelesen hatte, dass dies eine der profesisonellsten Methoden innerhalb diverser Unternehmen ist, um Mockups zu konstruieren. Notwendige, visuelle Elemente designte ich zudem mithilfe von Adobe Illustrator und Adobe Photoshop, in welche ich mich ebenfalls einarbeitete.
                                    <p className={"highlighted_text"}>
                                        Google Firebase Firestore
                                    </p>
                                    Da die Applikation darüber hinaus einen Cloud-Speicher für Produkte, Hersteller, Mitarbeiterdaten etc. erhalten sollte, suchte ich nach passende Anbieter die eine Echtzeit-Abfrage ermöglichen würden. Neben AWS bin ich dabei auf Google Firebase gestoßen und habe mich letztendlich für Firestore entschieden, da die Integration des Services in Android-Studio Projekte recht intuitiv erschien.
                                    <p className={"highlighted_text"}>
                                        Blender
                                    </p>
                                    Wieso gehört eine 3D-Modellierungssoftware zu den Entwicklungsumgebungen einer Android-App frägst du dich? Naja, innerhalb der Android-App sollte unter anderem auch eine Anleitung zur Nutzung des FoodFill-Automaten gewährleistet werden.
                                    Hier kam ich auf die Idee, das vorhandene 3D-Druckmodell des Abfüllautomaten dafür zu nutzen eine dreidimensionale Anleitung in Form von GIFs anzufertigen. Hier das Ergebnis:
                                </p>
                                <div className={"multi_pictures_container"}>
                                    <img className={"project_img"} src={step_one}/>
                                    <img className={"project_img"} src={step_two}/>
                                    <img className={"project_img"} src={step_three}/>
                                </div><br/>
                            </ExpandingList>
                            <ExpandingList name={"Software-Architektur"}>
                                <p className={"max_width_text"}>
                                    <p className={"highlighted_text"}>
                                        Android-App
                                    </p>
                                    Die Software-Architektur der Android-App erstreckt sich über vier verschiedene Ebenen, die die grundlegende Struktur der Anwendung beschreiben. Die <b>Aktivitätsebene</b> definiert dabei zunächst die wesentlichen Views bzw. Activities der Software, sowie die Interaktion mit den jeweils dazugehörigen XML-Skripten:<br/><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={foodfill_architecture_one}/>
                                    </Zoom><br/>
                                    In der nächsten Ebene werden die benötigten <i>RecyclerViews</i> der einzelnen Aktivitäten dargestellt. Innerhalb der RecyclerViews werden dynamische Listen generiert, die sich meistens aus den Datenabfragen des Firestore-Speichers ergeben. Jeder Recycler besteht dabei grundsätzlich aus einer Item-Klasse für die Struktur, einem XML-Skript für das Design und einer Adapter-Klasse, welche die beiden Elemente miteinander verknüpft:<br/><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={foodfill_architecture_two}/>
                                    </Zoom><br/>
                                    Innerhalb der dritten Ebene werden im Anschluss alle Hilfsklassen definiert, die von den verschiedenen Aktivitäten benötigt werden, um Funktionen wie Info-Dialoge, oder aber den Verbindungsaufbau zur Firestore-Datenbank gewährleisten zu können:<br/><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={foodfill_architecture_three}/>
                                    </Zoom><br/>
                                    Die letzte Ebene fügt jetzt noch alle Dialoge hinzu, die in einem neuen Fenster, jedoch innerhalb der aktuellen Aktivität aufgerufen werden:<br/><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={foodfill_architecture_four}/>
                                    </Zoom><br/>
                                    So ergibt sich das vollumfängliche Abbild der Anwendung in Form eines Diagramms, welches den gesamten Funktionsumfang der Anwendung repräsentiert.
                                    <p className={"highlighted_text"}>
                                        Google Firestore
                                    </p>
                                    Die Architektur des Google Firebase Firestore-Speichers gliedert sich in insgesamt drei Unterkategorien
                                    <ul>
                                        <li>Events,</li>
                                        <li>Manufacturers,</li>
                                        <li>und Products.</li>
                                    </ul>
                                    Da jegliche Informationen aus der Datenbank in Echtzeit an die Applikation übertragen werden, können Änderungen an Produkten etc. sofort innerhalb der Software eingesehen werden, wodurch zu jeder Zeit eine Bereitstellung der aktuellen Informationen gewährleistet werden kann:<br/><br/>
                                    <Zoom>
                                        <img className={"project_img"} src={foodfill_architecture_firestore}/>
                                    </Zoom><br/>
                                </p>
                            </ExpandingList>
                            <ExpandingList name={"Was ich gelernt hab"}>
                                <p className={"max_width_text"}>
                                    Die Entwicklung der FoodFill-App zur Steuerung und Überwachung des FoodFill-Abfüllautomaten war mit Abstand das umfangreichste Projekt, welches ich zu dieser Zeit umgesetzt hatte. Aus 144 Seiten Bachelorarbeit, mehreren Tausend Zeilen Code, einer dreidimensionalen Bedienungsanleitung, sowie einem kompletten Iterationszykluses des Usability-Engineerings nahm ich vor allem eine Sache mit: <b>Stress- und Frustrationstoleranz.</b><br/><br/>
                                    Ich lernte mit Android Studio und dessen Mechaniken zur Entwicklung moderner Smartphone-Applikationen umzugehen und dabei meine Java-Kenntnisse weiter zu festigen. Der wöchentliche Austausch mit den Kollegen des Klevertecs Kempten zeigte mir, wie eine nutzerorientierte Software-Entwicklung aussehen kann, die die Wünsche und Bedürfnisse der späteren Anwender zum Mittelpunkt der Entwicklung macht. Ich lernte XML kennen und darüber hinaus, wie man den externen Dienst eines Cloud-Speichers in den Workflow der Anwendung integrieren konnte.
                                    Ich arbeitete mich grob in einige Dienste der Creative Cloud von Adobe ein und designte daraus eine professionelle Benutzeroberfläche mithilfe des, mir zuvor vollständig unbekannten Mockup-Tools <i>Adobe Xd</i>.
                                    Zuletzt lernte ich, wie man eine wissenschaftliche Arbeit verfasst und eine fundierte Evaluation innerhalb einer Usability-Studie durchführte.<br/><br/>
                                    Doch auch charakterlich konnte ich mich innerhalb dieses halben Jahres deutlich weiterentwickeln. Meine Bachelorarbeit im Lockdown der Corona-Hochphase anzufertigen, ohne die Möglichkeiten eines persönlichen, sozialen Austauschs genießen oder mich zum Abschalten mit Freunden treffen zu können, nagte ziemlich oft an meinen Grenzen. Jedoch ganz nach dem Motto
                                    <p className={"highlighted_text"}>
                                        Was dich nicht umbringt, macht dich stärker
                                    </p>
                                    bin ich davon überzeugt, dass diese Ausnahmesituation meine mentale Stärke weiter gefestigt hat. Darüber hinaus konnte ich dem Ganzen auch etwas positives abgewinnen, denn ich glaube nicht, dass meine Bachelorarbeit ohne Lockdown in diesem Umfang möglich gewesen wäre.<br/>
                                    <img className={"project_img"} src={foodfill_logo}/>
                                </p>
                            </ExpandingList>
                        </div>
                    </ExpandingButton>
                </AnimationOnScroll>
            </div>
            <div className={"timeline_wrapper"}>
                <AnimationOnScroll delay={-1000} offset={100} animateIn={"animate__fadeInLeftBig"} animateOnce={true}>
                    <Timeline_long name={"Master"} year={"2021"} side={"left"}/>
                    <HorizontalLine side={"right"} sameLine={true} name={"Vaadin"} icon_name_one={"vaadin_icon"} icon_name_two={"java_icon"} icon_name_three={"spring_boot"}/>
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
                        <div>
                            <div>
                                <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "50px"}}>Can You Play It?</h1>
                                <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "30px", marginTop: "-50px"}}>Django vs. Vaadin</h1>
                            </div>
                            <ExpandingList name={"Über das Projekt"} open={true}>
                                <p className={"max_width_text"}>
                                    Nachdem ich bereits im Bachelor meine Leidenschaft für die Software-Entwicklung entdeckt hatte, wollte ich mich innerhalb meines Masterstudiums nun noch weiter auf die Entwicklung von Software fokussieren.
                                    Hierzu wechselte ich von der Hochschule Kempten zur (nun) Technischen Hochschule in Augsburg, da dort ein Informatik-Schwerpunkt zum Software-Engineer angeboten wurde.<br/><br/>
                                    Ein wesentlicher Bestandteil zum Software-Engineer war dabei unter anderem die Fähigkeit zur Webentwicklung. Während viele <i>normale</i> Informatik-Studiengänge bereits im Bachelorstudium einige Basics zu HTML, CSS und Java- bzw. Typescript erlernt hatten, lag der Fokus des Game-Engineers vermehrt bei der Computergrafik- und Physik-Programmierung.
                                    Aus diesem Grund beschloss ich, mich in den kommenden Semestern vermehrt der Webentwicklung zu widmen, um einige bekannte Technologien zur Entwicklung von Websites kennenzulernen.
                                </p>
                                <p className={"max_width_text"}>
                                    Mit dem Projekt <i>Can You Play It</i> konnte ich dabei mein ersten Fullstack-Erfahrungen eines Web-Projekts machen. Als Vorbild der Idee sah ich dabei das Tool
                                    <a onClick={handleLinkClick}
                                       href={"https://www.systemrequirementslab.com/cyri"} target={"_blank"} rel={"noopener noreferrer"}><i> Can You Run it </i>
                                    </a>
                                     vom SystemRequirementsLab. <br/><br/>
                                </p>
                                <img className={"project_img"} src={canyourunit}/>
                                <p className={"max_width_text"}>
                                    Die Software scannt dabei die aktuelle System-Hardware des Nutzers und vergleicht sie im Anschluss mit dem zuvor angegebenen Spiel. Sollten alle Hardware-Anforderung in Bezug auf
                                    <ul>
                                        <li>Grafikkarte,</li>
                                        <li>Prozessor,</li>
                                        <li>Arbeitsspeicher,</li>
                                        <li>Festplattenspeicher,</li>
                                        <li>oder aber dem Betriebssystem</li>
                                    </ul>
                                    mit den Mindest- sowie den empfohlenen Anforderungen des Entwicklerstudios übereinstimmen, erhält der Anwender grünes Licht und kann sich das Spiel ohne Probleme kaufen. Sollte die Hardware jedoch zu schlecht sein, erspart sich der Spieler spätere Enttäuschungen, da das Spiel nicht funktionieren würde.<br/><br/>
                                    Nach diesem Prinzip wollte ich auch Can You Play It? im Rahmen zweier Wahlpflichtfächer entwickeln und dabei die beiden Frameworks Django und Vaadin kennenlernen, sowie meine Programmierfähigkeiten mit Python und Java weiter festigen.
                                </p>
                            </ExpandingList>
                            <ExpandingList name={"Entwicklungsumgebung"}>
                                <p className={"max_width_text"}>
                                    <p className={"highlighted_text"}>
                                        Django
                                    </p>
                                    Als Entwicklungsumgebung für das Django-Projekt wählte ich Jetbrains PyCharm, da wir hier eine kostenlose Lizenz der Hochschule erhielten. Darüber hinaus nutzte ich eine SQLite-Datenbank, um auf alle wichtigen Hardware-Informationen zugreifen zu können. Über das Object Relational Mapping (ORM) des Backend-Frameworks konnten hier direkte Abfragen auf die Datenbank erfolgen, ohne diese über einen externen Backend-Server liefern zu müssen.
                                    <p className={"highlighted_text"}>
                                        Vaadin
                                    </p>
                                    Auch für das Vaadin-Projekt nutzte ich als IDE das Java-Äquivalent zu PyCharm - IntelliJ Idea. Hier diente mir eine H2-Datenbank als Grundlage, um alle Hardwarekomponenten und Spiele abzuspeichern, die mit dem System des Anwenders verglichen werden können. Darüber hinaus wurde für als Backend für alle HTTP-Abfragen und Security-Aspekte wie Token-Überprüfungen, Spring-Boot verwendet.
                                </p>
                            </ExpandingList>
                            <ExpandingList name={"Software-Architektur"}>
                                <p className={"max_width_text"}>
                                    Da sich die Funktionsweise der beiden Frameworks grundlegend voneinander unterscheiden, soll im Folgenden die verschiedenen Herangehensweisen der Projekte mithilfe von Diagrammen verdeutlicht werden.<br/><br/>
                                </p>
                                    <ExpandingList name={"Django"}>
                                        <p className={"max_width_text"}>
                                            Das Template-System von Django bot mir eine vielseitige Schnittstelle, um die von mir gewünschte Benutzeroberfläche in HTML und CSS umzusetzen. Hierbei entwickelte ich insgesamte 5 verschiedene Templates, für
                                            <ul>
                                                <li>Login,</li>
                                                <li>Profilübersicht,</li>
                                                <li>Registrierung,</li>
                                                <li>Videospiel-Suche,</li>
                                                <li>und Videospiel-Vergleich</li>
                                            </ul>
                                            um die verschiedenen Funktionen separieren und so eine strukturierte Website gestalten zu können. Jedes Template greift dabei auf die benötigten Datenbank-Einträge zu, welche zuvor innerhalb der SQLite-Datenbank abgespeichert worden sind. Der anschließende, (vereinfachte) System-Vergleich erfolgt dann über einen Index-Vergleich der hinterlegten Hardware-Komponenten.<br/><br/>
                                            <Zoom>
                                                <img className={"project_img"} src={canyourunit_django_architecture}/>
                                            </Zoom><br/>
                                            Während eine RTX 3080 beispielsweise auf Platz 26 angelegt worden ist, liegt eine GTX 780 auf Platz 10. Jedes in der Datenbank angelegte Videospiel erhält dadurch eine Reihe von Fremdschlüssel der Indizes zu den jeweiligen Datenbank-Einträgen der Hardware-Komponenten. Das angelegte Systemprofil des Nutzers enthält, innerhalb des Datenbank-Eintrags darüber hinaus ebenfalls eine Reihe von Indizes der hinterlegten Hardware.<br/><br/>
                                            Sollte der Anwender nun sein hinterlegtes System mit einem Videospiel vergleichen wollen, werden lediglich die Indizes miteinander verglichen. Da die Datenbank-Einträge von <i>Sehr schlecht</i> bis <i>Sehr gut</i> angeordnet sind, muss innerhalb der Logik lediglich überprüft werden, ob
                                            <p className={"highlighted_text"}>
                                                Komponentenindex X {'>'}= Komponentenindex Y
                                            </p> ist, um die Voraussetzungen für das Spiel zu erfüllen.
                                            Hierbei wurden sowohl für die Mindest-, als auch für die empfohlenen Anforderungen der einzelnen Spiele eigene Datenbank-Einträge angelegt, um jedes hinterlegte Spiel mit der persönlichen Hardware vergleichen zu können.
                                        </p>
                                    </ExpandingList>
                                    <ExpandingList name={"Vaadin"}>
                                        <p className={"max_width_text"}>
                                            Da ich ein Gefühl der Eigenheiten verschiedener Web-Frameworks bekommen wollte, entschloss ich, die selbe Website noch einmal zu entwickeln, diesmal jedoch mit Vaadin als Frontend- und Spring Boot als Backend-Framework. Am deutlichsten fiel mir dabei auf, dass sich Vaadin vollständig auf Java als Entwicklungsschnittstelle für's Frontend reduzierte. Auch wenn Java zu meinen persönlichen Programmier-Favoriten gehört, empfand ich die Entwicklung mit Django deutlich intuitiver als mit Vaadin.<br/><br/>
                                            Nichtsdestotrotz adaptierte ich meine bisherige Vorgehensweise auf die eigene Funktionsweise von Vaadin und entwarf somit folgende Architektur:<br/><br/>
                                            <Zoom>
                                                <img src={canyourunit_vaadin_architecture} className={"project_img"}/>
                                            </Zoom><br/>
                                            Statt Templates hatte ich nun Views, die innerhalb von Java-Klassen die verschiedenen Seiten der Webanwendung darstellte. Die Hardware-Komponenten wurden darüber hinaus jeweils in eine Bean-Klasse, sowie einem Interface definiert, auf denen die Models
                                            <ul>
                                                <li>User,</li>
                                                <li>und PC_Configuration</li>
                                            </ul>
                                            zugreifen, um die jeweilige Systen-Hardware aus der H2-Datenbank abzubilden. Die Logik des Hardware-Vergleichs erfolgt anschließend ebenfalls über einen Index-Vergleich der Datenbank-Einträge. So konnte ich auch hier eine vollumfängliche Version der Webanwendung <i>Can You Play It?</i> konstruieren und komplett neue Erfahrungswerte zur Webentwicklung mitnehmen.
                                        </p>
                                    </ExpandingList>
                            </ExpandingList>
                            <ExpandingList name={"Was ich gelernt hab"}>
                                <p className={"max_width_text"}>
                                    Das Projekt Can You Play It? bot mir die perfekte Gelegenheit, um einen ersten, jedoch umfangreichen Einblick in die Welt eines Webentwicklers zu erhalten. Ich lernte zwei beliebte Web-Frameworks zur Entwicklung professioneller Webseiten kennen und konnte mich fundiert in die individuellen Technologien einarbeiten, um daraus selbstständig meine ersten beiden Webanwendungen zu konstruieren.<br/><br/>
                                    Auch wenn der Fokus der Entwicklung bislang hauptsächlich noch im Frontend lag, empfand ich meine ersten beiden Web-Projekte als einen wegweisenden Schritt näher zum professionellen Software- und Web-Engineer. Ich lernte HTML und CSS kennen und schaffte es, mein, zuvor in Adobe Xd entwickeltes Mockup völlig identisch mit der Markup- und Stylesheet-Sprache nachzubilden.
                                </p>
                                <img className={"project_img"} src={canyourunit_final}/>
                                <p className={"max_width_text"}>
                                    Dadurch war ich fest motiviert meine Fähigkeiten als Web- und Software-Engineer in den kommenden Semestern noch weiter auszubauen und neue Erfahrungen mit anderen Web-Frameworks zu sammeln.
                                </p>
                            </ExpandingList>
                        </div>
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
                        <div>
                            <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "50px"}}>FoodSupport</h1>
                            <h1 style={{color: "black", fontFamily: "Agency FB", fontSize: "30px", marginTop: "-50px"}}>Angular vs. Vue.js</h1>
                        </div>
                        <ExpandingList name={"Über das Projekt"} open={true}>
                            <p className={"max_width_text"}>
                                Nachdem ich im vergangenen Semester meine ersten beiden Webseiten entwickelte hatte, war ich fest entschlossen, mit den kommenden Wahlpflichtfächern weitere Erfahrungswerte innerhalb der Web-Entwicklung zu sammeln.
                                Da die letzte Thematik aufgrund der jüngeren Zielgruppe optisch noch etwas "verspielter" war, wollte ich mich diesmal zudem in einer schlichteren Website mit einer älteren Zielgruppe versuchen.<br/><br/>
                                Darüber hinaus entschied ich mich dazu meine Erfahrungen mit gängigen Praktiken wie
                                <ul>
                                    <li>Single-Page Webanwendungen,</li>
                                    <li>Typescript oder Javascript, </li>
                                    <li>HTTP-Anfragen, </li>
                                    <li>Local-Storage, </li>
                                    <li>oder einem Responsive-Design</li>
                                </ul>
                                weiter auszubauen, um eine moderne, flexible Website zu entwickeln. Ein eigener, professioneller Webshop wirkte dabei als die nächste, perfekte Herausforderung, um all diese Praktiken in einem neuen Projekt zu vereinen.
                            </p>
                        </ExpandingList>
                        <ExpandingList name={"Entwicklungsumgebung"}>

                        </ExpandingList>
                        <ExpandingList name={"Software-Architektur"}>

                        </ExpandingList>
                        <ExpandingList name={"Was ich gelernt hab"}>

                        </ExpandingList>
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
