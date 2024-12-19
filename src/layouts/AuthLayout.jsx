import Header from '../components/Header'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default AuthLayout