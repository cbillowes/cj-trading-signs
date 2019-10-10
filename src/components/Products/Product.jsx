import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <section class="product">
        <h1>{this.props.name}</h1>
        <img src={`products/${this.props.image}`} />
        <p>{this.props.description}</p>
      </section>
    );
  }
}

export default Product;
