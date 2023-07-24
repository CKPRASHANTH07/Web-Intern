import React,{useEffect} from 'react'
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Testimonial1() {

  useEffect(()=>{

    Aos.init();
 },[]);


  return (
    <div className='relative my-32 mx-28' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
    data-aos-easing="ease-in-sine">

    <div className='my-10 flex justify-center'>
    <h1 className='text-3xl font-Poppins font-bold underline underline-offset-8 decoration-4 decoration-violet-500'>Testimonials</h1>
    </div>


      <div className='flex flex-row justify-center space-x-20'>
       <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col p-5 mt-16 border-2 border-black shadow-lg h-fit shadow-violet-500 rounded-xl w-fit'>
        <div className='flex justify-center h-16 overflow-hidden rounded-full'>
          <img src={person1} alt='' />
        </div> 
        <div className='flex flex-col mt-5 text-center'>
        <h1 className='font-bold text-redc font-opensans'>Mr . Tim slash</h1>
        <h1 className='font-bold text-violet-500 font-firasans'>CEO -  Shoppers stop</h1>
        </div>
        <div className='w-64 mt-5'>
        <FontAwesomeIcon icon={faQuoteLeft} style={{color:"#292B30"}} size='3x' />
        <p className='my-5 font-semibold font-firasans text-grey'>
        Print majesty  are  the guys who are the top in the market for their awesome works . Their on-time delivery is the hidden secret that has huge demand to reveal
        </p>
        <div className='flex justify-end'>
        <FontAwesomeIcon icon={faQuoteRight} style={{color:"#8b5cf6"}} size='3x'/>
        </div>
        </div>
       </div>
       <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col h-auto p-5 border-2 border-black shadow-lg shadow-violet-500 rounded-xl w-fit'>
       <div className='flex justify-center overflow-hidden rounded-full'>
         <img src={person2} alt='' />
       </div> 
       <div className='flex flex-col mt-5 text-center'>
       <h1 className='font-bold text-redc font-opensans'>Mrs. Lisa wayne</h1>
       <h1 className='font-bold text-violet-500 font-firasans'>CEO -  Gini & Jony</h1>
       </div>
       <div className='w-64 mt-5'>
       <FontAwesomeIcon icon={faQuoteLeft} style={{color:"#292B30"}} size='4x' />
       <p className='my-5 font-semibold font-firasans text-grey'>
       Print majesty  are  the guys who are the top in the market for their awesome works . Their on-time delivery is the hidden secret that has huge demand to reveal
       </p>
       <div className='flex justify-end'>
       <FontAwesomeIcon icon={faQuoteRight} style={{color:"#8b5cf6"}} size='4x'/>
       </div>
       </div>
      </div>
      <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col p-5 mt-16 border-2 border-black shadow-lg h-fit shadow-violet-500 rounded-xl w-fit'>
        <div className='flex justify-center h-16 overflow-hidden rounded-full'>
          <img src={person3} alt='' />
        </div> 
        <div className='flex flex-col mt-5 text-center'>
        <h1 className='font-bold text-redc font-opensans'>Mr . Russo andrews</h1>
        <h1 className='font-bold text-violet-500 font-firasans'>CFO -  Pepe jeans</h1>
        </div>
        <div className='w-64 mt-5'>
        <FontAwesomeIcon icon={faQuoteLeft} style={{color:"#292B30"}} size='3x' />
        <p className='my-5 font-semibold font-firasans text-grey'>
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
