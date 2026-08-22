import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home(props) {
  const { blogs } = props;
  return (
    <div>
      <header><h1>📘 Blog Posts</h1></header>

      <div className="cardsContainer">

        {blogs.map((blog) => {
          return <div className="blogCard" key={blog.id}>
            <h3>{blog.title}</h3>
            <h4><strong>Author:</strong> <span className="author">{blog.author} </span></h4>
            <Link to={`blog/${blog.id}`}>Read More</Link>
          </div>
        })}

      </div>
    </div>
  )
}

export default Home
