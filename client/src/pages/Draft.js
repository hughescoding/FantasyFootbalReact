import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer"
import "bulma/css/bulma.css";
import './styles.css';


class Draft extends Component {
  render() {
    return (
      <div >
        <body>
              <Nav/>           
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
                    Draft Page- we draft so hard
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