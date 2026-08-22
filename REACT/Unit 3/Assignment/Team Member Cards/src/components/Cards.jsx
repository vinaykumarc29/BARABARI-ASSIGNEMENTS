import React from 'react';
import './Cards.css'

function Cards(props) {

    let { teamMembers, updateStatus } = props;
    return (
        <div>
            {teamMembers.map((mem) => {
                return <div className="cardContainer" key={mem.id}>
                    <h2 className="memberName">{mem.name}</h2>
                    <p>Role: <span className="role">{mem.role}</span></p>
                    <p>Status: <span className="status"> {mem.isAvailable ? ` ✅ Available` : `❌ Not Available`} </span></p>
                    <button className="toogleAvailabilityBtn" onClick={() => {
                        updateStatus(mem.id);
                    }}>Toggle Availability</button>
                </div>
            })}


            {/* <div className="cardContainer">
            <h2 className="memberName">Vinay</h2>
            <p>Role: <span className="role"> Backend Intern</span></p>
            <p>Status: <span className="status">✅ Available</span></p>
            <button className="toogleAvailabilityBtn">Toggle Availability</button>
        </div>

         <div className="cardContainer">
            <h2 className="memberName">Vinay</h2>
            <p>Role: <span className="role"> Backend Intern</span></p>
            <p>Status: <span className="status">✅ Available</span></p>
            <button className="toogleAvailabilityBtn">Toggle Availability</button>
        </div> */}

        </div>
    )
}

export default Cards
