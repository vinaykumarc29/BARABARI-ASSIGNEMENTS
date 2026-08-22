import React from 'react';
import './CourseCard.css';

function CourseCard(props) {
  const {title , category ,description} = props;
  return (
    <div className="card">
      <p id="name">Name : <span>{title}</span> </p>
      <p id="description">Category : <span>{description}</span> </p>
      <p id="category">Category : <span>{category}</span> </p>
    </div>
  )
}

export default  React.memo(CourseCard)
