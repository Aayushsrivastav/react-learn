
const Tweet = ({name, message}) => {
    return(
        <div className="tweet">
            <h2>Name {name}</h2>
            <h3>{message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;