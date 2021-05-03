import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  let { name, isDanger, isSmall, className, isSuccess } = props;
  let myClass = "";
  myClass = isDanger ? (myClass += "is-danger" + " ") : myClass + " ";
  myClass = isSuccess ? (myClass += "is-success" + " ") : myClass + " ";
  myClass = isSmall ? (myClass += "is-small" + " ") : myClass + " ";
  myClass = className ? (myClass += className + " ") : myClass + " ";
  return (
    <div>
      <button className={`button ${myClass}`}>{name}</button>
    </div>
  );
}

export default CoolButton;
