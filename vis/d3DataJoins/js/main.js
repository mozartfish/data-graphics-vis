// the data
let scores = [
  {
    name: "Andy",
    score: 25,
  },
  {
    name: "Beth",
    score: 39,
  },
  {
    name: "Craig",
    score: 42,
  },
  {
    name: "Diane",
    score: 35,
  },
  {
    name: "Evelyn",
    score: 48,
  },
];

// binding the data to the svg objects
d3.selectAll("circle")
  .data(scores)
  .attr("r", (d) => d.score);
