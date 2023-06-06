import React, {FC, ReactNode, useRef, useState} from "react";
import Collapsible from "react-collapsible";

interface ExpandingListProps {
    children: ReactNode;
    open?: boolean;
    name: string;
}

const ExpandingList: FC<ExpandingListProps> = ({ children, name, open = false }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(open);

    const handleCloseClick = () => {
        const element = divRef.current;
        setIsOpen(false);
        if(element){
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div ref={divRef}>
            <Collapsible trigger={name} open={isOpen}  onOpening={() => setIsOpen(true)}
                         onClosing={() => setIsOpen(false)} lazyRender={true}>
                {children}
                <div className={"clickable"} onClick={handleCloseClick}>
                    <p className={"close_button_text"}>
                        schließen
                    </p>
                    <div className={"arrow-down"} />
                </div>
            </Collapsible>
        </div>
    );
};

export default ExpandingList;
