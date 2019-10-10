import React, { Component } from "react";
import "./Pricing.css";

class Typing extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="4">Typing</th>
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
            <th>0 - 19</th>
            <th>20 - 49</th>
            <th>50 - 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="expanded-squash">Typing documents  - per page (excludes printing and emailing)</td>
            <td>R 35.00</td>
            <td>R 25.50</td>
            <td>R 24.00</td>
          </tr>
          <tr>
            <td className="expanded-squash">Print typed documents in black and white - per page</td>
            <td>R 1.00</td>
            <td>R 1.00</td>
            <td>R 0.90</td>
          </tr>
          <tr>
            <td className="expanded-squash">Print typed documents in colour - per page</td>
            <td>R 7.00</td>
            <td>R 7.00</td>
            <td>R 6.50</td>
          </tr>
          <tr>
            <td className="expanded-squash">Email typed documents</td>
            <td>R 5.00</td>
            <td>R 5.50</td>
            <td>R 6.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Typing;
