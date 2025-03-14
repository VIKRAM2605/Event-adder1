import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home'
import Addevent from '../pages/add-event/Addevent'
import Adduser from '../pages/adduser/Adduser'

function Applayout() {
  return (
    <div className='flex flex-col gap-5'>
        <Navbar/>
        <Routes>
            <Route path="/Event-adder1/"  element={<Home/>} />
            <Route path="/Event-adder1/add-event" element={<Addevent/>}/>
            <Route path='/Event-adder1/add-participant' element={<Adduser/>}/>
        </Routes>
    </div>
  )
}

export default Applayout