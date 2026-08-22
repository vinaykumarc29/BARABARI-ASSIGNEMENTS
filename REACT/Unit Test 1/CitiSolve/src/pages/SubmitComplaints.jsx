import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import './SubmitComplaints.css';
import { useNavigate } from 'react-router-dom';

function SubmitComplaints() {


  const { logout, isAuth, setIsAuth } = useFetch();
  const URL = `https://citisolve-smarter-complaint-resolution.onrender.com/api`;
  const token = localStorage.getItem(`token`);


  const [name, setName] = useState(``);
  const [ward, setWard] = useState(``);
  const [location, setLocation] = useState(``);
  const [category, setCategory] = useState(``);
  const [issue, setIssue] = useState(``);
  const [file, setFile] = useState(``);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }


  const handleSubmit = async () => {

    try {
      setLoading(true);
      let response;

      if (file) {
        console.log(`image is present !!`);


        const formData = new FormData();
        formData.append("name", name);
        formData.append("ward", ward);
        formData.append("category", category);
        formData.append("description", issue);
        formData.append("location", location);
        formData.append("photo", file);



        response = await fetch(`${URL}/complaints`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          body: formData
        });

      } else {

        response = await fetch(`${URL}/complaints`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "content-type":"application/json"
          },
          body: JSON.stringify({
            name: name,
            ward: ward,
            category: category,
            description: issue,
            location: location
          })
        });

      }
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Something went wrong !!`);
      }

      navigate('/my-complaint');


    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);

    } finally {
      setLoading(false);

    }


  }

  return (
    <div className='container'>
      <form id='form' onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div className="formContainer">
          {errorMsg && <p id='error'>{errorMsg}</p>}
          <h1>Submit a Complaint</h1>
          <p>Help us improve your community by reporting issues that need attention</p>
          <label htmlFor="name">Your Name *</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your full name' className='formEle' name="name" id="name" />

          <label htmlFor="ward">Ward *</label>
          <input type="text" value={ward} onChange={(e) => setWard(e.target.value)} name="ward" placeholder='Enter ward name or number' className='formEle' id="ward" />

          <label htmlFor="location">Location *</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} name="location" placeholder='Enter location' className='formEle' id="location" />

          <label htmlFor="category">Category</label>
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='formEle' id="category">
            <option value="" defaultChecked>Select a category</option>
            <option value="roads & infrastructure">Roads & Infrastructure</option>
            <option value="water supply">Water Supply</option>
            <option value="sanitation & wastage">Sanitation & Wastage</option>
            <option value="street lighting">Street Lighting</option>
            <option value="public safety">Public Safety</option>
            <option value="environment issues">Environment issues</option>
            <option value="noise pollution">Noise Pollution</option>
            <option value="others">Others</option>
          </select>
          <label htmlFor="description">Issue: *</label>
          <textarea name="description" value={issue} onChange={(e) => setIssue(e.target.value)} placeholder='Describe your issue' id="description" />

          <label htmlFor="image" >Image *</label>
          <input type='file' onChange={handleFileUpload} className='formEle' name='image' id='image' />

          <div className="btnsContainer">
            <input type="submit" value={loading ? `Submitting..` : `Submit`} name="submitBtn" disabled={loading} id="submitBtn" />
          </div>

        </div>
      </form>

    </div>
  )

}
export default SubmitComplaints
