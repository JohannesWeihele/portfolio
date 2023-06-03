import React, { FC, ReactNode, useRef, useState, useEffect } from "react";
import more_switch_background from '../../../resources/images/buttons/switch_background.png'
import more_switch_button from '../../../resources/images/buttons/switch_button.png'

interface ExpandingButtonProps {
    name: string;
    design: number;
    children: ReactNode;
}

const ExpandingButton: FC<ExpandingButtonProps> = ({
                                                       name,
                                                       design = 1,
                                                       children,
                                                   }) => {
    const [buttonData, setButtonData] = useState(
        { isContentVisible: false, isButtonExpanded: false, divRef: useRef<HTMLDivElement>(null)});
    const imgRef =  useRef<HTMLImageElement>(null);

    let buttonDesign: string;

    const toggleContentVisibility = () => {
        const updatedButtonData = {
            isContentVisible: !buttonData.isContentVisible,
            isButtonExpanded: !buttonData.isButtonExpanded,
            divRef: buttonData.divRef
        };

        if (!updatedButtonData.isButtonExpanded) {
            scrollToDiv(updatedButtonData.divRef);
        }

        const element = imgRef.current;
        if (!element) {
            setButtonData(updatedButtonData);
            return;
        } else {
            if (updatedButtonData.isButtonExpanded) {
                element.classList.add("switch_left_anim");
                setTimeout(() => {
                    element.classList.remove("switch_left_anim");
                    setButtonData(updatedButtonData);
                }, 1000);
            } else {
                setButtonData(updatedButtonData);
                element.classList.add("switch_right_anim");
            }
            console.log(element);
        }
    };



    const scrollToDiv = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    if (design === 1) {
        buttonDesign = "square-button";
    } else if (design === 2) {
        buttonDesign = "td_square-button";
    } else {
        buttonDesign = "square-button";
    }

    return (
        <div ref={buttonData.divRef}>
            <button
                onClick={() => toggleContentVisibility()}
                className={`${buttonDesign} ${buttonData.isButtonExpanded ? 'expanded' : ''}`}
                style={{ height: buttonData.isButtonExpanded ? 'auto' : 'initial' }}
            >
                {buttonData.isButtonExpanded ? (
                    <div>{children}</div>
                ) : (
                    <div className={"more_switch"}>
                        <div className={"more_switch_background"} >
                            <img src={more_switch_background} />
                            <p id={"more_text"} className={"more_switch_text"}>Mehr</p>
                            <p id={"less_text"} className={"more_switch_text"}>Weniger</p>
                        </div>
                        <img ref={imgRef} src={more_switch_button} className={"more_switch_button"} />
                    </div>
                )}
                <span className={`arrow-down ${buttonData.isButtonExpanded ? 'expanded' : ''}`} />
            </button>
        </div>
    );
};

export default ExpandingButton;
