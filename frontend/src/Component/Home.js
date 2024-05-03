import React from 'react'
import Card from './Card'
import Filter from './Filter.js'
import { useSelector } from 'react-redux'

const Home = () => {
        let obj=useSelector((state)=>state.contact)
       // console.log(obj);
  return (
    <div>
     
<Filter/>
      
    <div className=' flex items-center gap-2 flex-wrap justify-evenly'>
       {
        obj.filter && obj.filter.map((item)=>
        (<Card item={item}/>)
       )
       }
         
       
      
    </div>
    </div>
  )
}

export default Home