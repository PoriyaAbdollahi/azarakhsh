import React ,{useState}from 'react'
import SkillsIcon1 from './Icons/SkillsIcon1'
import Circleicon from './Icons/Circleicon'
const Protfolio = () => {
const [hideItems , setHideItems] = useState(false)
  const onMoreClicked = () =>{
    setHideItems(true)
  }

  return (
    <section className='mt-60 text-accent ' id='portfolio'>
        <h2 className='text-center font-medium leading-tight text-4xl mt-0 mb-2'>نمونه کار ها</h2>
        <div className='flex flex-col items-center justify-center md:flex-row'>
            <div className="card w-196 bg-secondary shadow-xl flex m-10 " >
            <h3 className='mx-5 my-2'>نمونه 1</h3>
            <Circleicon color="red"/>
            <img className='z-10 pl-10' src="projectexample.png" />
            </div>
            <div className="card w-196 bg-secondary shadow-xl flex m-10" >
            <h3 className='mx-5 my-2'>نمونه 2</h3>
            <Circleicon color="blue"/>
            <img className='z-10 pl-10' src="projectexample.png" />
            </div>
            <div className="card w-196 bg-secondary shadow-xl flex m-10" >
            <h3 className='mx-5 my-2'>نمونه 3</h3>
            <Circleicon color="green"/>
            <img className='z-10 pl-10' src="projectexample.png" />
            </div>
           
            
        </div>
          {hideItems? <div className='flex flex-col items-center justify-center md:flex-row' >
             <div className="card w-196 bg-secondary shadow-xl flex m-10 " >
             <h3 className='mx-5 my-2'>نمونه 1</h3>
             <Circleicon color="red"/>
             <img className='z-10 pl-10' src="projectexample.png" />
             </div>
             <div className="card w-196 bg-secondary shadow-xl flex m-10" >
             <h3 className='mx-5 my-2'>نمونه 2</h3>
             <Circleicon color="blue"/>
             <img className='z-10 pl-10' src="projectexample.png" />
             </div>
             <div className="card w-196 bg-secondary shadow-xl flex m-10" >
             <h3 className='mx-5 my-2'>نمونه 3</h3>
             <Circleicon color="green"/>
             <img className='z-10 pl-10' src="projectexample.png" />
             </div>
           
            
        </div>:""}
        
        <div className='justify-center flex items-center'>
        {!hideItems ? <button onClick={()=>onMoreClicked()} className='btn btn-primary' >بیشتر</button> : ""}
        </div>

    </section>
  )
}

export default Protfolio