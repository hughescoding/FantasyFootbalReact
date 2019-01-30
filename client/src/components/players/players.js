import React, { Component } from 'react';

import './players.css';



class Players extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    } 

    // componentDidMount() {
    //     fetch('/api/players')
    //     .then(res => res.json())
    //     .then(players => this.setState({players}, () => console.log("players fetched..", players)));
    // }

  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
            {this.state.players.map(player =>
                <li key = {player.id}>{ player.firstName } { player.lastName}</li>)}
        </ul>
      </div>
    );
  }
}

export default Players;
