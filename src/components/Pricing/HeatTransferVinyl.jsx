import React, { Component } from "react";
import "./Pricing.css";

class HeatTransferVinyl extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="6">Heat Transfer Vinyl</th>
          </tr>
          <tr>
            <th colSpan="2">
              Includes design, setup and heat transfer.
              Excludes the shirt, cap, tea towel etc.
            </th>
            <th colSpan="4">
              Price each
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
            <td className="heading" rowSpan="2">Flexx designs on caps, shirts, etc</td>
            <td className="squash">One color</td>
            <td>R 50.00</td>
            <td>R 48.00</td>
            <td>R 46.00</td>
            <td>R 45.00</td>
          </tr>
          <tr>
            <td className="squash">Per additional colour</td>
            <td>R 10.00</td>
            <td>R 9.50</td>
            <td>R 9.00</td>
            <td>R 8.00</td>
          </tr>
          <tr>
            <td className="heading" rowSpan="2">Flexx Flock designs on caps, shirts, etc</td>
            <td className="squash">One color</td>
            <td>R 70.00</td>
            <td>R 67.50</td>
            <td>R 65.00</td>
            <td>R 62.00</td>
          </tr>
          <tr>
            <td className="squash">Per additional colour</td>
            <td>R 15.00</td>
            <td>R 14.50</td>
            <td>R 14.00</td>
            <td>R 13.50</td>
          </tr>
          <tr>
            <td className="heading" rowSpan="2">Flexx Glitter designs on caps, shirts, etc</td>
            <td className="squash">One colour</td>
            <td>R 60.00</td>
            <td>R 57.50</td>
            <td>R 55.00</td>
            <td>R 52.00</td>
          </tr>
          <tr>
            <td className="squash">Per additional colour</td>
            <td>R 12.50</td>
            <td>R 12.00</td>
            <td>R 11.50</td>
            <td>R 11.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default HeatTransferVinyl;
