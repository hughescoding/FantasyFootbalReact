import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Users from "./components/Register/index";
import './App.css';
import Landing from "./pages/Landing";
import LockerRoom from "./pages/LockerRoom";
import Draft from "./pages/Draft";
import About from "./pages/About";
import './components/navbar/navbar.css';
import './components/DraftTable/DraftTable.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/LockerRoom" component={LockerRoom} />
            <Route exact path="/Draft" component={Draft} />
            <Route exact path="/About" component={About} />
            {/* <Route exact path="/MyProfile/:id?" component={MyProfile} /> */}
          </Switch>
        </Router>
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
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
