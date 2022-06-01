import React from 'react'
import Circleicon from '../Icons/Circleicon'
import Image from 'next/image'
import { useState } from 'react'
const Sample = ({ text, color, path, href, alt, des , borderColor}) => {
 
  return (
      <a  href={href} className="card w-196 bg-secondary shadow-xl  flex m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-accent  hover:text-accent hover:z-20 duration-300"  >
          <h3 className='mx-5 my-2 z-20'  ><b>{text}</b></h3>
          <p className='top-0 p-1  text-white  text-center px-2  z-0 overflow-hidden' >{des}</p>
          <Circleicon color={color} />
          <div className='ml-10 mb-2  mr-2 '>
              <div className={` z-0  w-64  border-2 ${borderColor} rounded-lg  `}>
             <Image src={path} alt={alt} width="256" height="150" layout='responsive' />
            </div>
          </div>
            
          
         
            </a>
  )
}

export default Sample   