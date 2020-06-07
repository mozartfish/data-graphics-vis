import React from "react";
// import Footer from "./components/Footer.jsx";
// import MainContent from "./components/MainContent.jsx";
// import Header from "./components/Header.jsx";
// import ToDoItem from "./components/ToDoItem.jsx";
import ContactCard from "./components/ContactCard.jsx";
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
  //   return (
  //     <div>
  //       {/* <Header />
  //       <MainContent />
  //       <Footer /> */}
  //       {/* <ToDoItem /> */}
  //     </div>
  //   );
  return (
    <div className="contacts">
      <ContactCard
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/300/200"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        name="Mr.C"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 555-3456"
        email="mr.c@catnap.meow"
      />
      <ContactCard
        name="Mr. The Cat"
        imgUrl="http://placekitten.com/400/300"
        phone="(212) 555-7829"
        email="mr.thecat@catnap.meow"
      />
      <ContactCard
        name="Mr. Furry Friend"
        imgUrl="http://placekitten.com/200/100"
        phone="(212) 555-1065"
        email="mr.furryFriend@catnap.meow"
      />
    </div>
  );
}
export default App;
