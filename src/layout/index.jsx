import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <div className="layout">
          <Header />
          {children}
          <Footer />
        </div>
      </>
    );
  }
}
