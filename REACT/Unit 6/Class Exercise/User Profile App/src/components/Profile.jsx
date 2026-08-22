import React, { Component, useEffect, useState } from 'react';
import { User, Mail, Calendar, MapPin, BriefcaseBusiness  } from 'lucide-react';
import './Profile.css';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';

function Profile(props) {

    const { data } = props;
    const [user, setUser] = useState(null);
    const [isLoading , setisLoading] = useState(true);
    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        let userDetails = data.find((e) => e.id == id );
        console.log(userDetails);

        if(userDetails){
            console.log(`details updated`)
            setUser(userDetails);
        }
        const fakeLoading = setTimeout(function(){
            setisLoading(false);
        },2000);


        return ()=>{
            clearTimeout(fakeLoading);
        }
    }, [id]);

    // console.log("users",user)

    return (
        <div>
            {isLoading && <Loading/>  }

            {(!(isLoading) && user) ? 
            <div className="profileDetails">
    
                <User strokeWidth={1.25} size={50} />
                <h3>{user.name}</h3>
                <p> <Mail /> <span className="email">{user.email} </span></p>
                <p> <Calendar /><span className="age"></span>Age:{user.age}</p>
                <p> <MapPin /> <span className="address"> {user.address}</span></p>
                <p> <BriefcaseBusiness /> <span className="role"> {user.role}</span></p>
                <button className="goBackBtn" onClick={()=>navigate('/')}>Go Back</button>

            </div> : <div className="profileDetails"> <p>User Not Found</p> </div>}




        </div>
    )
}


export default Profile
