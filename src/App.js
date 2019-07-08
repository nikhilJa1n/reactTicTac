import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
      </div>
    );
  }
}

export default App;
