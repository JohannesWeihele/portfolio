import React from 'react';
import './project_page.css';
import {ParallaxProvider} from "react-scroll-parallax";
import Header from "../../components/header/header";
import Main_Body from "../../components/main_body/main_body";
import Footer from "../../components/footer/footer";

const ProjectPage = () => {

    return (
        <div>
            <ParallaxProvider>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                <Header/>
                <Main_Body/>
                <Footer/>
            </ParallaxProvider>
        </div>
    );
};

export default ProjectPage;