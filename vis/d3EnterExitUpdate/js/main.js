// the data
// let myData = [10, 40, 20];
let myData = ["A", "B", "C", "D", "E", "F", "G"];
// add a button
let buttonDiv = d3.select("body").append("div");
buttonDiv.attr("id", "menu");
let button = d3.select("#menu").append("button");
button.text("add");
button.on("click", function () {
  // non-empty selection
  //   d3.select("#content").selectAll("div").data(myData).enter().append("div");

  // empty selection
  d3.select("#content").selectAll("div").data(myData).enter().append("div");
});

// enter identifies any DOM elements that need to be added
// when joined with the data
// d3.select("#content").selectAll("div").data(myData).enter().append("div");
