import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="userPhoto" src="https://avatars.githubusercontent.com/u/57337800?v=4" alt="User Photo" />
      <a className="icon" href="https://codepen.io/Memet_" id="userName" target="_blank" rel="noopener noreferrer">
        <h1><span>Zxce3</span></h1>
      </a>
      <div id="links">
        <a className="link" href="https://instagram.com/secondchances.vtg" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" style={{padding: '10px'}}></i>Github</a>
        <a className="link" href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-reddit" style={{padding: '10px'}}></i> Reddit </a>
        <a className="link" href="https://www.depop.com/in/secondchances/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" style={{padding: '10px'}}></i>Linkedin</a>
        <a className="link" href="https://twitter.com/zxce3_" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square" style={{padding: '10px'}}></i> Twitter</a>
        <a className="link" href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" style={{padding: '10px'}}></i>Instagram</a>
      </div>
      <div className="Bottom-Section">
        <p style={{color: 'wheat'}}>Thanks</p>
      </div>
    </div>
  );
}

export default App;
