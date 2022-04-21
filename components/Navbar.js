import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">آذرخش</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a>درباره ما</a></li>
                <li><a>ثبت سفارش</a></li>
                <li><a>نمونه کارها</a></li>
                <li><a>مهارت ها</a></li>
                <li>
                    <a className="btn bg-primary hover:bg-sky-700">تماس با ما</a>
                </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar