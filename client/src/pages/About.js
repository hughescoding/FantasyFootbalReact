import React, { Component } from 'react';
import Nav from "../components/navbar/index";
import Footer from "../components/Footer/Footer";
import "bulma/css/bulma.css";
import './styles.css';



class About extends Component {

    render() {
        return (
          <div >
              <Nav/>
            <body>
              <section className="section">
              <img src="/images/logo-banner.jpg" alt="Logo"></img>
                <div className="container">
                </div>
              </section>
              <section>
        
                <div className="container">
                  <div className="card has-text-centered">
                    <div className="card-header has-text-centered ">
                      <p className="card-header-title is-centered team">
                     <img src="/images/sm732.png"></img> <span class="team popsm "> Gridiron Kings </span><img src="/images/sm731.png"></img>
                    </p>
                    </div>
                    <div className="card-content">
                    <p className="content team popsm ">
                      Gridiron Kings is a Fantasy Football Companion. 
                    </p>
                    <p className="content team popsm ">
                    Featuring News, Stats, Chat.
                    </p> 
                    <p className="content team popsm ">
                     Created By:
                    </p>
                    <p className="content team popsm "><a href="https://github.com/hughescoding/FantasyFootbalReact"><i class="fab fa-github size: "></i></a></p>
                    <img src="/images/TeamGK2.png" alt="Team Photo"></img>
                    <p className="content team popsm "></p>
                    <p className="content team popsm ">
                    <a href="https://github.com/Shrublord5150"><i class="fas fa-crown"></i> Daniel Murphy</a><a href="https://hughescoding.github.io/portfolio/"> <i class="fas fa-crown"></i> Michael Hughes</a><a href="https://www.linkedin.com/in/alyssa-templeton-312bb153/"><i class="fas fa-crown"></i>Alyssa Templeton</a>
                    </p>
                      {/* <p className="content">
                        
                    </p>
                     
                     
                     */}
                    </div>
                   
                    {/* <h1>Line Goes Here</h1> */}
                    {/* <footer className="card-footer">
                      <p className="card-footer-item">
            
                      </p>
                      <p className="card-footer-item">
                      
                      </p>
                    </footer> */}
                  </div>
                </div>
              </section>
              <section className="section line"></section>
                    <div className="container"></div>
                    <div className="container"></div>
            </body>
            <Footer/>
            </div>
           
);
}    

}

export default About;