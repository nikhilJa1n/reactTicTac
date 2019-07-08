import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      board: Array(9).fill(null),
    };
  }
  clickSquareHandler(event) {
    console.log(event.target);
  }

  render() {
    const Box = this.state.board.map((box, index) => (
      <div
        className="square"
        key={index}
        onClick={event => this.clickSquareHandler(event)}
      >
        {box}
      </div>
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
