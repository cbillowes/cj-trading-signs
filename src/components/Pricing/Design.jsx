import React, { Component } from "react";
import "./Pricing.css";

class Design extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="4">Design</th>
          </tr>
          <tr>
            <th>
              &nbsp;            
            </th>
            <th colSpan="3">
              Price per hour
            </th>
          </tr>
          <tr>
            <th>Description</th>
            <th>0 - 10</th>
            <th>11 - 50</th>
            <th>51 &gt;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="expanded-squash">Design, layout and setup for complex designs</td>
            <td>R 350.00</td>
            <td>R 340.00</td>
            <td>R 330.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Design;
