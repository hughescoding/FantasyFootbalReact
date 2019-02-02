import React, { Component } from 'react';
// import logo from './logo.svg';
import Users from "../components/Register/index";
import Footer from "../components/Footer/Footer"
import "bulma/css/bulma.css";
import './styles.css';


class Landing extends Component {
  render() {
    return (
      <div >
        <body>
          <section className="section">
          <img src="/images/logo-banner.jpg" alt="Logo"></img>
            <div className="container">
              {/* <h1 className="title">Title</h1>
              <h2 className="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                <strong>A LOGO WILL GO HERE</strong>
              </h2> */}
            </div>
          </section>
          <section>
            <div className="container">
              <div className="card has-text-centered">
                <div className="card-header has-text-centered ">
                  <p className="card-header-title is-centered">
                    Join Gridiron Kings
                </p>
                </div>
                <div className="card-content">
                  <p className="content">
                    Tired of getting crushed in your weekly games?
                </p>
                  <p className="content">
                  It's time to rule your league and play like a KING!
                </p>
                  <p className="content">
                  Win the title, command respect, win big money!
                </p>
                  <p className="content">
                  Join Gridiron Kings and begin your conquest! 
                </p>
                </div>
               
                {/* <h1>Line Goes Here</h1> */}
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <a class="button is-warning is-outlined">Register Now</a>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span>
                      <a class="button is-warning is-outlined">Login</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </section>
          <section className="section line"></section>
                <div className="container"></div>

        </body>

        <Footer />
      </div>
    );
  }
}

export default Landing;