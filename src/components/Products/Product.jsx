import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import "./Product.css";

function getImage(data, image) {
  const key = image.replace(/\.png/gi, "");
  const images = data.allFile.edges;
  return images.map(d => {
    if (key === d.node.name) {
      return d.node.publicURL;
    }
  });
}

export default ({ name, image, description }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              name
              publicURL
            }
          }
        }
      }
    `
  );

  return (
    <section class="product">
      <h1>{name}</h1>
      <div
        css={css`
          width: 300px;
          height: 400px;
          background: url(${getImage(data, image)}) no-repeat center center;
          background-size: cover;
        `}
      />
      <p>{description}</p>
    </section>
  );
}
