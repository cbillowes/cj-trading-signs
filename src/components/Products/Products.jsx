import React from "react";
import Product from "./Product";
import products from "../../../data/Products";
import "./Products.css";

class Products extends React.Component {
  render() {
    return (
      <div class="products">
        {products.map(p => (
          <Product name={p.name} image={p.image} description={p.description} />
        ))}
      </div>
    );
  }
}

export default Products;
