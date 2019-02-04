import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer"
import "bulma/css/bulma.css";
import './styles.css';
import DraftTable from '../components/DraftTable/DraftTable';


class Draft extends Component {
  render() {
    return (
      <div >
        <body>
              <Nav/>  
              <DraftTable/>         

        </body>

        <Footer />
      </div>
    );
  }
}

export default Draft;