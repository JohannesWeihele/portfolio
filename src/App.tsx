import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Main_Body from "./components/main_body/main_body";

const App = () => {
  return (
      <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <Header/>
          <Main_Body/>
      </div>
  );
}

export default App;
