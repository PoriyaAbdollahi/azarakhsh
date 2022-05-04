import React from 'react'
import Itguyicon from './Icons/itguyicon'
const About = () => {
  return (
    <section class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <Itguyicon  className="max-w-sm" />
            <div>
                <h1 class="text-5xl font-bold text-accent"> سایتت رو به سرعت آذرخش تحویل بگیر</h1>
                <p class="py-6 text-accent">تیم ما از بهترین برنامه نویسان و طراحان وب سایت تشکیل شده </p>
                <button class="btn btn-primary">ثبت سفارش</button>
            </div>
        </div>
</section>
  )
}

export default About