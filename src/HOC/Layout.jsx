import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import Footer from '../components/Navigation/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <div className=" fixed top-0 z-50 w-full"> <Navbar /></div>
       
        <main className=''>
            <Outlet/>
            </main>
            <Footer/>
    </div>
  )
}

export default Layout