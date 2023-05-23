import {FC} from 'react'
import './header.css';

const Logo: FC = () =>
    <div className={"logo"}>
        <img src={require('../../resources/logo/Logo_ohne.png')} alt={"Logo"}/>
    </div>

export default Logo