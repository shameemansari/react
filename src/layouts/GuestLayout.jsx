import Header from '../components/Header'
import { Outlet } from 'react-router'

const GuestLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default GuestLayout