import React from 'react'
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function Testimonial1() {
  return (
    <div className='relative my-32 mx-28'>
      <div className='flex flex-row space-x-20'>
       <div className='flex flex-col mt-16 h-fit border-2 border-black shadow-lg shadow-violet-500 rounded-xl p-5 w-fit'>
        <div className='rounded-full h-16 overflow-hidden flex justify-center'>
          <img src={person1} alt='' />
        </div> 
        <div className='flex flex-col text-center mt-5'>
        <h1 className='text-redc font-opensans font-bold'>Mr . Tim slash</h1>
        <h1 className='text-violet-500 font-firasans font-bold'>CEO -  Shoppers stop</h1>
        </div>
        <div className='mt-5 w-64'>
        <FontAwesomeIcon icon={faQuoteLeft} style={{color:"#292B30"}} size='3x' />
        <p className='font-firasans text-grey font-semibold my-5'>
        Print majesty  are  the guys who are the top in the market for their awesome works . Their on-time delivery is the hidden secret that has huge demand to reveal
        </p>
        <div className='flex justify-end'>
        <FontAwesomeIcon icon={faQuoteRight} style={{color:"#8b5cf6"}} size='3x'/>
        </div>
        </div>
       </div>
       <div className='flex flex-col h-auto border-2 border-black shadow-lg shadow-violet-500 rounded-xl p-5 w-fit'>
       <div className='rounded-full  overflow-hidden flex justify-center'>
         <img src={person2} alt='' />
       </div> 
       <div className='flex flex-col text-center mt-5'>
       <h1 className='text-redc font-opensans font-bold'>Mrs. Lisa wayne</h1>
       <h1 className='text-violet-500 font-firasans font-bold'>CEO -  Gini & Jony</h1>
       </div>
       <div className='mt-5 w-64'>
       <FontAwesomeIcon icon={faQuoteLeft} style={{color:"#292B30"}} size='4x' />
       <p className='font-firasans text-grey font-semibold my-5'>
       Print majesty  are  the guys who are the top in the market for their awesome works . Their on-time delivery is the hidden secret that has huge demand to reveal
       </p>
       <div className='flex justify-end'>
       <FontAwesomeIcon icon={faQuoteRight} style={{color:"#8b5cf6"}} size='4x'/>
       </div>
       </div>
      </div>
      <div className='flex flex-col mt-16 h-fit border-2 border-black shadow-lg shadow-violet-500 rounded-xl p-5 w-fit'>
        <div className='rounded-full h-16 overflow-hidden flex justify-center'>
          <img src={person3} alt='' />
        </div> 
        <div className='flex flex-col text-center mt-5'>
        <h1 className='text-redc font-opensans font-bold'>Mr . Russo andrews</h1>
        <h1 className='text-violet-500 font-firasans font-bold'>CFO -  Pepe jeans</h1>
        </div>
        <div className='mt-5 w-64'>
        <FontAwesomeIcon icon={faQuoteLeft} style={{color:"#292B30"}} size='3x' />
        <p className='font-firasans text-grey font-semibold my-5'>
        Print majesty  are  the guys who are the top in the market for their awesome works . Their on-time delivery is the hidden secret that has huge demand to reveal
        </p>
        <div className='flex justify-end'>
        <FontAwesomeIcon icon={faQuoteRight} style={{color:"#8b5cf6"}} size='3x'/>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}
