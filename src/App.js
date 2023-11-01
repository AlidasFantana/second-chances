import React from 'react';
import './App.css';

function App() {
  return (
    <div className="linktree-container">
      <div className="linktree-header">
        <img src="path_to_your_logo.png" alt="Your Brand Logo" className="brand-logo" />
        <h1>Your Brand Name</h1>
      </div>
      <div className="linktree-links">
        <a href="https://your-link-1.com" target="_blank" rel="noopener noreferrer" className="linktree-link">Link 1</a>
        <a href="https://your-link-2.com" target="_blank" rel="noopener noreferrer" className="linktree-link">Link 2</a>
        <a href="https://your-link-3.com" target="_blank" rel="noopener noreferrer" className="linktree-link">Link 3</a>
        {/* Add more links as needed */}
      </div>
      <div className="linktree-footer">
        <p>Follow us on social media!</p>
        {/* Add social media icons/links here */}
      </div>
    </div>
  );
}

export default App;
