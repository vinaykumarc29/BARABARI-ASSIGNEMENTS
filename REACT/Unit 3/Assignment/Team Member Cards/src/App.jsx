import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {

  const data = [{
    id: 1,
    name: 'Vinay',
    role: 'Backend Intern',
    isAvailable: true,
  }, {
    id: 2,
    name: 'Rahul',
    role: 'Frontent Intern',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Rohit',
    role: 'Team Lead',
    isAvailable: true,
  }];

  const [teamMemberList, setteamMemberList] = useState(data);
  const [availabilityCount , setavailabilityCount] = useState(teamMemberList.length);

  const updateStatus = (id) => {

    let updatedTeamMeberInfo = teamMemberList.map((mem) => {
      if (mem.id === id) {
        return { ...mem, isAvailable : !(mem.isAvailable) }
      }
      return mem ;
    });
    setteamMemberList(updatedTeamMeberInfo);

    let availableTeamMembers = updatedTeamMeberInfo.filter((mem)=>{
      return mem.isAvailable == true;
    });
    console.log(availableTeamMembers);
    setavailabilityCount(availableTeamMembers.length);

  }


  return (
    <>
      <div className="container">
        <h1>Team Members</h1>
        <p>✅ Available: <span className="availableCount">{availabilityCount}</span></p>

        <Cards teamMembers={teamMemberList} updateStatus={updateStatus} />
      </div>
    </>
  )
}

export default App
