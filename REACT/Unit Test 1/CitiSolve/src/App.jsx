import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import SubmitComplaints from './pages/SubmitComplaints';
import MyComplains from './pages/MyComplains';
import Home from './pages/Home';
import UserProvider from './pages/UserProvider';
import ProtectedRoute from './pages/ProtectedRoute';
import Loader from './components/Loader';
const AdminDashboard = lazy(()=> import('./pages/AdminDashboard'))


function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/submit-complaint' element={<ProtectedRoute> <SubmitComplaints /> </ProtectedRoute>} />
            <Route path='/my-complaint' element={<ProtectedRoute> <MyComplains /> </ProtectedRoute>} />
            <Route path='/admin-dashboard' element={
              <Suspense fallback={<Loader/>}><AdminDashboard/></Suspense>              
             } />
          </Routes>
        </UserProvider>
      </BrowserRouter>

    </>


  )
}

export default App
