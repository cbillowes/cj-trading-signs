import React, { Component } from "react";
import "./Pricing.css";

class ColourCopiesAndPrinting extends Component {
  render() {
    return (
      <table className="pricing">
        <thead>
          <tr>
            <th className="heading" colSpan="6">Colour copies and printing</th>
          </tr>
          <tr>
            <th>
              &nbsp;
            </th>
            <th colSpan="5">
              Price per page
            </th>
          </tr>
          <tr>
            <th colSpan="2">Description</th>
            <th>1 to 49</th>
            <th>50 - 299</th>
            <th>300 - 499</th>
            <th>500 - 1000</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="heading" rowSpan="2">A4 document printing from stick or email</td>
            <td className="squash">Single sided</td>
            <td>R 7.00</td>
            <td>R 6.50</td>
            <td>R 6.00</td>
            <td>R 5.50</td>
          </tr>
          <tr>
            <td className="squash">Double sided</td>
            <td>R 12.00</td>
            <td>R 11.00</td>
            <td>R 10.00</td>
            <td>R 9.00</td>
          </tr>
          <tr>
            <td className="heading" rowSpan="2">A4 loose sheet scan and copy</td>
            <td className="squash">Single sided</td>
            <td>R 7.00</td>
            <td>R 6.50</td>
            <td>R 6.00</td>
            <td>R 5.50</td>
          </tr>
          <tr>
            <td className="squash">Double sided</td>
            <td>R 12.00</td>
            <td>R 11.00</td>
            <td>R 10.00</td>
            <td>R 9.00</td>
          </tr>
          <tr>
            <td className="heading extended-squash" colSpan="2">A4 scan from book and print</td>
            <td>R 8.50</td>
            <td>R 9.00</td>
            <td>R 9.50</td>
            <td>R 10.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ColourCopiesAndPrinting;
