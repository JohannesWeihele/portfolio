import React, { FC, ReactNode, useRef, useState, useEffect } from "react";
import more_switch_background from '../../../resources/images/buttons/switch_background.png'
import more_switch_button from '../../../resources/images/buttons/switch_button.png'
import Expand from 'react-expand-animated'


interface ExpandingButtonProps {
    children: ReactNode;
}

const ExpandingButton: FC<ExpandingButtonProps> = ({children}) => {

    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLImageElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const scanRef = useRef<HTMLDivElement>(null);

    const toggleContentVisibility = () => {
        const element = buttonRef.current;
        const parentElement = parentRef.current;
        const scanElement = scanRef.current;
        if (!element) {
            return;
        } else {
            if (!open) {
                element.classList.add("switch_right_anim");
                setTimeout(() => {
                    setOpen(!open);
                }, 1000);
            } else {
                setOpen(!open);
                element.classList.remove("switch_right_anim");
                element.classList.add("switch_left_anim");
            }
            if (!parentElement) {
                return;
            } else{
                parentElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div ref={parentRef}>
            <div className={"more_switch"} onClick={toggleContentVisibility}>
                <div className={"more_switch_background"} >
                    <img src={more_switch_background} />
                    <p id={"less_text"} className={"more_switch_text"}>Weniger</p>
                    <p id={"more_text"} className={"more_switch_text"}>Mehr</p>
                </div>
                <img ref={buttonRef} src={more_switch_button} className={"more_switch_button"} />
            </div>
            <div ref={scanRef} className={"scan_line"}/>
            <span className={"arrow-down"} />
            <div>
                <Expand open={open} duration={500} className={"square-button expanded"}>
                    {children}
                    <p className={"close_button_text"} onClick={toggleContentVisibility}>schließen</p>
                    <div className={"arrow-down"}/>
                </Expand>
            </div>

        </div>
    );
};

export default ExpandingButton;
