import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import HeatTransferVinyl from "../components/Pricing/HeatTransferVinyl";
import A4HeatTransfer from "../components/Pricing/A4HeatTransfer";
import MugsPlatesWaterBottles from "../components/Pricing/MugsPlatesWaterBottles";
import BlackAndWhiteCopy from "../components/Pricing/BlackAndWhiteCopy";
import ColourCopiesAndPrinting from "../components/Pricing/ColourCopiesAndPrinting";
import Laminating75Micron from "../components/Pricing/Laminating75Micron";
import Emailing from "../components/Pricing/Emailing";
import Typing from "../components/Pricing/Typing";
import PrintCopiesDesign from "../components/Pricing/PrintCopiesDesign";
import Design from "../components/Pricing/Design";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="pricing-container">
          <Helmet title={`Pricing | ${config.siteTitle}`} />
          <section>
            <h1>Print Copy Prices</h1>
            <BlackAndWhiteCopy />
            <ColourCopiesAndPrinting />
            <Laminating75Micron />
            <Emailing />
            <Typing />
            <PrintCopiesDesign />
          </section>
          <section>
            <h1>Heat Transfer Prices</h1>
            <HeatTransferVinyl />
            <A4HeatTransfer />
            <MugsPlatesWaterBottles />
            <Design />
          </section>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
