import React, { useState } from 'react';
import Post from './Post';
import './Post.css';

function BlogPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      date: "May 21, 2025",
      content: "React is a powerful library for building user interfaces...",
    },
    {
      id: 2,
      title: "Why You Should Learn React",
      author: "Jane Smith",
      date: "May 20, 2025",
      content: "React makes building interactive UIs a breeze..."
    },
    {
      id: 3,
      title: "Advanced React Patterns",
      author: "Alice Johnson",
      date: "May 19, 2025",
      content: "In this post, we'll explore some advanced patterns in React..."
    }
  ]);

  return (
    <div className="app-container">
      <h1>My Blog</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default BlogPage;
