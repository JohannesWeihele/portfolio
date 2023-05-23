import React, { FC, useEffect, useState } from 'react';
import "./projects.css";
import Projects_Header from "./projects_header";
import Projects_Timeline from "./projects_timeline";


const Projects: FC = () => {

    return (
        <div className={"projects"}>
            <Projects_Header/>
            <Projects_Timeline/>
        </div>
    );
}

export default Projects;
