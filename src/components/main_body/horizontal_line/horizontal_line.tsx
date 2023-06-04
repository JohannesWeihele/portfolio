import React, { FC } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {Canvas} from "@react-three/fiber";
import Car from "../../3D/car";
import Tilt from "react-parallax-tilt";

interface HorizontalLineProps {
    side: string;
    sameLine: boolean;
    name?: string;
    icon_name_one?: string;
    icon_name_two?: string;
    icon_name_three?: string;
    td_model?: string;
}

const HorizontalLine: FC<HorizontalLineProps> = ({
                                                     name,
                                                     side,
                                                     sameLine = false,
                                                     icon_name_one,
                                                     icon_name_two,
                                                     icon_name_three,
                                                     td_model,
                                                 }) => {

    let horizontal_line_side = side === "left" ? "horizontal_line_left" : "horizontal_line_right";
    let dot_side = side === "left" ? "dot_left" : "dot_right";
    let same_line_id = sameLine ? (side === "left" ? "same_line_left" : "same_line_right") : "";
    let icon_one_id = icon_name_one ? (side === "left" ? "timeline_icon_left_one" : "timeline_icon_right_one") : "";
    let icon_two_id = icon_name_two ? (side === "left" ? "timeline_icon_left_two" : "timeline_icon_right_two") : "";
    let icon_three_id = icon_name_three ? (side === "left" ? "timeline_icon_left_three" : "timeline_icon_right_three") : "";
    let model_side = side === "left" ? "model_left" : "model_right";
    let component;

    switch (td_model) {
        case "car":
            component = <Car/>;
            break;
        case "house":
            //<House/>
            break;
        default:
            component = null;
            break;
    }

    return (
        <div className={horizontal_line_side} id={same_line_id}>
            <AnimationOnScroll initiallyVisible={true} delay={-1000} offset={0} animateIn={"animate__pulse"} animateOut={"animate__pulse"}>
                <div className={dot_side} />
            </AnimationOnScroll>
            <div>
                <div className="header-container">
                    {name && (
                        <h1 className={"timeline_header"}>{name}</h1>
                    )}
                    {td_model && (
                        <h1 className={"timeline_header"}>
                            <div className={model_side}>
                                <Canvas id={`canvas_model_left`} style={{ width: "300px", height: "300px", cursor: "pointer"}}>
                                    {component}
                                </Canvas>
                            </div>
                        </h1>
                    )}
                </div>
                {icon_name_one && (
                    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <div className={icon_one_id}>
                            <img src={require(`../../../resources/icons/${icon_name_one}.png`)} />
                        </div>
                    </Tilt>
                )}
                {icon_name_two && (
                    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <div className={icon_two_id}>
                            <img src={require(`../../../resources/icons/${icon_name_two}.png`)} />
                        </div>
                    </Tilt>
                )}
                {icon_name_three && (
                    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <div className={icon_three_id}>
                            <img src={require(`../../../resources/icons/${icon_name_three}.png`)} />
                        </div>
                    </Tilt>
                )}
            </div>
        </div>
    );
};

export default HorizontalLine;
