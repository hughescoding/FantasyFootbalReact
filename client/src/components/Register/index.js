import React, { Component } from 'react';
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../Form";

import './register.css';



class Users extends Component {
    state = {
        name: "",
        email: "",
        password: ""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.password) {
          API.saveUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
            .then(console.log(this.state.name + " is saved"))
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
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
        <h2>Register</h2>
        <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                className="name"
                placeholder="Name (required)"
              />
              
              <Input
                value={this.state.email}
                type="email"
                onChange={this.handleInputChange}
                className="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                type="password"
                onChange={this.handleInputChange}
                className="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Register
              </FormBtn>
            </form>
      </div>
    );
  }
}

export default Users;
