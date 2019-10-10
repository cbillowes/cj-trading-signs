import React, { Component } from "react";
import { Link } from "gatsby";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img src="logo.png" />
        </Link>
      </header>
    );
  }
}

export default Header;
