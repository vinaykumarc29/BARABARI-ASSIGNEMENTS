import React from 'react';
import './UserCards.css';

function UserCards(props) {
  const {name , email} = props;
  return (
    <div className="card">
      <p id="name">Name : <span>{name}</span> </p>
      <p id="email">Email : <span>{email}</span> </p>
    </div>
  )
}

export default  React.memo(UserCards)
