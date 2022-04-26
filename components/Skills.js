import React from 'react'
import SkillsIcon1 from './Icons/SkillsIcon1'
import SkillsIcon2 from './Icons/SkillsIcon2'
import SkillsIcon3 from './Icons/SkillsIcon3'

const Skills = () => {
  return (
    <section>
        <h2 className='text-center font-medium leading-tight text-4xl mt-0 mb-2'>مهارت های تیم آذرخش</h2>
        <div className='flex flex-col items-center justify-center md:flex-row'>
            <div class="card w-96 bg-base-100 shadow-xl flex items-center justify-center m-10" >
            <SkillsIcon1/>
                <div class="card-body text-center">
                    <p>طراحی رابط کاربری و تجربه کاربری </p>
                    <p>(Figma)</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl flex items-center justify-center m-10" >
            <SkillsIcon2/>
                <div class="card-body text-center">
                    <p>توسعه و طراحی بک اند </p>
                    <p>( laravel , node js , Flask )</p>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl flex items-center justify-center m-10" >
            <SkillsIcon3/>
                <div class="card-body text-center">
                    <p>طراحی و توسعه فرانت اند</p>
                    <p>( React , Gatsby , Next , tailwind )</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills