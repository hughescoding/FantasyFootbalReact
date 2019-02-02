import React, { Component } from 'react';
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../Form";
import "bulma/css/bulma.css";




  function Nav() {
    return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                  <a className="navbar-item" href="https://bulma.io">
                 <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                 </a>

                  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                  </a>
               </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">
                    Home
                  </a>

                  <a className="navbar-item">
                    Documentation
                  </a>

                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                      More
                    </a>

                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        About
                      </a>
                      <a className="navbar-item">
                        Jobs
                      </a>
                      <a className="navbar-item">
                        Contact
                      </a>
                      <div className="navbar-divider">
                      <a className="navbar-item">
                        Report an issue
                      </a>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

      
    );
  }


export default Nav;
