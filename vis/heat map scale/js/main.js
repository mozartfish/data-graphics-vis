// set up margins for the vis
const margin = { top: 30, right: 30, bottom: 30, left: 30 };
const width = 450 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

// add the svg
let svg = d3
  .select("#heat_map")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
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
  const dataMin = d3.min(data, function (d) {
    return d.value;
  });
  const dataMax = d3.max(data, function (d) {
    return d.value;
  });

  // color scale for the heat map
  const myColor = d3
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
      return myColor(d.value);
    });
});
