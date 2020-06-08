import React from "react";
// import Footer from "./components/Footer.jsx";
// import MainContent from "./components/MainContent.jsx";
// import Header from "./components/Header.jsx";
// import ToDoItem from "./components/ToDoItem.jsx";
// import ContactCard from "./components/ContactCard.jsx";
import Joke from "./components/Joke.jsx";
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
  // return (
  //   <div className="contacts">
  //     <ContactCard
  //       contact={{
  //         name: "Mr. Whiskerson",
  //         imgUrl: "http://placekitten.com/300/200",
  //         phone: "(212) 555-1234",
  //         email: "mr.whiskaz@catnap.meow",
  //       }}
  //       // name="Mr. Whiskerson"
  //       // imgUrl="http://placekitten.com/300/200"
  //       // phone="(212) 555-1234"
  //       // email="mr.whiskaz@catnap.meow"
  //     />
  //     <ContactCard
  //       contact={{
  //         name: "Mr.C",
  //         imgUrl: "http://placekitten.com/400/200",
  //         phone: "(212) 55-3456",
  //         email: "mr.thecat@catnap.meow",
  //       }}
  //       // name="Mr. C"
  //       // imgUrl="http://placekitten.com/400/200"
  //       // phone="(212) 555-3456"
  //       // email="mr.c@catnap.meow"
  //     />
  //     <ContactCard
  //       contact={{
  //         name: "Mr. The Cat",
  //         imgUrl: "http://placekitten.com/400/300",
  //         phone: "(212) 55-7829",
  //         email: "mr.thecat@catnap.meow",
  //       }}
  //       // name="Mr. The Cat"
  //       // imgUrl="http://placekitten.com/400/300"
  //       // phone="(212) 555-7829"
  //       // email="mr.thecat@catnap.meow"
  //     />
  //     <ContactCard
  //       contact={{
  //         name: "Mr. Furry Friend",
  //         imgUrl: "http://placekitten.com/200/100",
  //         phone: "(212) 555-1065",
  //         email: "mr.furryFriend@catnap.meow",
  //       }}
  //       // name="Mr. Furry Friend"
  //       // imgUrl="http://placekitten.com/200/100"
  //       // phone="(212) 555-1065"
  //       // email="mr.furryFriend@catnap.meow"
  //     />
  //   </div>
  // );
  return (
    <div className="jokes">
      <Joke
        joke={{
          question:
            "Yesterday I saw a guy spill all his Scrabble letters on the road.",
          punchline: 'I asked him, "What\'s the word on the street?"',
        }}
      />
      <Joke
        joke={{
          question: "Why did the chicken cross the road",
          punchline: "To get to the other side",
        }}
      />
      <Joke
        joke={{
          question: "Why do you tell actors to break a leg?",
          punchline: "Because every play has a cast",
        }}
      />
      <Joke
        joke={{
          question: "What did Beethoven say when he saw a banana",
          punchline: "Banananananananaaaaaaaaaaaaaaaaaaaaaaaaa!",
        }}
      />
      <Joke
        joke={{
          question: "Why was the cat sitting on the computer",
          punchline: "To keep an eye on the mouse!",
        }}
      />
    </div>
  );
}
export default App;
