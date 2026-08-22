import React, { useMemo, useState } from 'react';
import useFetchData from '../api/api'
import UserCards from './UserCards';
import './UserList.css';

function UserList() {

  const { data, isLoading, errorMsg } = useFetchData();
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
      if(!data)return [];

        return data.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());
        })
      
    
  }, [data, search]);

  return (
    <div>
      <div className="container">
        <h1>User Dashboard</h1>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search name' name="searchBar" id="searchBar" />

        <div className="cardsContainer">
          {isLoading ? <div>Loading...</div> : errorMsg ? <div>{errorMsg}/</div> : filteredUsers.length ==0 ? <div><h1>No users Found</h1></div> :  filteredUsers.map((card) => {
            return <UserCards key={card.id} name={card.name} email={card.email} />
          })}


        </div>


      </div>
    </div>
  )
}

export default UserList
