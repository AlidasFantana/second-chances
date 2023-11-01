import React from 'react';
import './app.css';

function LinkTree() {
  return (
    <div className="flexContainer">
      <div className="box">
        <iframe title="embedded-content" className="iframeStyle" src="URL_OF_THE_EMBEDDED_CONTENT"></iframe>
        {/* Add other content like links, images, etc. here */}
      </div>
    </div>
  );
}

export default LinkTree;
