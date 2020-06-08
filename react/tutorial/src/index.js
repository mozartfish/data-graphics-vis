import React from "react";
import ReactDOM from "react-dom";
// import MyInfo from "./components/MyInfo.jsx";
import App from "./App.js";

// // JSX example
// ReactDOM.render(
//   <div>
//     <h1>Hello, world!</h1>
//     <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// );

// React Functional Component
// function MyApp() {
//   return (
//     <div>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </div>
//   );
// }

// function MyInfo() {
//   return(
//     <div>
//       <h1>Pranav</h1>
//       <p>This is a paragraph</p>
//       <ul>
//         <li>San Francisco</li>
//         <li>Salt Lake City</li>
//         <li>Kona</li>
//       </ul>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById("root"));
