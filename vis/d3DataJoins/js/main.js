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

// binding the data to the circles and manipulate them to represent the data
// d3.selectAll("circle")
//   .data(scores)
//   .attr("r", (d) => d.score);

// d3.selectAll("circle")
//   .data(scores)
//   .attr("r", (d) => 2 * d.score);

// let myData = [10, 40, 20, 30, 50];

// let s = d3.selectAll("circle");

// s.data(myData);

// s.attr("r", function (d) {
//   return d;
// })
//   .classed("high", function (d) {
//     return d >= 40;
//   })
//   .attr("cx", function (d, i) {
//     return i * 120;
//   });

// javascript objects
let cities = [
  { name: "London", population: 8674000 },
  { name: "New York", population: 8406000 },
  { name: "Sydney", population: 4293000 },
  { name: "Paris", population: 2244000 },
  { name: "Beijing", population: 11510000 },
];

let s = d3.selectAll("circle");
s.data(cities);

s.attr("r", (d) => {
  let scaleFactor = 0.000005;
  return d.population * scaleFactor;
}).attr("cx", (d, i) => {
  return i * 120;
});
