import { useState } from "react";
import CharCounter from "./CharCounter.jsx";
import PostButton from "./PostButton.jsx";

const MAX_CHARS = 280;

function TweetBox({ onPost }) {
  const [text, setText] = useState("");

  const count = text.length;
  const isOver = count > MAX_CHARS;
  const isEmpty = text.trim().length === 0;
  const canPost = !isOver && !isEmpty;

  function handleChange(event) {
    setText(event.target.value);
  }

  function handlePost() {
    onPost(text.trim()); 
    setText("");         
  }

  return (
    <section className="tweet-box">
      <label htmlFor="tweet-text" className="tweet-label">
        What is on your mind?
      </label>

      <textarea
        id="tweet-text"
        className={isOver ? "tweet-input tweet-input-over" : "tweet-input"}
        value={text}
        onChange={handleChange}
        rows={6}
        placeholder="Write your tweet here..."
      />

      <div className="tweet-footer">
        <CharCounter count={count} max={MAX_CHARS} />
        <PostButton disabled={!canPost} onClick={handlePost} />
      </div>
    </section>
  );
}

export default TweetBox;
