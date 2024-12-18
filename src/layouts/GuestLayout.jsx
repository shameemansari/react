import { useAuth } from '../context/AuthProvider'
import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react';

const GuestLayout = () => {
  const {token} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(token) {
      navigate('/task');
    }
  }, [token]);
  
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default GuestLayout