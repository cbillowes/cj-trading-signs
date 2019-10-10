import React, { Component } from "react";
import "./Pricing.css";

class HeatTransferVinyl extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="6">A4 Heat Transfer (Forever)</th>
          </tr>
          <tr>
            <th colSpan="2">
              Includes design, setup and heat transfer.
              Excludes the shirt, cap, tea towel etc.
            </th>
            <th colSpan="4">
              Price per page
            </th>
          </tr>
          <tr>
            <th colSpan="2">Description</th>
            <th>1 to 5</th>
            <th>6 to 10</th>
            <th>11 to 20</th>
            <th>20 &gt;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="heading" rowSpan="2">A4 full colour</td>
            <td className="squash">Dark material</td>
            <td>R 55.00</td>
            <td>R 53.00</td>
            <td>R 52.00</td>
            <td>R 50.00</td>
          </tr>
          <tr>
            <td className="squash">Light material</td>
            <td>R 55.00</td>
            <td>R 53.00</td>
            <td>R 52.00</td>
            <td>R 50.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default HeatTransferVinyl;
