import React, { useEffect, useState } from "react";

function useFetchData() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    const getdata = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(URL);
        const data = await response.json();

        setUserData(data);
        console.log(`data successfully fetched`);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }finally{
        setIsLoading(false);
      }
    };

    getdata();
  }, []);

  return { data: userData, isLoading: isLoading, errorMsg: errorMsg };
}

export default useFetchData;
