// Script for drawing circles on a screen with d3

// set up the svg
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 449)
  .attr("height", 249);

// draw circle
// svg
//   .append("circle")
//   .attr("cx", 200)
//   .attr("cy", 100)
//   .attr("r", 50)
//   .attr("class", "circle");

// draw ellipse
// svg
//   .append("ellipse")
//   .attr("cx", 200)
//   .attr("cy", 100)
//   .attr("rx", 100)
//   .attr("ry", 50)
//   .attr("class", "ellipse");

// draw rectangle
// svg
//   .append("rect")
//   .attr("x", 100)
//   .attr("y", 50)
//   .attr("height", 100)
//   .attr("width", 200)
//   .attr("class", "rectangle");

// draw curved rectangle
// svg.append('rect')
// .attr('x', 100)
// .attr('y', 50)
// .attr('height', 100)
// .attr('width', 200)
// .attr('rx', 10)
// .attr('ry', 10)
// .attr('class', 'rectangle');

// draw lines
// svg.append('line')
// .attr('x1', 100)
// .attr('y1', 50)
// .attr('x2', 300)
// .attr('y2', 150)
// .attr('class', 'line');

// draw polylines
// svg.append('polyline')
// .attr('points', '100, 50, 200, 150, 300, 50')
// .attr('class', 'polyline');

// draw polygon
// svg.append('polygon')
// .attr('points', '100, 50, 200, 150, 300, 50')
// .attr('class', 'polygon');

// draw path
// svg
//   .append("path")
//   .attr("d", "M 100, 50, L 200,150, L 300,50 Z")
//   .attr("class", "path");

// draw clip path (get the intersection of two shapes ie. cookie cutter and dough)

// the cookie cutter
// svg
//   .append("clipPath") // the clip path
//   .attr("id", "ellipse-clip") // give the clipPath an ID
//   .append("ellipse") // shape it as an ellipse
//   .attr("cx", 175)
//   .attr("cy", 100)
//   .attr("rx", 100)
//   .attr("ry", 50);

// draw the clipped path on the screen
// the dough
// svg
//   .append("rect") // the rectangle
//   .attr("x", 125)
//   .attr("y", 75)
//   .attr("clip-path", "url(#ellipse-clip)") // clip the rectangle
//   .attr("class", "rectangle")
//   .attr("height", 100)
//   .attr("width", 200);


// draw the text
// svg.append('text')
// .attr('x', 200)
// .attr('y', 100)
// .text('Hello, World!')
// .attr('class', 'text');

// draw the anchored text (bottom-middle anchor)
// svg.append('text')
// .attr('x', 200)
// .attr('y', 100)
// .attr('text-anchor', 'middle')
// .text('Hello, World!')
// .attr('class', 'text');

// draw the anchored text (bottom-right anchor)
// svg.append('text')
// .attr('x', 200)
// .attr('y', 100)
// .attr('text-anchor', 'end')
// .text('Hello, World!')
// .attr('class', 'text');

// draw the anchored text (left-middle)
// svg.append('text')
// .attr('x', 200)
// .attr('y', 100)
// .attr('text-anchor', 'start')
// .text('Hello, World!')
// .attr('class', 'text');


