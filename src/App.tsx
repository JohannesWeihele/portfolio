import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/header/header";
import Main_Body from "./components/main_body/main_body";
import { ParallaxProvider } from 'react-scroll-parallax'

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.onload = () => {
            setIsLoading(false);
        };
    }, []);

  return (
      <div className="App">
          {isLoading ? (
              <div className="loading-bar">
                  Ladebalken hier anzeigen...
              </div>
          ) : (
          <ParallaxProvider>
              <meta name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
              <Header/>
              <Main_Body/>
          </ParallaxProvider>
          )}
      </div>
  );
}

export default App;
