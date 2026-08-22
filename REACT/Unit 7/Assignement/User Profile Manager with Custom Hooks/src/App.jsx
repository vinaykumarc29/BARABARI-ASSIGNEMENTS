import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import UserProvider from './components/UserProvider';
import PageNotFound from './components/PageNotFound';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>  
    },
    {
      path:"/profile/:id",
      element:<Profile/>
    },
    {
      path:'*',
      element:<PageNotFound/>

    }

  ]);

  return (
    <>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
    

    </>
  )
}

export default App
