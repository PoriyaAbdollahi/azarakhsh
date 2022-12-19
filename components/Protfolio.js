import React ,{useState}from 'react'
import SkillsIcon1 from './Icons/SkillsIcon1'
import Circleicon from './Icons/Circleicon'
import Sample from './template/Sample'
const Protfolio = () => {
const [hideItems , setHideItems] = useState(false)
  const onMoreClicked = () =>{
    setHideItems(true)
  }

  return (
    <section className='mt-60 text-accent ' id='portfolio'>
        <h2 className='text-center font-medium leading-tight text-4xl mt-0 mb-2'>نمونه کار ها</h2>
      <div className='flex flex-col items-center justify-center md:flex-row'>

       

        <Sample
          text="سایت شخصی"
          color="yellow"
          path="/poriyaabdollahi.png"
          alt="پوریا عبدالهی"
          des="طراحی و پیاده سازی سایت  شخصی"
          href="https://poriyaabdollahi.ir"
          borderColor="border-black"
        />

       
        <Sample
          text="منو رستوران"
          color="purple"
          path="/emaratmasoud.png"
          alt="emaratmasoud"
          des="منو رستوران مسعود"
          href="https://emarat-eight.vercel.app"
        />
      
      </div>
      
         <div className='flex flex-col items-center justify-center md:flex-row'>
        
       
        <Sample
          text="Learn ECL"
          color="red"
          path="/learnecl.png"
          alt="Learn ECL"
          des="سایت داکیومتنشن"
          href="https://learn.hpccsystems.com/"

        />
         
        <Sample
          text="FCSHOP"
          color="gray"
          path="/FCSHOP.png"
          alt="FCSHOP"
          des="سایت فروشگاهی"
          href="https://poriyaabdollahi.github.io/FCSHOP"
        />
      
      
        </div>
    

    </section>
  )
}

export default Protfolio