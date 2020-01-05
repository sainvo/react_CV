import React from 'react';
import logo from './components/pictures/banner.jfif';
import face from './components/pictures/py.jpg';
import './App.css';
import './components/Professions/Professions.css';

import Professions from './components/Professions/Professions.js';
import Education from './components/Education/Education.js';

function App() {
     return (
          <div>
               <div className="App">
                    <header className="App-header">
                         <img class="logo" src={logo} className="App-logo" alt="logo" />
                    </header>
               </div>
               <div>
                    <div className="Professions">
                         <Professions/>
                    </div>
                    <p>
                         Find out more about me
                    </p>
                    <a
                         className="App-link"
                         href="https://github.com/sainvo"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         @My Github
                    </a>
                    <p></p>
                    <a
                         className="App-link"
                              href="https://www.linkedin.com/in/volanensanna/"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         @My LinkedIn
                    </a>
                    
               </div>
                    <div className="Other stuff">
                         <p>This page is a WIP</p>
                    </div>
                    
          </div>
          
  );
}

export default App;
