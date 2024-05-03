import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from './Store/Slice'
const Filter = () => {
     const dispatch=useDispatch()
       function changeValue(e)
       {
         const data=(e.target.value);  
         console.log(data);
         dispatch( filterAction(data))
       }
  return (
    <div className=' container flex border-4 justify-between p-4 bg-slate-800 text-2xl text-slate-50 m-auto'>
        <div>
            <input type='radio' name='group' value='All' className='mx-4' onChange={changeValue}/>
            <label>All</label>
        </div>

        <div>
            <input type='radio' name='group' value='school' className='mx-4' onChange={changeValue}/>
            <label>School</label>
        </div>

        <div>
            <input type='radio' name='group' value='company' className='mx-4' onChange={changeValue}/>
            <label>Company</label>
        </div>

        <div>
            <input type='radio' name='group' value='friends' className='mx-4' onChange={changeValue}/>
            <label>Friend</label>
        </div>


        <div>
            <input type='radio' name='group' value='family' className='mx-4' onChange={changeValue}/>
            <label>Family</label>
        </div>

        <div>
            <input type='radio' name='group' value='others' className='mx-4' onChange={changeValue}/>
            <label>Other</label>
        </div>


    </div>
  )
}

export default Filter