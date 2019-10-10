import React, { Component } from "react";
import "./Pricing.css";

class MugsPlatesWaterBottles extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="5">Mugs, Plates and Water Bottles</th>
          </tr>
          <tr>
            <th>
              Includes design, setup and heat transfer.
              Excludes the shirt, cap, tea towel etc.
            </th>
            <th colSpan="4">
              Price each
            </th>
          </tr>
          <tr>
            <th>Description</th>
            <th>1 to 5</th>
            <th>6 to 10</th>
            <th>11 to 100</th>
            <th>100 &gt;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="expanded-squash">Mugs</td>
            <td>R 55.00</td>
            <td>R 53.00</td>
            <td>R 52.00</td>
            <td>R 50.00</td>
          </tr>
          <tr>
            <td className="expanded-squash">Plates</td>
            <td>TBC</td>
            <td>TBC</td>
            <td>TBC</td>
            <td>TBC</td>
          </tr>
          <tr>
            <td className="expanded-squash">Water Bottles</td>
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

export default MugsPlatesWaterBottles;
