import React, { Component } from 'react';
// import logo from './logo.svg';
import Users from "../components/Register/index";
import RegistrationModal from "../components/RegistrationModal/index";
import LoginModal from "../components/LoginModal/index";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/index";
// import Chat from "../components/Chat/Chat";
// import RegisterDialog from "../components/RegisterDialog/index";
import "bulma/css/bulma.css";
import './styles.css';


class Landing extends Component {
//   constructor(props) {
//     super(props);
//   this.state = {
//     registerOpen: false,
//   };
// }

//   handleClickOpen = (dlog) => {
//     if (dlog === 'register')
//     this.setState({ registerOpen: true });
//   };
  
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

      if (whichModal === "register") {

        newRegister = !oldRegister
        this.setState({modalState: {
          register: newRegister,
        
          
        }})
      } else {

        newLogin = !oldLogin
        this.setState({modalState: {
          login: newLogin,
          
        }})
      }

 
      // this.setState({modalState: {
      //   register: newRegister,
      //   login: newLogin
      // }
      // })
  } 


  render() {
    return (
      <div >
        <div>
          <section className="section">
          <img src="/images/logo-banner.jpg" alt="Logo"></img>
            <div className="container">
              
            </div>
          </section>
          <section>
            {/* <Chat /> */}
            <div className="container">
              <div className="card has-text-centered">
                <div className="card-header has-text-centered ">
                  <p className="card-header-title is-centered pop">
                    Join Gridiron Kings Today
                </p>
                </div>
                <div className="card-content">
                  <p className="content pop">
                    Tired of getting crushed in your weekly games?
                </p>
                  <p className="content pop">
                  It's time to rule your league and play like a KING!
                </p>
                  <p className="content pop">
                  Win the title, command respect, win big money!
                </p>
                  <p className="content pop">
                  Join Gridiron Kings and begin your conquest! 
                </p>
                </div>
               
                {/* <h1>Line Goes Here</h1> */}
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <button className="button is-warning is-outlined" onClick={() => {this.toggleModal("register")}}>Register Now</button>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      <a className="button is-warning is-outlined" onClick={() => {this.toggleModal("login")}}>Login</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </section>
          <section className="section line"></section>
                <div className="container"></div>
                <div className="container"></div>
        </div>

         <RegistrationModal 
            closeModal={() => {this.toggleModal("register")}} 
            modalState={this.state.modalState.register} 
            title="Create your Kingdom"
          >
          <Users 
            closeModal={() => {this.toggleModal("register")}}
          />
          </RegistrationModal>
         
          <LoginModal 
            closeModal={() => {this.toggleModal("login")}} 
            modalState={this.state.modalState.login} 
            title="Login"
          >
          <LoginForm />
          </LoginModal>
          
          
        <Footer />
      </div>
    );
  }
}

export default Landing;