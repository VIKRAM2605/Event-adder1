import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import BoyIcon from '@mui/icons-material/Boy';
import EventIcon from '@mui/icons-material/Event';
function Navbar() {
    const navigate=useNavigate()
  return (
    <div>
        <nav className="bg-blue-500 h-13 w-full p-4 ">
            <ol className='flex justify-center text-white text-[18px] gap-40 items-center h-full'>
                <Link to='/Event-adder1/'>
                <li className='flex gap-x-1'><HomeIcon/> Dashboard</li>
                </Link>
                <Link to='/Event-adder1/add-event'>
                <li className='gap-x-1 flex'><EventIcon className='relative top-0.5'/>Add-Event</li>
                </Link>
                <Link to='/Event-adder1/add-participant'>
                <li className=''><BoyIcon fontSize='large'/><span className='relative top-1'>Add-Participant</span></li>
                </Link>
            </ol>
            
        </nav>
    </div>
  )
}

export default Navbar