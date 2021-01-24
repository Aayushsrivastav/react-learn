import React, {useState, useEffect} from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

  const [name, setName] = useState("John");  
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("Effect run");
  }, [tweets]);

  return (
    <div>
      <h1>Tweet</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} setTweets={setTweets} tweets={tweets} />
      <TweetList tweets={tweets} setTweets={setTweets} name={name}/>
    </div>
  );
};

export default App;
