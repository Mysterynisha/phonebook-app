import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {createphonebook} from './Store/Slice'
import { Navigate, useNavigate } from 'react-router-dom'
const Input = () => {
            const dispatch=useDispatch()
        let Name=useRef()
        let Email=useRef()
        let Mob=useRef()
        let Altmob=useRef()
        let Group=useRef()
        const Navigate=useNavigate()
        function handle(e)
        {
            e.preventDefault()
            const obj={

                name:Name.current.value,
                email:Email.current.value,
                 mobile:Mob.current.value,
                 altmob:Altmob.current.value,
                 groups:Group.current.value

            }
            console.log(obj);
            dispatch(createphonebook(obj))
            
          
          Email.current.value="";
              Name.current.value="";
              Mob.current.value="";
              Altmob.current.value="";
              Group.current.value="";

              Navigate('/')
        }
  return (
        <form className='container md:w-2/5  h-auto m-auto w-full'>
    <div  >
        <div className='flex flex-col gap-1' >
            <label>Name:</label>
            <input type='text' placeholder='Enter Name' ref={Name} />
        </div>

        <div className='flex flex-col gap-1'>
            <label>Email:</label>
            <input type='text' placeholder='Enter Email' ref={Email}/>
        </div>

        <div className='flex flex-col gap-1'>
            <label>Mobile:</label>
            <input type='text' placeholder='Enter Mobile no. ' ref={Mob}/>
        </div>

        <div className='flex flex-col gap-1'>
            <label>Alternate mobile:</label>
            <input type='text' placeholder='Enter alternate mobile no.' ref={Altmob}/>
        </div>

        <div className='flex flex-col gap-1'>
                 <label>Group:</label>
                 <select name="group" placeholder="select group " className='border-2 border-slate-800 text-lg font-normal p-1 px-2 rounded-md'ref={Group}>
                      <option value="">Select...</option>
                      <option value="family">Family</option>
                      <option value="friends">Friend</option>
                      <option value="school">School</option>
                      <option value="company">Company</option>
                      <option value="others">Other</option>
                     
                  </select>
               </div>
           
           <button onClick={handle} className='btn'>Create</button>
       
        
    </div>
    </form>
  )
}

export default Input