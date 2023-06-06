import React, { useEffect, useRef, useState } from 'react';
import "./main_body.css"
import Projects from "./projects/projects";
import Opener from "./opener/opener";

const Main_Body: React.FC = () => {
    return (
        <div className={"main_body"}>
            <Opener/>
            <div className={"projects_body"}>
                <Projects />
            </div>
        </div>
    );
}

export default Main_Body;
