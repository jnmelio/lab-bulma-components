import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../button/CoolButton";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <CoolButton
              isSmall
              isDanger
              className="is-rounded my-class"
              name={"Login"}
            />
            <CoolButton isSmall isSuccess name={"Sign Up"} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
