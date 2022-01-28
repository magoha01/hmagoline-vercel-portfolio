import React from 'react';
import About from

import './App.css';

function App() {
  return (
    <div className="App">
    <header>
      <h1>Welcome To My Portfolio</h1>
        <nav>
          <button>About</button>
          <button>Portfolio</button>
          <button>Resume</button>
          <button>Contact</button>
        </nav>
    </header>
    <div>
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
       



    </div>
  );
}

export default App;
