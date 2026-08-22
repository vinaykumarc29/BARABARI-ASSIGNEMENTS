import { useState } from 'react';
import './Post.css' ;

function post(props) {

    const [likesCount ,setlikesCount] = useState(0);

    const handleLikes = ()=>{
      setlikesCount(likesCount+1);
    }


  return (
    <div>
      <div className="postContainer">
        <img src={props.image} alt="instagram post" />
        <h4 className='caption'>{props.caption}</h4>
        <button className="likeBtn" onClick={handleLikes}>♥️ Like {likesCount}</button>
      </div>
    </div>
  )
}

export default post
