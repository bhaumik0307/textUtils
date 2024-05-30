import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-full'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
