import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import "bulma/css/bulma.css";
import './styles.css';
import DraftTable from '../components/DraftTable/index';
import DraftTableBody from '../components/DraftTableBody/index';

// let players= [];

class Draft extends Component {

  // state = {

  //   players: []

  // };
  // getPlayers = (event) => {
  //   event.preventDefault();
  //     API.getPlayers({})
  //       .then(res => this.setState({players: res.data}, ()=>{
  //         console.log(this.state.players);
  //       }))
      
  //       // .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  
  // }



  render() {
    return (
      <div >
        <body>
              <Nav
              getPlayers={this.getPlayers}
              />   
              <DraftTable/>
              <DraftTableBody/>         
        </body>
        <Footer />
      </div>
    );
  }
}

export default Draft;