import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Product from "./Product";
import "./Products.css";
export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            products {
              name
              image
              description
            }
          }
        }
      }
    `
  )
  const products = data.site.siteMetadata.products;
  return (
    <div class="products">
      {products.map(p => (
        <Product name={p.name} image={p.image} description={p.description} />
      ))}
    </div>
  )
}