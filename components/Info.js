import React from 'react'
import Itguyicon from './Icons/Itguyicon'
import Lottie from 'react-lottie';
import animationPath from '../animation/DdmYG8H7P9.json'
import Pencil from './Icons/Pencil';
import { TypeAnimation } from 'react-type-animation';
const Info = () => {
  const robot = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <section className="hero min-h-screen" >
      <div className="hero-content flex-col lg:flex-row-reverse items-center flex justify-center ">
        {/* <Itguyicon  className="max-w-sm" /> */}
        <div className=' w-96 md:w-3/6 flex items-center justify-center'>
          <Lottie
            options={robot}
            width={900}
          />
        </div >
        <div className='w-96 md:w-full text-center '>
          <TypeAnimation
            sequence={[' سایتت رو به سرعت آذرخش  تحویل بگیر',8000,'']}
            speed={49}
            wrapper="h1"
            repeat={Infinity}
            className="text-4xl font-bold text-accent "
          />
                <p className="py-6 text-accent">تیم ما از بهترین برنامه نویسان و طراحان وب سایت تشکیل شده </p>
          <a href='#order' className="btn btn-primary"><Pencil /> ثبت سفارش   </a>
            </div>
        </div>
</section>
  )
}

export default Info