import React from 'react'
import { useDispatch } from 'react-redux'
import { getviewphonebook } from './Store/Slice'
import { NavLink } from 'react-router-dom'
const Card = ({item}) => {
  let dispatch=useDispatch()
   
   function viewhandle(id)
   {
    dispatch(getviewphonebook(id))
   
   }

  return (
    <div className='container flex  items-center gap-3 md:w-2/5  h-32 border-4 w-full justify-around  bg-slate-600 text-white text-2xl font-bold rounded-3xl md:flex-wrap flex-wrap '>
        <div className=' border-2 border-slate-950 rounded-full p-2 bg-slate-800 lg:text-6xl md:text-4xl text-6xl  overflow-hidden'><label>🙍‍♀️</label></div>
        <label>{item.name}</label>
        <div className='flex gap-3'>
       <NavLink to={`/view/${item._id}`}>
        <button className='text-lg bg-slate-800 p-1 px-2 rounded-lg text-blue-500 hover:text-red-400' onClick={()=>{viewhandle(item._id)}}>View </button>
        </NavLink>
       
        <button>❤️</button>
        </div>
    </div>
  )
}

export default Card