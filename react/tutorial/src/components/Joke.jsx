// components with props
import React from "react";
function Joke(props) {
  console.log(props);
  return (
    <div className="joke">
      <h2>{props.joke.question}</h2>
      <p>{props.joke.punchline}</p>
    </div>
  );
}
export default Joke;