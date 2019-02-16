import React, { Component } from 'react';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../Form";
import "bulma/css/bulma.css";




  function Nav(props) {
    return (
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
              <img src="../../images/sm732.png" ></img>
                  <div className="navbar-item">
                 </div>
                  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                  </a>
               </div>
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                   <a className="navbar-item"href="./About">About</a>
                  <a className="navbar-item" href="./LockerRoom">Locker Room</a>
               
                  {/* <div className="navbar-item has-dropdown is-boxed is-hoverable">
                    <a className="navbar-link">
                      League
                    </a>
                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        Create a League **Coming Soon!
                      </a>
                      <a className="navbar-item">
                        Join a League **Coming Soon!
                      </a>
                      <a className="navbar-item" onClick={props.getPlayers}>
                        Contact
                      </a>
                      
                    </div>
                  </div> */}
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
