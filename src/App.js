import React, { Component } from 'react';
import './App.css';
import Status from './components/status';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
    };
  }

  checkWinnerHandler() {
    let winnerIndexes = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];
    this.checkMatch(winnerIndexes);
  }

  checkMatch(winnerIndexes) {
    for (let index = 0; index < winnerIndexes.length; index++) {
      const [a, b, c] = winnerIndexes[index];
      const board = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // alert('player ' + this.state.player + ' won');
        this.setState({ winner: this.state.player });
      }
    }
  }

  clickSquareHandler(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === 'X' ? 'O' : 'X',
        });
        this.checkWinnerHandler();
      }
    }
  }

  setPlayer(player) {
    this.setState({ player });
  }

  renderSquares() {
    return this.state.board.map((box, index) => (
      <div
        className="square"
        key={index}
        onClick={() => this.clickSquareHandler(index)}
      >
        {box}
      </div>
    ));
  }

  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Status
          player={this.state.player}
          setPlayer={event => {
            this.setPlayer(event);
          }}
          winner={this.state.winner}
        />
        <div className="board">{this.renderSquares()}</div>
      </div>
    );
  }
}

export default App;
