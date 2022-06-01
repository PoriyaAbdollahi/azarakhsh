import React from 'react'
import TeamIcon from './Icons/TeamIcon'
const AboutUs = () => {
  return (
    <section className='mt-10 pb-20' id='aboutus'>
        <div className="hero-content flex-col flex mt-30 ">
            <TeamIcon  className="max-w-sm md:max-w-lg" />
           
                <h2 className="text-2xl   font-bold text-center -mt-20 text-accent"> ما دوستانی هستیم با اهداف مشابه که در کنار یکدگیر یاد گرفتیم چجوری  مسائل دشوار رو به آسانی وسرعت 
حل کنیم </h2>
        </div>
    </section>
  )
}

export default AboutUs