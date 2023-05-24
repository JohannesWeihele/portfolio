import {FC} from 'react'
import Logo from "./logo";
import MenuBar from "./menubar";
import './header.css';

const Header = () =>
    <div className={"header"}>
        <Logo/>
        <MenuBar/>
    </div>

export default Header