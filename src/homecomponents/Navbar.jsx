import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faQrcode, faTags } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Navbar(){
   
    const [Shownavbar,setnavbar]=useState(false)

    return (

      <div className='xl:h-[100px] lg:h-[55px] w-full px-2 py-3 flex justify-around overflow-hidden'>
        <div className='flex w-fit place-items-center'>
         <img className='lg:h-[45px] xl:h-[65px] scale-100' src={logo} alt=''/>
        </div>
        <div className="flex space-x-20 font-bold place-items-center text-grey">
        <Link to="/">
        <button className="font-extrabold h-fit font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500">Home</button>
        </Link>
        <Link to="/Products">
        <button className="flex flex-row font-extrabold place-items-center font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500" onClick={()=>setnavbar(!Shownavbar)}>
        <p className='font-extrabold font-Inter'>Products</p>
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
         </svg>
        </button>
        </Link>
        <Link to="/Industries">
        <button className="px-3 py-2 font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500 rounded-xl">Industries</button>
        </Link>
        <Link to="/ClientPortfolio">
        <button className="px-3 py-2 font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500 rounded-xl">Client Portfolio</button>
        </Link>
        <Link to="/Aboutus">
        <button className="px-3 py-2 font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500 rounded-xl">About-us</button>
        </Link>
        <Link to="/Contactus">
        <button className="px-3 py-2 font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500 rounded-xl">Contact-us</button>
        </Link>
        </div>

      <div className={`${Shownavbar?'block':'hidden'} flex flex-col absolute lg:top-20 xl:top-36 lg:left-[20%] xl:left-[49%] rounded-lg p-2 space-y-6`}>
      <div className='px-3 py-2 rounded-md'>
       <FontAwesomeIcon icon={faQrcode} size='xl' /> 
      </div>
      <div className='px-3 py-2 rounded-md'>
      <FontAwesomeIcon icon={faTags} size='xl' /> 
      </div>
      <div className='px-3 py-2 rounded-md'>
      <FontAwesomeIcon  icon={faPaintRoller} size='xl'/>
      </div>
        </div>
      </div>
    )
}

