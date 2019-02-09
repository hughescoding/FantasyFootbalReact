import React from "react";
import "./DraftButton.css";
import "bulma/css/bulma.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DraftButton(props) {
  return (
    <a className="button" {...props} role="button" tabIndex="0">
      Draft Me
    </a>
  );
}

export default DraftButton;