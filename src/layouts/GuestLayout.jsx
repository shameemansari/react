import { useAuth } from '../context/AuthProvider'
import Header from '../components/Header'
import { Navigate, Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast';

const GuestLayout = () => {
  const {token} = useAuth();
  if(token) {
    return <Navigate to="/task" replace />
  }
  return (
    <>
      <Toaster />
      <Header/>
      <Outlet/>
    </>
  )
}

export default GuestLayout