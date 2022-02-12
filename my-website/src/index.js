import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InfoBox extends React.Component {
    render() {
      return (
          <div>
            <h2>Hi! I'm</h2>
            <b><h1>Thomas Mastantuono</h1></b>
            <h2>I make games and programs</h2>
          </div>
      );
    }
}

class About extends React.Component {
    render() {
        <div>
           <h2>I like to play and make games and have been doing so for a very long time</h2>
        </div>
    };
}

// ========================================

ReactDOM.render(
<InfoBox />,
document.getElementById('info')
);

ReactDOM.render(
<About />,
document.getElementById('about')
);


// https://coolors.co/fffcf9-2cb59c-246a73-02a27f-171738