
import Tweet from "./Tweet";

const TweetList = ({name, tweets, setTweets}) => {
    return(
        <div className="tweet-list">
            {tweets.map((data) => (
                <Tweet name={name} tweet={data} key={data.id} setTweets={setTweets} tweets={tweets}/>
            ))}
        </div>
    );
};

export default TweetList;