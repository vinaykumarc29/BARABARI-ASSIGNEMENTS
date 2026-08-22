import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { User, Mail, Calendar, MapPin, BriefcaseBusiness } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const userContext = useContext(UserContext);
  // console.log(userContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    // console.log(`useEffect started`);

    if (!(userContext.isLoading)) {

      console.log(`user details came ${userContext.data}`);
      let userDetails = userContext.data.find((user) => user.id == id);

      setUser(userDetails);
      // console.log(`user updated`,userDetails);
    }
  }, [id, userContext.isLoading, userContext.data]);


  return (
<>
      {user ? <div className="profileDetails">
        <User strokeWidth={1.25} size={50} />
        <h3>{user.name}</h3>
        <p> <Mail /> <span className="email">{user.email} </span></p>
        <p> <Calendar /><span className="age"></span>Age:{user.age}</p>
        <p> <MapPin /> <span className="address"> {user.address}</span></p>
        <p> <BriefcaseBusiness /> <span className="role"> {user.role}</span></p>
        <button className="goBackBtn" onClick={() => navigate('/')}>Go Back</button>
        </div>: <div className="loadingContainer">
        <h1>Loading...</h1>
      </div>
       
      }
</>

  )
}

export default Profile
