import React, { Component } from 'react';
// import logo from './logo.svg';
import Users from "../components/Register/index";
import RegistrationModal from "../components/RegistrationModal/index";
import LoginModal from "../components/LoginModal/index";
import Footer from "../components/Footer/Footer";
import "bulma/css/bulma.css";
import './landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: {
        register: false,
        login: false
      }
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal(whichModal) {   
      let oldLogin = this.state.modalState.login
      let oldRegister = this.state.modalState.register
      let newLogin = oldLogin
      let newRegister = oldRegister

      if (whichModal === 'register') {
        newRegister = !oldRegister
        this.setState({modalState: {
          register: newRegister
        }})
      } else {
        newLogin = !oldLogin
        this.setState({modalState: {
          login: newLogin
        }})
      }

      // console.log(newRegister + " " + newLogin)
      // this.setState({modalState: {
      //   register: newRegister,
      //   login: newLogin
      // }
      // })
  } 


  render() {
    return (
      <div >
        <body>
          <section className="section">
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
                      <a className="button is-primary is-rounded registration-btn" onClick={() => {this.toggleModal("register")}}>Register Now</a>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      <a className="button is-primary is-rounded login-btn" onClick={() => {this.toggleModal("login")}}>Login</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </section>

        </body>
        <RegistrationModal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState.register} 
            title="Create your Kingdom"
          >
          <Users />
          </RegistrationModal>
          <LoginModal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState.login} 
            title="Login"
          >
          
          </LoginModal>

        <Footer />
      </div>
    );
  }
}

export default Landing;