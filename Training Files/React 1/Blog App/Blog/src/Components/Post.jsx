import './Post.css';

function Post({ title, author, date, content }) {
  return (
    <div className="post">
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <div className="post-meta">
          <span className="post-author">By {author}</span>
          <span className="post-date">{date}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Post;
