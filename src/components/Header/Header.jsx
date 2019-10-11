import React, { Component } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import optimizedFiles from "../../../data/OptimizedFiles";
import "./Header.css";

export default () => {
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
    <header className="header">
      <Link to="/">
        <img src={optimizedFiles.getFile(fileEdges, "logo.png")} />
      </Link>
    </header>
  );
};
