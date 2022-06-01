import React from 'react'
import Itguyicon from './Icons/Itguyicon'
const Info = () => {
  return (
    <section className="hero min-h-screen" >
        <div className="hero-content flex-col lg:flex-row-reverse">
            <Itguyicon  className="max-w-sm" />
            <div>
                <h1 className="text-5xl font-bold text-accent"> سایتت رو به سرعت آذرخش تحویل بگیر</h1>
                <p className="py-6 text-accent">تیم ما از بهترین برنامه نویسان و طراحان وب سایت تشکیل شده </p>
                <button className="btn btn-primary">ثبت سفارش</button>
            </div>
        </div>
</section>
  )
}

export default Info