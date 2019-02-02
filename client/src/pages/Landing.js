import React, { Component } from 'react';
// import logo from './logo.svg';
import Users from "../components/Register/index";
import Footer from "../components/Footer/Footer"
import "bulma/css/bulma.css";
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div >
        <body>
          <section className="section">
          <img src="/images/logo-banner.jpg" alt="Logo"></img>
            <div className="container">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                <strong>A LOGO WILL GO HERE</strong>
              </h2>
            </div>
          </section>
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
                    Tired of getting crushed in your weekly games?
                </p>
                  <p className="content">
                  It's time to Rule your League and play like a KING!
                </p>
                  <p className="content">
                  Win the Title, command Repect, take the Money
                </p>
                  <p className="content">
                  Join Gridiron Kings and begin your conquest
                </p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <a class="button is-primary is-rounded">Register Now</a>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span>
                      <a class="button is-primary is-rounded">Login</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </section>

        </body>

        <Footer />
      </div>
    );
  }
}

export default Landing;