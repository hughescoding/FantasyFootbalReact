import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import { Redirect } from "react-router-dom";
import DraftedTeam from "../components/DraftedTeam/index";
import "bulma/css/bulma.css";
import './styles.css';
import axios from "axios";
import key from "./config.js";



class LockerRoom extends Component {

  logoutUser = () => {
    console.log("this is connected")
    localStorage.clear()
    window.location.reload();
    // localStorage.empty();

  }

  createTeam = () => {

    console.log("connected")
  }



  state = {
    articles: []
  }

  getArticles = () => {
    console.log(key);
    axios.get('https://newsapi.org/v2/top-headlines?sources=fox-sports,nfl-news,espn&q=NFL&sortBy=publishedAt&excludeDomains=go.com&apiKey=' + key)
      .then((response) => {
        console.log(response);
        this.setState({ articles: response.data.articles })
      })
  }

  render() {
    if (!localStorage.getItem('user')) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <div >
        <body>
          <Nav
            logout={this.logoutUser}
            createTeam={this.createTeam}
          />
          <section>

            <div className="container">
              <div className="card has-text-centered">
                <div className="card-header has-text-centered has-text-justified">
                  <p className="card-header-title is-centered pop">
                    Locker Room
                </p>
                </div>
                <div className="draftedTeam">
                  <DraftedTeam />
                </div>

                <div className="card-content has-text-centered">

                  <button className="button news-button popsm" onClick={this.getArticles}>Get News</button>
                  <br></br>
                  <hr></hr>
                  {/* <table> */}
                    <thead>
                      <tr>
                        <th className="artTitle popsm" scope="col">Title</th>
                        {/* <th className="artAuthor" scope="col">Author</th> */}
                        <th className="description popsm" scope="col">Description</th>
                        <th className="link popsm" scope="col">Link</th>

                      </tr>
                    </thead>
                  {/* </table> */}
                  {this.state.articles.map(article =>
                    (



                      <tbody className="popsm">
                        <tr>
                          <td scope="col">{article.title}</td>
                          {/* <td scope="col">{article.author} </td> */}
                          <td scope="col">{article.description}</td>
                          <td scope="col"><a href={article.url}>Click Here for Link</a></td>
                        </tr>
                        <br></br>
                      </tbody>




                    )
                  )
                  }
                </div>
              </div>
            </div>
          </section>
          <section className="section line"></section>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
        </body>
        <Footer />
      </div>
    );
  }
}

export default LockerRoom;