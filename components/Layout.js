import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
const Layout = ({ children }) => {

  return (
    <div dir="rtl" data-theme="sky" className='font-vazir' >
        <Navbar/>
        { children }
        <Footer/>
    </div>
  )
}

export default Layout