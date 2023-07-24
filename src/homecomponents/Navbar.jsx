import React, { useState } from 'react'
import logo from '../images/logo.png'
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
        </button>
        </Link>
        <Link to="/Industries">
        <button className="font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500">Industries</button>
        </Link>
        <Link to="/ClientPortfolio">
        <button className="font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500">Client Portfolio</button>
        </Link>
        <Link to="/Aboutus">
        <button className="font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500">About-us</button>
        </Link>
        <Link to="/Contactus">
        <button className="font-extrabold font-Inter hover:underline underline-offset-8 decoration-4 decoration-violet-500">Contact-us</button>
        </Link>
        </div>
   {/*
         <div className={`${Shownavbar?'block':'hidden'} flex flex-col  lg:top-20 xl:top-36 lg:left-[20%] xl:left-[49%] rounded-lg p-2 space-y-6`}>
        <div className='px-3 py-2 rounded-md'>
       <FontAwesomeIcon icon={faQrcode} size='xl' /> 
      </div>
      <div className='px-3 py-2 rounded-md'>
      <FontAwesomeIcon icon={faTags} size='xl' /> 
      </div>
      <div className='px-3 py-2 rounded-md'>
      <FontAwesomeIcon  icon={faPaintRoller} size='xl'/>
      </div>
    </div> */}
      </div>
    )
}

