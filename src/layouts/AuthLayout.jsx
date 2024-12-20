import { useAuth } from '../context/AuthProvider';
import Header from '../components/Header'
import { Navigate, Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
  const {token} = useAuth();
  if(token == null || !token) {
    return <Navigate to="/" replace />
  }
    
  return (
    <>
      <Toaster />
      <Header/>
      <Outlet/>
    </>
  )
}

export default AuthLayout