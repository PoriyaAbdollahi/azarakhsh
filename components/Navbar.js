import React from 'react'
import Logo from './Icons/Logo'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav >
        <div className="navbar bg-secondary">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 7H19" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 12H19" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 17H19" stroke="#CCD2E3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2  bg-secondary text-accent w-52  " >
                        <li><Link href='#aboutus'><a >درباره ما</a></Link></li>
                        <li><Link href='#portfolio'><a >نمونه کارها</a></Link></li>
                        <li><Link href='#skills'><a >مهارت ها</a></Link></li>
                        <li><Link href='#contactus'><a >تماس با ما</a></Link></li>
                </ul>
                </div>

              <div className="navbar-start">
                  <Link href='/' >
                <a className=" btn-ghost normal-case text-xl">
                    <Logo/>
                      </a>
                      </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-neutral text-xl">
                        <li><Link href='#aboutus'><a >درباره ما</a></Link></li>
                        <li><Link href='#portfolio'><a >نمونه کارها</a></Link></li>
                        <li><Link href='#skills'><a >مهارت ها</a></Link></li>
                        <li><Link href='#contactus'><a  className="btn-primary text-secondary ">تماس با ما</a></Link></li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar