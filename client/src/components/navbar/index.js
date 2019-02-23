import React from 'react';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Input, FormBtn } from "../Form";
import "bulma/css/bulma.css";


  function Nav(props) {
    return (
      <nav className="navbar is-transparent">
  <div className="navbar-brand">
  <img src="../../images/sm732.png" alt="Grid Iron Kings Logo"></img>
    <a className="navbar-item" href="https://github.com/hughescoding/FantasyFootbalReact">
     
    </a>
    {/* <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div> */}
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
    
      <a className="navbar-item" href="./About">
        About
      </a>
      <a className="navbar-item" href="./Draft">
        Draft
      </a>
      <a className="navbar-item" href="./LockerRoom">
        Locker Room
      </a>
      <button className="navbar-item" onClick={props.logout}>
        Log Out
      </button>
      </div>
    </div>
    
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet?text=Check out Grid Iron Kings&amp;hashtags=GridIronKings&amp;url=https://github.com/hughescoding/FantasyFootbalReact">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          
        </div>
      </div>
    </div>
  
  

</nav>
            // <nav className="navbar is-transparent">
            //   <div className="navbar-brand">
            //   <img src="../../images/sm732.png" ></img>
            //       <div className="navbar-item">
            //      </div>
            //       <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            //       <span></span>
            //        <span></span>
            //        <span aria-hidden="true"></span>
            //       </a>
            //    </div>
            //   <div id="navbarBasicExample" className="navbar-menu">
            //     <div className="navbar-start">
            //        <a className="navbar-item"href="./About">About</a>
            //       <a className="navbar-item" href="./LockerRoom">Locker Room</a>
               
            //       {/* <div className="navbar-item has-dropdown is-boxed is-hoverable">
            //         <a className="navbar-link">
            //           League
            //         </a>
            //         <div className="navbar-dropdown">
            //           <a className="navbar-item">
            //             Create a League **Coming Soon!
            //           </a>
            //           <a className="navbar-item">
            //             Join a League **Coming Soon!
            //           </a>
            //           <a className="navbar-item" onClick={props.getPlayers}>
            //             Contact
            //           </a>
                      
            //         </div>
            //       </div> */}
            //     </div>
            //     <div className="navbar-end">
            //       <div className="navbar-item">
            //         <div className="logout-button">
            //           <a className="button">
            //             Logout
            //           </a>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </nav>

      
    );
  }


export default Nav;
