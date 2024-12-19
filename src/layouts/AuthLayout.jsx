import { useAuth } from '../context/AuthProvider';
import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react';

const AuthLayout = () => {
  const {token} = useAuth();
  const navigate = useNavigate();
    useEffect(() => {
      if(token) {
        navigate('/task');
      }
    },[]);
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default AuthLayout