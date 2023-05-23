import {FC} from 'react'
import "./main_body.css"

const Portrait: FC = () =>
    <div className={"portrait"}>
        <img src={require('../../resources/portrait/portrait.png')} alt={"Portrait"}/>
    </div>

export default Portrait