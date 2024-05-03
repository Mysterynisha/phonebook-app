import React from 'react'
import Navbar from './Component/Navbar.js'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <Navbar/>
        
        {<Outlet/>}
    </div>
  )
}

export default Layout