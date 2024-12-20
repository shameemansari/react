import { useAuth } from '../context/AuthProvider'
import Header from '../components/Header'
import { Navigate, Outlet } from 'react-router'

const GuestLayout = () => {
  const {token} = useAuth();
  if(token) {
    return <Navigate to="/task" replace />
  }
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default GuestLayout