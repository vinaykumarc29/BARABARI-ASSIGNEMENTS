import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import AuthProvider from './components/AuthProvider';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<RequireAuth> <Dashboard/> </RequireAuth>} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
