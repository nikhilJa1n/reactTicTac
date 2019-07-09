import React, { Component } from 'react';
import Player from './choosePlayer';

class Status extends Component {
  setPlayerHandler(event) {
    this.props.setPlayer(event);
  }
  renderHtml() {
    if (this.props.winner) {
      return <h2>Winner : {this.props.winner}</h2>;
    } else {
      return this.props.player ? (
        <h2>Next Player :{this.props.player}</h2>
      ) : (
        <Player player={event => this.setPlayerHandler(event)} />
      );
    }
  }

  render() {
    return <span>{this.renderHtml()}</span>;
  }
}
export default Status;
