import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import DraftedTeam from "../components/DraftedTeam/index";
import "bulma/css/bulma.css";
import './styles.css';
import axios from "axios";
import key from "./config.js";



class LockerRoom extends Component {
  state= {
    articles: []
  }

  getArticles = () => {
    console.log(key);
    axios.get('https://newsapi.org/v2/top-headlines?sources=fox-sports,nfl-news,espn&q=NFL&sortBy=publishedAt&excludeDomains=go.com&apiKey='+ key)
    .then((response) => {
     console.log(response);
     this.setState({articles:response.data.articles})
   })
  }

  render() {

    return (
      <div >
        <body>
              <Nav/>           
          <section>
            <div className="container">
              <div className="card has-text-centered">
                <div className="card-header has-text-centered has-text-justified">
                  <p className="card-header-title is-centered">
                    Join Gridiron Kings
                </p>
                </div>
                <div className="draftedTeam">
                <DraftedTeam/>
                </div>

                <div className="card-content has-text-centered">
  
                  <button className="button news-button" onClick = {this.getArticles}>Get News</button>
                  <br></br>
                  <hr></hr>
                  <thead>
                <tr>
                    <th className= "artTitle" scope="col">Title</th>
                    {/* <th className="artAuthor" scope="col">Author</th> */}
                    <th className="description" scope="col">Description</th>
                    <th className="link" scope="col">Link</th>
                    
                </tr>
            </thead>

                  { this.state.articles.map (article=> 
        ( 

          
            
            <tbody>
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