import React from "react";
import './App.css';
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

  const name = "john"
  const message ="Message Text";

  const sayHelloHandler = () => {
    console.log(`Hello `);
  };

  return (
    <div>
      {/* <CreateTweet />
      <TweetList name={name} message={message}/> */}
      <h1>Hello {name}</h1>
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
};

export default App;
