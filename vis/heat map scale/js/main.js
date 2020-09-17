// set up margins for the vis
const margin = { top: 30, right: 30, bottom: 30, left: 30 };
const width = 450 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

// add the svg
let svg = d3
  .select("#heat_map")
  .append("svg")
  .attr("width", width + margin.left + margin.right + 200)
  .attr("height", height + margin.top + margin.bottom + 200)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Labels for axis
const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const vars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"];

// Scales + Axis
const xScale = d3.scaleBand().range([0, width]).domain(groups).padding(0.01);

let xAxis = svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale));

const yScale = d3.scaleBand().range([height, 0]).domain(vars).padding(0.01);

let yAxis = svg.append("g").call(d3.axisLeft(yScale));

d3.csv("/data/basicData.csv", function (d) {
  return {
    group: d.group,
    variable: d.variable,
    value: +d.value,
  };
}).then(function (data) {
  // find the min value of the data
  const dataMin = d3.min(data, function (d) {
    return d.value;
  });

  // find the max value of the data
  const dataMax = d3.max(data, function (d) {
    return d.value;
  });

  // color scale for the heat map
  const colorScale = d3
    .scaleLinear()
    .range(["white", "#69b3a2"])
    .domain([dataMin, dataMax]);

  svg
    .selectAll()
    .data(data, function (d) {
      return d.group + ":" + d.variable;
    })
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return xScale(d.group);
    })
    .attr("y", function (d) {
      return yScale(d.variable);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", yScale.bandwidth())
    .style("fill", function (d) {
      return colorScale(d.value);
    });

  // create the legend for the chart
  let legend = svg
    .selectAll(".legend")
    .data(colorScale.ticks())
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      // the tick value data
      console.log(d);
      return "translate(" + i * 40 + "," + 500 + ")";
    })
    .attr("class", "legend");

  legend
    .append("rect")
    .attr("width", 40)
    .attr("height", 20)
    .style("fill", colorScale);

  legend
    .append("text")
    .attr("font-size", "10pt")
    .attr("x", 5)
    .attr("y", 35)
    .text(String);
});
