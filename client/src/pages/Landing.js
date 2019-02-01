import React, { Component } from 'react';
// import logo from './logo.svg';
import Users from "../components/Register/index";
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div >
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Users />
      </div>
    );
  }
}

export default Landing;