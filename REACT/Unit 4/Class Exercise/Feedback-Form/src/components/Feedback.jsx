import React from 'react';
import './Feedback.css'

function Feedback(props) {
  const { feedbacksList } = props;
  return (
    <div>
      {feedbacksList.map((feedback,index) => {

        return <div className="feedbackContainer" key={index}>
          <p className="feedback"> <strong>{feedback.name}:</strong>  <span>{feedback.feedback}</span></p>
        </div>


      })}


      {/* <div className="feedbackContainer">
        <p className="feedback"> <strong>Vinay:</strong>  <span>this is a sample feed back</span></p>
      </div>

       <div className="feedbackContainer">
        <p className="feedback"> <strong>Vinay:</strong>  <span>this is a sample feed back</span></p>
      </div> */}

    </div>
  )
}

export default Feedback
