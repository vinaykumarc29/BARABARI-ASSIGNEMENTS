import React, { useEffect, useState } from 'react';
import './MyComplaints.css';
import useFetch from '../hooks/useFetch';
import { data } from 'react-router-dom';
import Loader from '../components/Loader';

function MyComplains() {

  const { logout, isAuth, setIsAuth } = useFetch();
  const [complaints, setComplaints] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const URL = `https://citisolve-smarter-complaint-resolution.onrender.com/api`;
  const token = localStorage.getItem('token');




  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/complaints`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || `Something Went wrong !!`);
      }

      setComplaints(data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  const filteredComplaints = filter ==`all` ? complaints : complaints.filter((comp)=>comp.status == filter);

  useEffect(() => {
    fetchComplaints();
  }, []);





  return (
    <div className='complaintsContainer'>
      <h1>My Complaints</h1>
      <p>Track the status of your complaints</p>
      <select name="status" id="status" value={filter} onChange={(e) => {
        setFilter(e.target.value);


      }} className="status">
        <option value="all">All issues</option>
        <option value="Open">Open</option>
        <option value="In Progress">In progress</option>
        <option value="Resolved">Resolved</option>
      </select>

      <div className="complaintCardsContainer">

        {loading ? <Loader/> : filteredComplaints ? filteredComplaints.length == 0 ? <h1> No Complaints Found !!</h1> : <>

          {filteredComplaints.map((complaint) => {

            return <div className="complaintCard" key={complaint._id}>
              <p className="complaintId">{(complaint._id).slice(0, 5)}</p>
              <p className="complaintStatus"> {complaint.status} </p>
              <hr />
              <h3 id='name'>{complaint.user.name}</h3>
              <p>Ward :<span id="wardno">{complaint.ward}</span></p>
              <p>Location :<span id="location">{complaint.location}</span></p>
              <p>Category :<span id="category">{complaint.category}</span></p>
              <p>submitted :<span id="submitted">{complaint.createdAt}</span></p>
              <p>Description :<span id="description">{complaint.description}</span></p>
            </div>
          })}

        </> : <Loader/>}




      </div>
    </div>
  )
}

export default MyComplains
