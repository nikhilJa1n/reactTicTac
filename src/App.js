import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      board: Array(9).fill('X'),
    };
  }

  render() {
    const Box = this.state.board.map(box => (
      <div className="square">{box}</div>
    ));
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="board">{Box}</div>
      </div>
    );
  }
}

export default App;
