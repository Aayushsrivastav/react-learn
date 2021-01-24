import React from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({textInput,tweets,setTweets,setTextInput}) => {
    
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {id: uuidv4(), message: textInput }]);
        setTextInput("");
    };

    return(
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={inputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>
    );
};

export default CreateTweet;