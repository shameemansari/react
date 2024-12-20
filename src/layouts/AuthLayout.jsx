import { useAuth } from '../context/AuthProvider';
import Header from '../components/Header'
import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {
  const {token} = useAuth();
  if(token == null || !token) {
    return <Navigate to="/" replace />
  }
    
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default AuthLayout