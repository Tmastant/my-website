import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InfoBox extends React.Component {
    render() {
      return (
        <h1>Thomas Mastantuono - Software Engineer & Game Programmer</h1>
      );
    }
}

// ========================================

ReactDOM.render(
<InfoBox />,
document.getElementById('root')
);
