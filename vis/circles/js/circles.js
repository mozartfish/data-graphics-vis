// Script for drawing circles on a screen with d3

// set up the svg
let svg = d3
  .select("body")
  .append("svg")
  .attr("width", 449)
  .attr("height", 249);

// draw circle
svg
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("class", "circle");
