import React from "react";
import products from "../../../data/Products";
import "./Products.css";

class Products extends React.Component {
  render() {
    return (
      <div class="products">
        {products.map(p => (
          <section class="product">
            <h1>{p.name}</h1>
            <img src={`products/${p.image}`} />
            <p>{p.description}</p>
          </section>
        ))}
      </div>
    );
  }
}

export default Products;
