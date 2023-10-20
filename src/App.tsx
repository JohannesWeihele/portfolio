import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectPage from "../src/pages/project_page/project_page";
import AboutMePage from "./pages/aboutme_page/aboutme_page";

const App = () => {

    useEffect(() => {

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (mediaQuery.matches) {
            document.body.classList.add('light-mode');
        }

        return () => {
            document.body.classList.remove('light-mode');
        };
    }, []);


    return (
      <Router>
          <Routes>
              <Route path="/" Component={ProjectPage}/>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path={"/aboutme"} Component={AboutMePage}/>
          </Routes>
      </Router>
  );
}

export default App;
