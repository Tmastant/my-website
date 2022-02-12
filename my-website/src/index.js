import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InfoBox extends React.Component {
    render() {
      return (
          <div>
            <h2>Hi! I'm</h2>
            <h1>Thomas Mastantuono</h1>
            <h2>I make games and programs</h2>
          </div>
      );
    }
}

// ========================================

ReactDOM.render(
<InfoBox />,
document.getElementById('root')
);
