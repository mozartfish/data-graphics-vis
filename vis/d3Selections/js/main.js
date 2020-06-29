// randomly select circles and update them
// d3.selectAll("circle")
//   .style("fill", "orange")
//   .attr("r", function () {
//     return 10 + Math.random() * 40;
//   });

// select circles and update their colors
// let counter = 0;
// d3.selectAll("circle").on("click", function (d, i) {
//   if (counter == 0) {
//     d3.selectAll("circle").style("fill", "red");
//     counter++;
//   } else {
//     d3.selectAll("circle").style("fill", "cyan");
//     counter--;
//   }
// });

// modifying individual circles
d3.selectAll("circle").on("click", function (d, i) {
  d3.select(this).style("fill", "cyan");
});
