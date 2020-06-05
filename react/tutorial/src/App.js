import React from "react";
// import Footer from "./components/Footer.jsx";
// import MainContent from "./components/MainContent.jsx";
// import Header from "./components/Header.jsx";
import ToDoItem from "./components/ToDoItem.jsx";
function App() {
  // const date = new Date()
  // const hours = date.getHours()
  // let timeOfDay;
  // if (hours < 12) {
  //     timeOfDay = "morning"
  // } else if (hours >= 12 && hours < 17) {
  //     timeOfDay = "afternoon"
  // } else {
  //     timeOfDay = "night"
  // }
  // const styles = {
  //     color: "green",
  //     backgroundColor: "Orange",
  //     fontSize: "200px"
  // }
  // return (
  //     // inline styling with react
  // <h1 style={styles}>Good {timeOfDay}!</h1>
  // )
  // const firstName = "Pranav"
  // const lastName = "Rajan"
  // return (
  // <h1>Hello {`${firstName} ${lastName}`}!</h1>)
  return (
    <div>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <ToDoItem />
    </div>
  );
}
export default App;
