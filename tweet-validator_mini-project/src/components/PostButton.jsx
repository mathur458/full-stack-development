function PostButton({ disabled, onClick }) {
  return (
    <button
      type="button"
      className="post-button"
      disabled={disabled}
      onClick={onClick}
    >
      Post
    </button>
  );
}

export default PostButton;
