import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component {
  setPlayerHandler(event) {
    this.props.setPlayer(event);
  }

  render() {
    return this.props.player ? (
      <h2>Next Player :{this.props.player}</h2>
    ) : (
      <Player player={event => this.setPlayerHandler(event)} />
    );
  }
}
export default Status;
