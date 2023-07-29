import React from 'react'
import prdimg from '../images/sampleproduct.png'
import { LiaStarSolid } from 'react-icons/lia'
import {BiSolidPhoneCall,BiSolidOffer} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Producthero() {
  return (
    <div className='relative'>
      <div className='my-10 overflow-hidden rounded-lg shadow-xl lg:justify-between xl:justify-between sm:justify-center lg:flex xl:flex lg:flex-row xl:flex-row sm:flex sm:flex-col-reverse sm:mx-2 lg:mx-32 xl:mx-32'>
         <div className='flex flex-col mx-10 my-10 '>
            {/* Heading and description */}
            <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'> BARCODE ROLLS - 101</h1>
            <p className='mt-5 text-base font-semibold font-Inter max-w-prose'>From retail to supply chain, our innovative barcode solutions empower businesses to achieve unparalleled accuracy, efficiency, and growth</p>
            {/* offer button */}
            <div className='flex flex-row gap-x-8 '>
              <div className='px-2 py-2 mt-10 border-2 rounded-lg h-fit place-items-center bg-violet-500 w-fit'>
                <Link to='/Contactus'>
                  <button className='flex space-x-3 place-items-center'>
                   <BiSolidPhoneCall style={{color:"white"}} size={20}/>
                   <h1 className='font-bold text-center text-white font-Inter'>Enquire Now</h1>
                  </button>
                </Link>
              </div>
             <div className='px-2 py-2 mt-10 space-x-3 border-2 rounded-lg border-slate-900 animate-bounce w-fit'>
               <button className='flex space-x-3 place-items-center'>
                 <BiSolidOffer style={{color:""}} size={20} /> 
                 <h1 className='font-bold text-center font-Inter text-violet-700'>Grab @ 20% off</h1>
                </button>
             </div>
           </div>
      <div className='flex flex-row mt-10 space-x-1'>
      <div className='flex mr-5 place-items-center'>
      <h1 className='font-extrabold font-Inter'> Reviews </h1>
      </div>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      <LiaStarSolid style={{color:"#F1C93B"}} size={25}/>
      </div>
      </div>

      {/* Image */}

        <div className='overflow-hidden lg:bg-yellow-300 sm:px-10 xl:px-0 lg:px-0 lg:rounded-l-full xl:rounded-l-full sm:rounded-sm max-w-max'>
           <img className='w-auto lg:h-96 xl:h-96 sm:h-44' src={prdimg} alt=''/>
        </div>


      </div>
    </div>
  )
}
