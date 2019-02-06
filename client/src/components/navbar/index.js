import React, { Component } from 'react';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../Form";
import "bulma/css/bulma.css";




  function Nav(props) {
    return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
              <img src="../../images/sm732.png" ></img>
                  {/* <div className="navbar-item">
                 {/* <img src="../../images/sm732.png" ></img> */}
                 {/* </div> */} 

                  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                  </a>
               </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">
                    Locker Room
                  </a>

                  <a className="navbar-item">
                    About
                  </a>

                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                      League
                    </a>

                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        Create a League
                      </a>
                      <a className="navbar-item">
                        Join a League
                      </a>
                      <a className="navbar-item" onClick={props.getPlayers}>
                        Contact
                      </a>
                      
                    </div>
                  </div>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="logout-button">
                      <a className="button">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

      
    );
  }


export default Nav;
