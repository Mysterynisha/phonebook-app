import React, { useEffect } from 'react'
import Input from './Component/Input'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Component/Home'
import './App.css'
import View from './Component/View'
import Favourite from './Component/Favourite'
import Layout from './Layout'
import { useDispatch } from 'react-redux'
import {getphonebook} from './Component/Store/Slice.js'


const App = () => {
    const dispatch= useDispatch()
  
   useEffect(()=>{
         dispatch(getphonebook())
   },[])

  return (
    <div>
     <BrowserRouter>
     
     <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
       <Route path='/input' element={<Input/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
      </Route>
     </Routes>
     </BrowserRouter>

     

     
    </div>
  )
}

export default App