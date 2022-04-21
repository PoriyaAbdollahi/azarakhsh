import React from 'react'

const Navbar = () => {
  return (
    <navbar>
        <div class="navbar bg-base-100">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 7H19" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5 12H19" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                        <path d="M5 17H19" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2  bg-base-100 w-52">
                        <li><a>درباره ما</a></li>
                        <li><a>ثبت سفارش</a></li>
                        <li><a>نمونه کارها</a></li>
                        <li><a>مهارت ها</a></li>
                </ul>
                </div>


            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl">آذرخش</a>
            </div>

            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                        <li><a>درباره ما</a></li>
                        <li><a>ثبت سفارش</a></li>
                        <li><a>نمونه کارها</a></li>
                        <li><a>مهارت ها</a></li>
                        <li><a class="btn bg-primary hover:bg-sky-700">تماس با ما</a></li>
                </ul>
            </div>

        </div>
    </navbar>
  )
}

export default Navbar