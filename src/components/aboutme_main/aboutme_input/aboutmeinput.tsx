import React from 'react'
import './aboutmeinput.css';
import introduction from "../../main_body/introduction";
import completed_img from "../../../resources/icons/completed.png"
import web_icon from "../../../resources/icons/web_icon.png"
import game_icon from "../../../resources/icons/gaming_icon.png"
import threed_icon from "../../../resources/icons/threed_icon.png"
import software_icon from "../../../resources/icons/software_icon.png"
import gaming_two_icon from "../../../resources/icons/gaming_two_icon.png"
import events_icon from "../../../resources/icons/events_icon.png"
import travel_icon from "../../../resources/icons/travel_icon.png"
import friends_icon from "../../../resources/icons/friends.png"
import movies_icon from "../../../resources/icons/movies_series.png"
import fitness_icon from "../../../resources/icons/fitness_icon.png"

interface AboutmeInputProps {
    dataFromChild: any;
}


const AboutmeInput: React.FC<AboutmeInputProps> = ({ dataFromChild }) => {

    return (
        <div className={"aboutme_input_container"}>
            {dataFromChild === 'About' && (
                <div className={"aboutme_input"}>
                    <div className={"scrollable_content"}>
                        <h4>Über mich</h4>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p>
                                    <b>Hi, ich bin Johannes!</b><br/>
                                    Fullstack- und Software-Engineer aus Augsburg in Bayern. Obwohl ich in den letzten Jahren meines Bachelor- und Masterstudiums bereits einige Erfahrungen in der Entwicklung professioneller Anwendungen machen konnte, freue ich mich bereits jetzt darauf neue, faszinierende Projekte und Technologien kennenzulernen, mit denen ich meine Fähigkeiten und Erfahrungen noch weiter ausbauen und auf die Probe stellen kann!
                                </p>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <div className={"about_introduction_flexbox"}>
                                    <p className={"introduction_highlight_text"}>Alter:</p>
                                    <p className={"introduction_normal_text"} style={{marginLeft: "250px"}}><b>28 Jahre</b></p>
                                </div>
                                <div className={"about_introduction_flexbox"}>
                                    <p className={"introduction_highlight_text"}>Aktueller Wohnort:</p>
                                    <p className={"introduction_normal_text"} style={{marginLeft: "100px"}}><b>Augsburg, Bayern</b></p>
                                </div>
                                <div className={"about_introduction_flexbox"}>
                                    <p className={"introduction_highlight_text"}>Abschluss:</p>
                                    <p className={"introduction_normal_text"} style={{marginLeft: "170px"}}><b>M.Sc. Informatik</b></p>
                                </div>
                                <div className={"about_introduction_flexbox"}>
                                    <p className={"introduction_highlight_text"}>Sprachen:</p>
                                    <p className={"introduction_normal_text"} style={{marginLeft: "170px"}}><b>Deutsch, Englisch</b></p>
                                </div>
                            </div>
                        </div>
                        <h4>Abschlüsse & Qualifikationen</h4>
                        <div className={"about_wrapper_left"}>
                            <div className={"about_introduction_flexbox"}>
                                <div>
                                    <p className={"aboutme_quali_one"}><b>Mittlere Reife</b></p>
                                    <img src={completed_img} className={"completed_img"}/>
                                    <p className={"aboutme_quali_two"}>Peiting, Mittelschule</p>
                                </div>
                                <div>
                                    <p className={"aboutme_quali_one"}><b>Bürokaufmann Ausb.</b></p>
                                    <img src={completed_img} className={"completed_img"}/>
                                    <p className={"aboutme_quali_two"}>Weilheim, K&L Ruppert</p>
                                </div>
                                <div>
                                    <p className={"aboutme_quali_one"}><b>Fachabitur (Wirtschaft)</b></p>
                                    <img src={completed_img} className={"completed_img"}/>
                                    <p className={"aboutme_quali_two"}>Weilheim, Berufsoberschule</p>
                                </div>
                            </div>
                            <div className={"about_introduction_flexbox"}>
                                <div>
                                    <p className={"aboutme_quali_one"}><b>B.Sc. Informatik, <br/>Game-Engineering</b></p>
                                    <img src={completed_img} className={"completed_img"}/>
                                    <p className={"aboutme_quali_two"}>Kempten, Hochschule</p>
                                </div>
                                <div>
                                    <p className={"aboutme_quali_one"}><b>M.Sc. Informatik, <br/>Software-Engineering</b></p>
                                    <img src={completed_img} className={"completed_img"}/>
                                    <p className={"aboutme_quali_two"}>Augsburg, Technische Hochschule</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {dataFromChild === 'Skills' && (
                <div className={"aboutme_input"}>
                    <div className={"scrollable_content"}>
                        <h4>Fähigkeiten & Erfahrungen</h4>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p className={"aboutme_quali_one"}><b><b>Web-Entwicklung</b></b></p>
                                <img src={web_icon} className={"aboutme_skills_icon"}/>
                                <p className={"aboutme_quali_two"}>Gerade diese Mischung aus kreativer Arbeit am Frontend und der anschließenden technischen Komplettierung der Komponenten im Backend ist es, was ich an der Webentwicklung besonders schätze.</p>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <p className={"aboutme_quali_one"}><b><b>Spiele-Entwicklung</b></b></p>
                                <img src={game_icon} className={"aboutme_skills_icon"}/>
                                <p className={"aboutme_quali_two"}>Meine Leidenschaft für Videospiele konnte ich in den letzten Jahren bereits in Form von ersten, selbst erstellten Videospielen mit Motion-Capture-Animationen ausleben.</p>
                            </div>
                        </div>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p className={"aboutme_quali_one"}><b><b>Software-Entwicklung</b></b></p>
                                <img src={software_icon} className={"aboutme_skills_icon"}/>
                                <p className={"aboutme_quali_two"}>Auch innerhalb der Entwicklung von Programmen für diverse Endgeräte entwickelte ich bereits einige Apps und Software mittels Qt, Visual Studio und Android Studio.</p>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <p className={"aboutme_quali_one"}><b><b>Design & 3D-Modellierung</b></b></p>
                                <img src={threed_icon} className={"aboutme_skills_icon"}/>
                                <p className={"aboutme_quali_two"}>Alle meine bisherigen Projekte bauen auf selbsterstellte Design-Komponenten auf und beinhalten oft eine Integrierung von modernen, teils selbst-modellierten 3D-Elementen.</p>
                            </div>
                        </div>
                        <h4>Coding & Skills</h4>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p><b>Web-Entwicklung</b></p>
                                <div className={"line_graph"} id={"graph_web"}></div>
                                <p><b>Software-Entwicklung</b></p>
                                <div className={"line_graph"} id={"graph_software"}></div>
                                <p><b>Spiele-Entwicklung</b></p>
                                <div className={"line_graph"} id={"graph_game"}></div>
                                <p><b>Usability & UI-Entwicklung</b></p>
                                <div className={"line_graph"} id={"graph_usability"}></div>
                                <p><b>Adobe Creative Cloud</b></p>
                                <div className={"line_graph"} id={"graph_creative"}></div>
                                <p><b>Blender</b></p>
                                <div className={"line_graph"} id={"graph_blender"}></div>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <p><b>Deutsch</b></p>
                                <div className={"line_graph"} id={"graph_german"}></div>
                                <p><b>Englisch</b></p>
                                <div className={"line_graph"} id={"graph_english"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {dataFromChild === 'Freizeit' && (
                <div className={"aboutme_input"}>
                    <div className={"scrollable_content"}>
                        <h4>Hobbies & Interessen</h4>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p className={"aboutme_quali_one"}><b><b>Sport & Fitness</b></b></p>
                                <img src={fitness_icon} className={"aboutme_hobbies_icon"}/>
                                <p className={"aboutme_quali_two"} style={{marginBottom: "50px"}}>Ein gesunder Körper fördert einen gesunden Geist. Ganz egal ob Fitnessstudio, Wandern, Bergsteigen, Bouldern, oder Skateboarden - auch in meiner Freizeit suche ich mir gern neue Herausforderungen und Abenteuer, die mir Spass machen und mein Leben bereichern.</p>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <p className={"aboutme_quali_one"}><b><b>Reisen & Sightseeing</b></b></p>
                                <img src={travel_icon} className={"aboutme_hobbies_icon"}/>
                                <p className={"aboutme_quali_two"} style={{marginBottom: "50px"}}>Unsere Welt, sowie dessen Bevölkerung ist unglaublich vielschichtig und hält an jeder Ecke und in jedem Land spannende Kulturen und Tradition bereit, die nur darauf warten entdeckt zu werden. Darum reise ich gerne, um für mich einen Blick über den Tellerrand zu erhalten.</p>
                            </div>
                        </div>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p className={"aboutme_quali_one"}><b><b>Filme & Serien</b></b></p>
                                <img src={movies_icon} className={"aboutme_hobbies_icon"}/>
                                <p className={"aboutme_quali_two"} style={{marginBottom: "50px"}}>Jeder Film und jede Serie erzählt seine eigene, einzigartige Geschichte und bietet die Möglichkeit in fremde Welten einzutauchen und mit fremden Charakteren mitzufühlen. Für mich sind Filme nicht nur Unterhaltung, sondern auch eine tolle Inspiration für meine eigenen Ziele & Träume.</p>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <p className={"aboutme_quali_one"}><b><b>Videospiele</b></b></p>
                                <img src={gaming_two_icon} className={"aboutme_hobbies_icon"}/>
                                <p className={"aboutme_quali_two"} style={{marginBottom: "50px"}}>Genauso wie Filme, bieten auch Videospiele eine optimale Gelegenheit, um abzuschalten und in unbekannte Welten einzutauchen. Der große Vorteil von Videospielen liegt dabei vor allem an der interaktiven Komponente, um einer interessanten Geschichten einen eigenen, persönlichen Twist zu geben.</p>
                            </div>
                        </div>
                        <div className={"about_introduction_flexbox"}>
                            <div className={"about_wrapper_left"}>
                                <p className={"aboutme_quali_one"}><b><b>Freunde treffen</b></b></p>
                                <img src={friends_icon} className={"aboutme_hobbies_icon"}/>
                                <p className={"aboutme_quali_two"} style={{marginBottom: "50px"}}>Freunde und Familie sind die Wurzeln, die uns Halt geben. Ganz egal ob bei einem Bier am Abend, gemeinsam am See oder beim Grillen im Sommer - die Zeit mit meinen Freunden bereichert mein Leben auf unzählige Weisen. </p>
                            </div>
                            <div className={"about_wrapper_right"}>
                                <p className={"aboutme_quali_one"}><b><b>Festivals & Events</b></b></p>
                                <img src={events_icon} className={"aboutme_hobbies_icon"}/>
                                <p className={"aboutme_quali_two"} style={{marginBottom: "50px"}}>Rockmusik nimmt seit vielen Jahren einen bedeutenden Teil meines Lebens ein. Ob alte Klassiker wie Iron Maiden, Bruce Springsteen und Iggy Pop, oder aber junge Indie-Bands - Festivals und Konzerte bieten mir die einmalige Gelegenheit meine Lieblingskünstler live und hautnah mitzuerleben.   </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default AboutmeInput