import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Blog.css';
function Blog(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = props;
  const [isLoading, setisLoading] = useState(true);
  const [blogData, setblogData] = useState(null);


  useEffect(() => {
    const fakeLoder = setTimeout(() => {
      const blogDetails = blogs.find((blog) => blog.id == id);
      setblogData(blogDetails);
      setisLoading(false);
    }, 3000);

    return () => clearTimeout(fakeLoder);
  }, [id]);

  if (isLoading) {
    return (<div className="loadingScreen">
      <h1>Loading...</h1>
    </div>)

  } else if (blogData) {

    return (<div className='blogContainer'>
      <div className="blog">
        <h1>{blogData.title}</h1>
        <p>Author : <span className="author">{blogData.author}</span></p>
        <p className="description">{blogData.content} </p>
        <button className="goBackBtn" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>)

  } else {
    return (<div className="blogContainer"><div className="blog">
      <h1>Invalid Blog</h1>
      <button className="goBackBtn" onClick={() => navigate('/')}>Back</button>
    </div>
    </div>)
  }


  //   return(
  // <div className='blogContainer'>
  //   {isLoading && <div className="loadingScreen">
  //     <h1><Loader size={100}/></h1>
  //   </div>}

  //   {blogData && <div className="blog">
  //     <h1>{blogData.title}</h1>
  //     <p>Author : <span className="author">{blogData.author}</span></p>
  //     <p className="description">{blogData.content} </p>
  //     <button className="goBackBtn" onClick={() => navigate('/')}>Back</button>
  //   </div>}
  // </div>)

}

export default Blog
