import { useState, useEffect } from "react";
import TweetBox from "./components/TweetBox.jsx";
import TweetList from "./components/TweetList.jsx";

const STORAGE_KEY = "tweet-validator-tweets";

function loadTweets() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return []; 
  }
}

function App() {
  const [tweets, setTweets] = useState(loadTweets);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tweets));
  }, [tweets]);

  function addTweet(text) {
    const newTweet = {
      id: Date.now(),
      text: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setTweets([newTweet, ...tweets]);
  }

  function deleteTweet(id) {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  }

  return (
    <main className="page">
      <h1 className="page-title">Tweet Character Validator</h1>
      <p className="page-intro">
        Type below. You get 280 characters before Post switches off.
      </p>
      <TweetBox onPost={addTweet} />
      <TweetList tweets={tweets} onDelete={deleteTweet} />
    </main>
  );
}

export default App;
