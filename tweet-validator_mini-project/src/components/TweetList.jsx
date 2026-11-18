function TweetList({ tweets, onDelete }) {
  if (tweets.length === 0) {
    return <p className="empty-note">Nothing posted yet. Your tweets will show up here.</p>;
  }

  return (
    <section className="tweet-list">
      <h2 className="list-title">Posted ({tweets.length})</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id} className="tweet-item">
            <p className="tweet-text">{tweet.text}</p>
            <div className="tweet-meta">
              <span className="tweet-time">{tweet.time}</span>
              <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(tweet.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TweetList;
