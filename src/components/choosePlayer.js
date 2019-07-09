import React, { Component } from 'react';

class Player extends Component {
  formHandler(event) {
    event.preventDefault();
    this.props.player(event.target.player.value);
    
  }
  render() {
    return (
      <form onSubmit={event => this.formHandler(event)}>
        <label>
          Player X
          <input type="radio" name="player" value="X" />
        </label>
        <label>
          Player O
          <input type="radio" name="player" value="O" />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Player;
