import React, {FC, ReactNode, useRef, useState} from "react";

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

    const [buttonData, setButtonData] = useState([
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

    let buttonDesign: string;
    if(design === 1){
        buttonDesign = "square-button";
    } else if(design === 2){
        buttonDesign = "td_square-button";
    } else{
        buttonDesign = "square-button";
    }

    return <div ref={buttonData[0].divRef}>
            <button
                onClick={() => toggleContentVisibility(0)}
                className={`${buttonDesign} ${buttonData[0].isButtonExpanded ? 'expanded' : ''}`}
                style={{ height: buttonData[0].isButtonExpanded ? 'auto' : 'initial' }}
            >
                {buttonData[0].isButtonExpanded ? (
                    <div>
                        {children}
                    </div>
                ) : (
                    <p className={"more_text"}>{name}</p>
                )}
                <span className={`arrow-down ${buttonData[0].isButtonExpanded ? 'expanded' : ''}`} />
            </button>
        </div>
};

export default ExpandingButton;