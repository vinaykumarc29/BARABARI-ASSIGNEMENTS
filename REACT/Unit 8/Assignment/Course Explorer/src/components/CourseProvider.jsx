import React, { useEffect, useState } from 'react'
import CourseContext from '../contexts/CourseContext';

function CourseProvider(props) {

    const [data , setData] = useState(null);
    const {children} = props ;
    // const [isLoading , setIsLoading] = useState(false); 
    const [ errorMsg ,setErrorMsg] = useState('');

    useEffect(()=>{

        const fetchData = async()=>{

            try{
                // setIsLoading(true);
                const response = await fetch('/courses.json');
                const structuredData = await response.json();
                console.log(`data is stored!!`);
                console.log(structuredData);
                setData(structuredData);
            }catch(error){
                setErrorMsg(error.message);
            }

        }

        fetchData();




    },[]);


  return (
    <>
    <CourseContext.Provider  value={{data:data , errorMsg:errorMsg }}>
            {children}
    </CourseContext.Provider>
    </>
    
  )
}

export default CourseProvider
