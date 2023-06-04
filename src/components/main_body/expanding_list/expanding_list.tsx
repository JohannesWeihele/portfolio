import React, { FC, ReactNode, useRef } from "react";
import Collapsible from "react-collapsible";

interface ExpandingListProps {
    children: ReactNode;
    open?: boolean;
    name: string;
}

const ExpandingList: FC<ExpandingListProps> = ({ children, name, open = false }) => {
    const collapsibleRef = useRef<Collapsible>(null);

    return (
        <Collapsible ref={collapsibleRef} trigger={name} open={open} lazyRender={true}>
            {children}
            <p className={"close_button_text"}>
                schließen
            </p>
            <div className={"arrow-down"} />
        </Collapsible>
    );
};

export default ExpandingList;
