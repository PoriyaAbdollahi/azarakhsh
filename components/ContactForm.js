import React,{useState} from 'react'

const ContactUs = () => {
    const apiUrl = ""
    const [checkInputName,setCheckInputName] = useState("")
    const [checkInputFamilyName,setCheckInputFamilyName] = useState("")
    const [checkInputEmail,setCheckInputEmail] = useState("")
    const [checkInputText,setCheckInputText] = useState("")

    const  [errorElementFullname,seterrorElementFullname] = useState("")
    const  [errorElementEmail,seterrorElementEmail] = useState("")
    const  [errorElementText,seterrorElementText] = useState("")
    const  [succeedElement,setsucceedElementMessage] = useState("")

    const validationEmail = (email)=>{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                console.log("email is not valid")
                return false
        }else{
            return true
        }
       
    }
  
    const onSubmitForm = (e)=>{
        e.preventDefault()  
        let form = {fullname :"" , email:"", description:""}
        const firstname = checkInputName
        const lastname = checkInputFamilyName
        const email = checkInputEmail
        const text = checkInputText

        if((firstname || lastname )){
            form.fullname = firstname + " " +  lastname
            seterrorElementFullname("")
        }else{
            seterrorElementFullname(<p className='text-error'> لطفا نام خود را وارد کنید</p>)
        }
        console.log(email)
        if(validationEmail(email)){
            form.email = email
            seterrorElementEmail("")
        }else{
            seterrorElementEmail(<p className='text-error'> لطفا ایمیل خود را درست وارد کنید</p>)
        }

        if((text)){
            form.text= text
            seterrorElementText("")
        }else{
            succeedElementMessage(<p className='text-error text-center w-full'> لطفا توضیحات خود را وارد کنید</p>)
            
        }

        if(form.fullname && form.email && form.text){
            // send to api
            console.log("sdasd")
            setsucceedElementMessage(<p className='text-success'>ارسال شد !</p>)
        }
       
    }

  return (
      <section className='mt-20'>
            <h2 className='text-center text-accent text-lg'>با ما در تماس باشید</h2>
            <div className='flex justify-center p-10' >
                <form  className=" w-full lg:max-w-lg ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  " htmlFor="first-name">
                            نام
                        </label>
                        <input className= {`appearance-none block w-full bg-gray-200 text-gray-700 focus:border-b-2 ${checkInputName.length>0 ?  "focus:border-b-2 focus:border-primary":"border focus:border-red-400" }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-primary`  } id="first-name" type="text" placeholder="نوریه"   onChange={(e)=>setCheckInputName(e.target.value)} />
                        {errorElementFullname}
                        </div> 
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            نام خانوادگی
                        </label>
                        
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 focus:border-b-2 ${checkInputFamilyName.length>0 ?  "focus:border-b-2 focus:border-primary":"border focus:border-red-400" }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-primary`  } id="last-name" type="text" placeholder="صافی"  onChange={(e)=>setCheckInputFamilyName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm  font-bold mb-2" htmlFor="grid-password">
                            ایمیل
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 focus:border-b-2 ${checkInputEmail.length>0 ?  "focus:border-b-2 focus:border-primary":"border focus:border-red-400" }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-primary`  } id="email" type="text" placeholder="example@gmail.com"  onChange={(e)=>setCheckInputEmail(e.target.value)}/>
                        {errorElementEmail}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 justify-center" >
                            <textarea
                        className={`
                        
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-gray-500 bg-clip-padding
                            outline-none
                            rounded
                            transition
                            ease-in-out
                            m-2
                            focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
                            ${checkInputText.length>0 ?  "border-white":"border focus:border-red-400" }
                        `}
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="توضیحات"
                        onChange={(e)=>setCheckInputText(e.target.value)}></textarea>
                       
                       {errorElementText}
                       
                    <button onClick={(e)=>onSubmitForm(e)} className='btn btn-primary'>ارسال</button>
                    
                    </div>
                    {succeedElement}
                </form>    
            </div>
    </section>
  )
}

export default ContactUs