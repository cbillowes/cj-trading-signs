import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Products from "../components/Products/Products";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Products />
        </div>
      </Layout>
    );
  }
}

export default Index;