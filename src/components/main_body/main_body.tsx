import React, {FC} from 'react'
import Portrait from "./portrait";
import Introduction from "./introduction";
import Skills from "./skills";
import "./main_body.css"
import Projects from "./projects/projects";
import VideoHeader from "../video_header/video_header";

const Main_Body: FC = () =>
    <div className={"main_body"}>
        <div className={"introduction_body"}>
            <Portrait/>
            <Introduction/>
        </div>
        <div className={"projects_body"}>
            <Projects/>
        </div>
    </div>

export default Main_Body