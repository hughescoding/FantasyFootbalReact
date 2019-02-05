import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import "bulma/css/bulma.css";
import './styles.css';
<<<<<<< HEAD
let players= [];
=======
import DraftTable from '../components/DraftTable/DraftTable';

>>>>>>> master

class Draft extends Component {

  state = {

    players: []

  };
  getPlayers = (event) => {
    event.preventDefault();
      API.getPlayers({})
        .then(res => players.push(res.data))
      
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
        console.log(players)
  
  }



  render() {
    return (
      <div >
        <body>
              <Nav
              getPlayers={this.getPlayers}
              />   
              <DraftTable/>         

        </body>

        <Footer />
      </div>
    );
  }
}

export default Draft;