import React, { useEffect, useState } from 'react'

function useFetch() {
  const [data, setdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const users = [{
    id: 1,
    name: 'VinayKumar',
    email: "vinaykumarc204@gmail.com",
    age: 19,
    address: "Hyderabad",
    role: "Backend Intern"
  },
  {
    id: 2,
    name: 'Rohit',
    email: "rohit@gmail.com",
    age: 21,
    address: "Hyderabad",
    role: "Team Lead"
  },
  {
    id: 3,
    name: 'Arjun',
    email: "Arjun@gmail.com",
    age: 20,
    address: "Hyderabad",
    role: "Frontend Intern"
  }]

  useEffect(() => {

    const timer = setTimeout(() => {
      console.log(users);
      setdata(users);
      setIsLoading(false);
    }, 3000);


    return ()=> clearTimeout(timer);
  }, []);


  return { data, isLoading };

}

export default useFetch
