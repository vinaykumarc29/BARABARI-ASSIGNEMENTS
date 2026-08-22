import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div>
        <div className="errorMsg">
            <h1>Looks like you have enter invalid URL please check your URl properly</h1>
            <button className="goBackBtn" onClick={()=>navigate('/')}>Go Back</button>

        </div>
      
    </div>
  )
}

export default PageNotFound
