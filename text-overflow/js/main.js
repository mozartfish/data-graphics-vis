// create svg
let svg = d3.select("body").append("svg");
svg.attr("width", 125).attr("height", 200).attr("id", "hello-svg");

// set up the data for the svg
let textData = [
  "Floccinaucinihilipilification",
  "Floccinaucinihilipilification",
];

// select all the stuff
// let telements = d3
//   .select("#hello-svg")
//   .selectAll("text")
//   .data(textData)
//   .enter()
//   .append("text");

// telements
//   .attr("x", 5)
//   .attr("y", (d, i) => {
//     return i * 20 + 60;
//   })
//   .attr("width", 150)
//   .attr("height", 30)
//   .classed("text-info", true)
//   .text((d) => d);

// foreign object selection stuff
let telememnts = d3
  .select("#hello-svg")
  .selectAll("foreignObject")
  .data(textData)
  .enter()
  .append("foreignObject");
