import React, { Component } from 'react';
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../Form";

// import './register.css';



class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        user: []
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      
    //   function needs to change to login function not save User, when authentication is in place
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
          API.login({
            email: this.state.email,
            password: this.state.password
          })
          .then(res => this.setState({user: res.data}, ()=>{

            console.log(this.state.user);
            localStorage.setItem('user', this.state.user.id);
            console.log(localStorage);
           

          }))
            // localStorage.setItem('user', user.name)
            // console.log(localStorage)
            // console.log()
            // localStorage.setItem('user', res.user.id)
            // localStorage.setItem("user", 'tugs')
            // let quicktest = localStorage.getItem("user")
            // console.log(quicktest)
            // .then(res => this.loadBooks())
            // .catch(err => console.log(err));
        }
      };

    // componentDidMount() {
    //     fetch('/api/players')
    //     .then(res => res.json())
    //     .then(players => this.setState({players}, () => console.log("players fetched..", players)));
    // }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
              <Input
                value={this.state.email}
                type="email"
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                type="password"
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
            </form>
      </div>
    );
  }
}

export default LoginForm;
