import React, { Component } from "react";
import "./Pricing.css";

class Laminating75Micron extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="4">Laminating 75+75 micron</th>
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
            <th>0 - 49</th>
            <th>50 - 99</th>
            <th>100 &gt;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="expanded-squash">A4</td>
            <td>R 8.00</td>
            <td>R 9.00</td>
            <td>R 10.00</td>
          </tr>
          <tr>
            <td className="expanded-squash">A5</td>
            <td>R 5.00</td>
            <td>R 6.00</td>
            <td>R 7.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Laminating75Micron;
