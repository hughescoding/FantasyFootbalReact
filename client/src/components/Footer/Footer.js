import React from "react";
import "bulma/css/bulma.css";
import "./footer.css"



export function Footer() {
    return (
       <footer className="footer">
            {/* <div className="content has-text-centered foot"> */}
                <p>
                     Gridiron Kings © 2019     <a href="https://github.com/hughescoding/FantasyFootbalReact"> <i class="fab fa-github size: 9x"> </i></a>
                </p>
            {/* </div> */}
           
       </footer>
    );
}

export default Footer;



