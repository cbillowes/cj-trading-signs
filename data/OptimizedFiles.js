export default {
  getFileEdges: function(query){
    return query.allFile.edges;
  },
  getFile: function(edges, image) {
    const key = image.replace(/\.png/gi, "");
    let url = "";
    edges.map(f => {
      if (key === f.node.name) {
        url = f.node.publicURL;
      }
    });
    return url;
  }
};
