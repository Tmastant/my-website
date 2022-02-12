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

class Board extends React.Component {
renderSquare(i) {
    return <Square />;
}

render() {
    const status = 'This is a react website';

    return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
    </div>
    );
}
}

class Game extends React.Component {
render() {
    return (
    <div className="game">
        <div className="game-board">
        <Board />
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
    </div>
    );
}
}

// ========================================

ReactDOM.render(
<InfoBox />,
document.getElementById('root')
);
