import React from 'react'
import Logo from './Icons/logo'

const Navbar = () => {
  return (
    <nav >
        <div class="navbar bg-secondary">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 7H19" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5 12H19" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5 17H19" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2  bg-secondary text-accent w-52  " >
                        <li><a href='#aboutus'>درباره ما</a></li>
                        <li><a href='#portfolio'>نمونه کارها</a></li>
                        <li><a href='#skills'>مهارت ها</a></li>
                        <li><a href='#contactus'>تماس با ما</a></li>
                </ul>
                </div>

            <div class="navbar-start">
                <a href='/' class="btn btn-ghost normal-case text-xl">
                    <Logo/>
                </a>
            </div>

            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-neutral text-xl">
                        <li><a href='#aboutus'>درباره ما</a></li>
                        <li><a href='#portfolio'>نمونه کارها</a></li>
                        <li><a href='#skills'>مهارت ها</a></li>
                        <li><a href='#contactus' class="btn-primary text-secondary ">تماس با ما</a></li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar