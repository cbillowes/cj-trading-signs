import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import optimizedFiles from "../../../data/OptimizedFiles";
import "./Product.css";

export default ({ name, image, description }) => {
  const query = useStaticQuery(
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
  const fileEdges = optimizedFiles.getFileEdges(query); 

  return (
    <section class="product">
      <h1>{name}</h1>
      <div
        css={css`
          width: 300px;
          height: 400px;
          background: url(${optimizedFiles.getFile(fileEdges, image)}) no-repeat center center;
          background-size: cover;
        `}
      />
      <p>{description}</p>
    </section>
  );
}
