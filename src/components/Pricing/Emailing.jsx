import React, { Component } from "react";
import "./Pricing.css";

class Emailing extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="4">Emailing</th>
          </tr>
          <tr>
            <th>
              &nbsp;            
            </th>
            <th colSpan="3">
              Price per page
            </th>
          </tr>
          <tr>
            <th>Description</th>
            <th>Email</th>
            <th>Per page (1 - 49)</th>
            <th>Per page (50 - 100)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="expanded-squash">Send email from stick</td>
            <td>R 5.00</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="expanded-squash">Scan pages and send email</td>
            <td>R 5.00</td>
            <td>R 0.50</td>
            <td>R 0.45</td>
          </tr>
          <tr>
            <td className="expanded-squash">Receive email and print black and white</td>
            <td>R 2.00</td>
            <td>R 1.00</td>
            <td>R 0.90</td>
          </tr>
          <tr>
            <td className="expanded-squash">Receive email and print colour</td>
            <td>R 2.00</td>
            <td>R 7.00</td>
            <td>R 6.50</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Emailing;
