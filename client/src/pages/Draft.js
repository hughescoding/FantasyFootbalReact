import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import "bulma/css/bulma.css";
import './styles.css';
let players= [];

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
          <section>
            <div className="container">
              <div className="card has-text-centered">
                <div className="card-header has-text-centered has-text-justified">
                  <p className="card-header-title has-text-centered">
                    Join Gridiron Kings
                </p>
                </div>
                <div className="card-content">
                  <p className="content">
                    Draft Page  
                  </p>
                </div>
              </div>
            </div>
          </section>

        </body>

        <Footer />
      </div>
    );
  }
}

export default Draft;