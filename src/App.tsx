import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectPage from "../src/pages/project_page/project_page";
import AboutMePage from "./pages/aboutme_page/aboutme_page";

const App = () => {

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
