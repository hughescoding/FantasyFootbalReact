import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import "bulma/css/bulma.css";
import './styles.css';
import DraftButton from "../components/DraftButton";
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
                  <p className="card-header-title has-text-centered">
                    Join Gridiron Kings
                </p>
                </div>
                <div className="card-content">
                  <p className="content">
                    Lockerroom you fools!!!!   
                  </p>
                  <DraftButton onClick = {this.getArticles}/>
                  { this.state.articles.map (article=> 
        ( 
            
            <tbody id="a-players">
                 <tr>
                    <td scope="col">{article.title}</td>
                    <td scope="col">{article.author} </td>
                    <td scope="col">{article.description}</td>
                    <td scope="col">{article.url}</td>
                </tr>
            </tbody>
            
        
        )
    )
}
                </div>
              </div>
            </div>
          </section>
        </body>
        <Footer />
      </div>
    );
  }
}

export default LockerRoom;