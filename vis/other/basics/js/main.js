// Script for rendering the basic line chart

// For Debugging Purposes
// console.log("hello, world");

// function for representing date time on the x axis
const parseTime = d3.timeParse("%d-%b-%y");

// set up dimensions for the visualization
const margin = { top: 20, right: 20, bottom: 30, left: 50 },
  width = 960 - margin.left - margin.right;
height = 500 - margin.top - margin.bottom;

// axis scales
const xScale = d3.scaleTime().range([0, width]);
const yScale = d3.scaleLinear().range([height, 0]);

// represent the line
let valueLine = d3
  .line()
  .x((d) => {
    return xScale(d.date);
  })
  .y((d) => {
    return yScale(d.close);
  });

// set up svg
let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// process data and render stuff

d3.csv("/data/basic_data.csv").then((data) => {
  // process data into format for visualization
  data.forEach((element) => {
    element.date = parseTime(element.date);
    element.close = +element.close;
  });

  // Scale data for visualization
  xScale.domain(
    d3.extent(data, (d) => {
      return d.date;
    })
  );
  yScale.domain([
    0,
    d3.max(data, (d) => {
      return d.close;
    }),
  ]);

  // draw the line
  svg.append("path").data([data]).attr("class", "line").attr("d", valueLine);

  // draw axes

  // x axis
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  // y axis
  svg.append("g").call(d3.axisLeft(yScale));
});
