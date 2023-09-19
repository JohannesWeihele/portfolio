import React from 'react';
import './aboutme_page.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import AboutmeMain from "../../components/aboutme_main/aboutmemain";

const AboutMePage = () => {

    return (
        <div className={"aboutme_page_container"}>
            <Header/>
            <AboutmeMain/>
            <Footer/>
        </div>
    );
};

export default AboutMePage;