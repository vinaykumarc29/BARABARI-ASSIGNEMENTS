import { useState } from 'react'
import './App.css'
import Feedback from './components/Feedback'

function App() {

  const [name, setname] = useState("");
  const [feedback, setfeedback] = useState("");
  const [feedbacksList, setfeedbacksList] = useState([]);

  const handleSubmit = (e) => {

    if (name.trim() == `` || feedback.trim() == ``) {
      alert('Please fillout The Fields');
      return;
    }

    setfeedbacksList([...feedbacksList, { name: name, feedback: feedback }]);
    setname('');
    setfeedback('');

  }


  return (
    <>
      <div className='container'>
        <h1>Feedback Form</h1>
        <div className="formContainer">

          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }} >

            <label htmlFor="name">Name :</label>

            <input type="text" required value={name} onChange={(e) => {
              setname(e.target.value)
            }}
              className='form-element'
              name="name"
              id="name" />

            <br />
            <label htmlFor="feedBack">Feedback :</label>
            <textarea name="feedbackText" required value={feedback} onChange={(e) => {
              setfeedback(e.target.value);
            }} className='form-element' id="feedbackText" />

            <br />
            <input type="submit" name="submit" className='form-element' id="submit" />
          </form>
        </div>
        <h2>Feedbacks</h2>
        <Feedback feedbacksList={feedbacksList} />
      </div>
    </>
  )
}

export default App
