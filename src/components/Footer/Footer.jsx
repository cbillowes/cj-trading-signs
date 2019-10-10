import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>
          <h4>
            1859 Grootvlei Res Estate &middot;
            Strubenvale Ext 2 &middot;
            Springs &middot;
            Gauteng <br/>
            <a href="tel:+27672594314">067 259 4314</a> &middot; { " " }
            <a href="mailto:cj.trading.signs@gmail.com">cj.trading.signs@gmail.com</a> &middot; { " " }
            <a href="https://www.cj-trading-signs.com">www.cj-trading-signs.com</a>
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
