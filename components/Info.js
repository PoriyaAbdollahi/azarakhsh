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
    <section className="hero md:py-24" >
      <div className="hero-content p-0 flex-col lg:flex-row-reverse items-center flex justify-center m-auto ">
        <div className=' w-96 flex items-center justify-center mx-auto'>
          <Lottie
            options={robot}
            width={900}
          />
        </div >
        <div className='w-96 text-center min-w-[150px]'>
          <TypeAnimation
            sequence={[' سایتت رو به سرعت آذرخش  تحویل بگیر',8000,'']}
            speed={49}
            wrapper="h1"
            repeat={Infinity}
            className="text-4xl font-bold text-accent "
          />
          <p className="py-6 text-accent ">تیم ما از بهترین برنامه نویسان و طراحان وب سایت<br></br> تشکیل شده </p>
          <a href='#order' className="btn btn-primary"><Pencil /> ثبت سفارش   </a>
            </div>
        </div>
</section>
  )
}

export default Info