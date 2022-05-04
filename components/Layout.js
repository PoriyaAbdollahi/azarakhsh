import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CirclePattern from './Icons/CirclePattern'
const Layout = ({ children }) => {

  return (
    <div dir="rtl" data-theme="sky" className='font-vazir bg-secondary' >
      <CirclePattern/>
        <header>
        <Navbar/>
        </header>
        { children }
        <Footer/>
    </div>
  )
}

export default Layout