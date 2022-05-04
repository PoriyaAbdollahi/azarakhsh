import React from 'react'
import Image from 'next/image'
import MailIcon from './Icons/MailIcon'
import PhoneIcon from './Icons/PhoneIcon'
import GithubIcon from './Icons/GithubIcon'
import InstagramIcon from './Icons/InstagramIcon'

const Footer = () => {
  return (
    <footer className='relative mt-60 text-accent'>
      <div className='md:pb-48'>
      <h2 className=" text-center mb-5">ارتباط با ما</h2>
        <div className='flex justify-center gap-10 '>
        <MailIcon/>
        <PhoneIcon/>
        <GithubIcon/>
        <InstagramIcon/>
        </div>
      </div>
     
        {/* <svg className="md:absolute lg:h-[320px] bottom-0 w-full"xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1000 320" fill="none">
        <path  d="M-183 330L-125.7 288.8C-68.4 247.6 46.2 165.2 160.8 165.2C275.4 165.2 390 247.6 504.6 247.6C619.2 247.6 733.8 165.2 848.4 151.552C963 136.875 1077.6 193.525 1192.2 178.847C1306.8 165.2 1421.4 82.8 1478.7 41.6L1536 0.400024V330H1478.7C1421.4 330 1306.8 330 1192.2 330C1077.6 330 963 330 848.4 330C733.8 330 619.2 330 504.6 330C390 330 275.4 330 160.8 330C46.2 330 -68.4 330 -125.7 330H-183Z" fill="#FDC206"/>
        </svg> */}
        <svg className="md:absolute lg:h-[620px] bottom-0 w-full "  viewBox="0 0 1300 620" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-168.315 681.912L-108.109 615.823C-47.9036 549.734 72.5078 417.555 192.919 417.555C313.331 417.555 433.742 549.734 554.153 549.734C674.565 549.734 794.976 417.555 915.387 395.663C1035.8 372.119 1156.21 462.991 1276.62 439.447C1397.03 417.555 1517.44 285.376 1577.65 219.287L1637.86 153.198V681.912H1577.65C1517.44 681.912 1397.03 681.912 1276.62 681.912C1156.21 681.912 1035.8 681.912 915.387 681.912C794.976 681.912 674.565 681.912 554.153 681.912C433.742 681.912 313.331 681.912 192.919 681.912C72.5078 681.912 -47.9036 681.912 -108.109 681.912H-168.315Z" fill="#FDC206"/>
<g filter="url(#filter0_b_255_476)">
<path d="M166.938 663.405L231.884 426.056C232.057 425.422 231.52 424.714 230.833 424.67L68.841 414.336C68.2189 414.296 67.7022 413.704 67.7624 413.099L107.973 9.31282L-0.79624 447.571C-0.95053 448.193 -0.432187 448.877 0.237267 448.935L179.219 464.422C179.872 464.479 180.386 465.132 180.261 465.748L135.794 685.66L114.746 853.85L155.455 699.798L166.938 663.405Z" fill="white"/>
<path d="M166.938 663.405L231.884 426.056C232.057 425.422 231.52 424.714 230.833 424.67L68.841 414.336C68.2189 414.296 67.7022 413.704 67.7624 413.099L107.973 9.31282L-0.79624 447.571C-0.95053 448.193 -0.432187 448.877 0.237267 448.935L179.219 464.422C179.872 464.479 180.386 465.132 180.261 465.748L135.794 685.66L114.746 853.85L155.455 699.798L166.938 663.405Z" stroke="#050207" stroke-width="7"/>
</g>
<defs>
<filter id="filter0_b_255_476" x="-8.33008" y="4.02319" width="247.754" height="855.161" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_255_476"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_255_476" result="shape"/>
</filter>
</defs>
</svg>

    </footer>
  )
}

export default Footer