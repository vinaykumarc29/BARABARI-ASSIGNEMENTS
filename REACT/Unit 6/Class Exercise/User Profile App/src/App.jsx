import { useState } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';


function App() {


    const data =[
    {
      id:1,
      name:'VinayKumar',
      email:"vinaykumarc204@gmail.com",
      age:19,
      address:"Hyderabad",
      role:"Backend Intern"
    },
    {
      id:2,
      name:'Rohit',
      email:"rohit@gmail.com",
      age:21,
      address:"Hyderabad",
      role:"Team Lead"
    },
    {
      id:3,
      name:'Arjun',
      email:"Arjun@gmail.com",
      age:20,
      address:"Hyderabad",
      role:"Frontend Intern"
    },
  ]

  const router = createBrowserRouter([
    {path:"/",
      element:<Home data={data}/>
    },
    {path:"user/:id",
      element:<Profile data={data}/>
    },
    {path:'*',
      element:<PageNotFound/>
    }
  ])



  return (
   <>

    <RouterProvider router={router} />
   


   
   </>
  )
}

export default App
