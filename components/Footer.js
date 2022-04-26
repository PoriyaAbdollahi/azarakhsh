import React from 'react'
import Image from 'next/image'
import MailIcon from './Icons/MailIcon'
import PhoneIcon from './Icons/PhoneIcon'
import GithubIcon from './Icons/GithubIcon'
import InstagramIcon from './Icons/InstagramIcon'

const Footer = () => {
  return (
    <footer className='relative mt-60'>
      <h2 className="text-center mb-5">ارتباط با ما</h2>
        <div className='flex justify-center gap-10 '>
        <MailIcon/>
        <PhoneIcon/>
        <GithubIcon/>
        <InstagramIcon/>
        </div>
        <svg className="absolute top-0 w-full"xmlns="http://www.w3.org/2000/svg"  height="320" viewBox="0 0 1000 320" fill="none">
        <path  d="M-183 330L-125.7 288.8C-68.4 247.6 46.2 165.2 160.8 165.2C275.4 165.2 390 247.6 504.6 247.6C619.2 247.6 733.8 165.2 848.4 151.552C963 136.875 1077.6 193.525 1192.2 178.847C1306.8 165.2 1421.4 82.8 1478.7 41.6L1536 0.400024V330H1478.7C1421.4 330 1306.8 330 1192.2 330C1077.6 330 963 330 848.4 330C733.8 330 619.2 330 504.6 330C390 330 275.4 330 160.8 330C46.2 330 -68.4 330 -125.7 330H-183Z" fill="#4581F6"/>
        </svg>
    </footer>
  )
}

export default Footer