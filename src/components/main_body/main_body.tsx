import React, {useEffect, useRef, useState} from 'react';
import Portrait from "./portrait";
import Introduction from "./introduction";
import "./main_body.css"
import Projects from "./projects/projects";
import YearList from "./yearlist/yearlist";


const Main_Body: React.FC = () =>{

    //    <YearList/>

return <div className={"main_body"}>

    <div className={"introduction_body"}>
            <Portrait/>
            <Introduction/>
        </div>
        <div className={"projects_body"}>
            <Projects/>
        </div>
    </div>
}
export default Main_Body