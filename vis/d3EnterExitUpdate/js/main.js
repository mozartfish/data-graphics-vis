// data sets
let myData1 = [10, 40, 20];
let myData2 = ["A", "B", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
let myData3 = ["A"];

// button
let button = d3.select("body").append("button");
button.text("add");

// enter pattern
// enter identifies any DOM elements that needed to be added when the
// joined array is longer than the selection
// its defined on an update selection (selection returned by .data)
// enter returns an enter selection which represents elements
// that need to be added. Its usually followed by append which
// adds stuff to the dom

// button.on("click", function () {
//   d3.select("#content").selectAll("div").data(myData2).enter().append("div");
// });

// exit pattern
// returns an exit selection which consists of elements that ned to be removed
// from the DOM. It is usually followed by .remove

// button.on("click", function () {
//   d3.select("#content").selectAll("div").data(myData3).exit().remove();
// });

// update pattern
// the existing elements are represented by the update selection
// this is the selection returned by .data

// button.on("click", function () {
//   let u = d3.select("#content").selectAll("div").data(myData2);
//   u.enter().append("div");
//   u.text(function (d) {
//     return d;
//   });
// });

// enter pattern continued
// entering elements are represented by the enter selection
// we can modify only enter elements

// button.on("click", function () {
//   let u = d3.select("#content").selectAll("div").data(myData3);
//   u.enter()
//     .append("div")
//     .text(function (d) {
//       return d;
//     });
// });

// merge and remove
// to modify existing and entering elements we can call a function
// on the update and enter selections

// let counter = 0;
// button.on("click", function () {
//   console.log(counter);
//   if (counter == 0) {
//     let u = d3.select("#content").selectAll("div").data(myData1);
//     u.enter()
//       .append("div")
//       .merge(u)
//       .text(function (d) {
//         return d;
//       });
//     u.exit().remove();
//     counter++;
//   } else if (counter == 1) {
//     console.log(counter);
//     let v = d3.select("#content").selectAll("div").data(myData2);
//     v.enter()
//       .append("div")
//       .merge(v)
//       .text(function (d) {
//         return d;
//       });
//     v.exit().remove();
//     counter++;
//   } else {
//     let x = d3.select("#content").selectAll("div").data(myData3);
//     x.enter()
//       .append("div")
//       .merge(x)
//       .text(function (d) {
//         return d;
//       });
//     x.exit().remove();
//     counter = 0;
//   }
// });

// d3 enter, update exit pattern with join

let counter = 0;
button.on("click", function () {
  console.log(counter);
  if (counter == 0) {
    let u = d3.select("#content").selectAll("div").data(myData1);
    u.join("div").text(function (d) {
      return d;
    });
    counter++;
  } else if (counter == 1) {
    console.log(counter);
    let v = d3.select("#content").selectAll("div").data(myData2);
    v.join("div").text(function (d) {
      return d;
    });
    counter++;
  } else {
    let x = d3.select("#content").selectAll("div").data(myData3);
    x.join("div").text(function (d) {
      return d;
    });
    x.exit().remove();
    counter = 0;
  }
});
