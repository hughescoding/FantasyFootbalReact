import React from "react";
import "./DeleteButton.css";
import "bulma/css/bulma.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <a className="button" {...props} role="button" tabIndex="0">
      Remove Me
    </a>
  );
}

export default DeleteButton;