import React from 'react'
import label from '../images/labels.png'
import { useEffect} from 'react'
import {TbExternalLink} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Products(){

   useEffect(()=>{

      Aos.init();
   },[]);

    return (
        
<div  className='relative ' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
data-aos-easing="ease-in-sine" >
   <div className='flex justify-center'>
      <h1 className='underline font-Poppins lg:text-4xl xl:text-5xl underline-offset-8 decoration-4 decoration-violet-500'>Products</h1>
   </div>

   {/* First div/Product */}
<div className='flex justify-around md:flex-row sm:gap-y-10 sm:flex-col mt-28 sm:mx-5 xl:mx-0 lg:mx-0' >

    {/*Image*/}
    <div className='sm:flex sm:justify-center'>
   <div className='h-64 w-64 border-2 overflow-hidden scale-125 border-black rounded-l-[5rem] rounded-br-[5rem] shadow-2xl shadow-violet-300 ' data-aos="fade-right" data-aos-duration="5000"  data-aos-offset="200"
   data-aos-easing="ease-in-sine">
      <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   </div>

   {/* Description */}
   <div className='flex flex-col gap-y-6 max-w-prose' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
   data-aos-easing="ease-in-sine" >
      <h1 className='font-semibold lg:text-2xl lg:text-start xl:text-start sm:text-center font-Poppins text-violet-500'>Labels</h1>
      <p className='text-lg font-bold lg:text-left xl:text-left sm:text-center text-clip font-Inter' > We have in our store Labels and Stickers, which are optimum in quality. Our range comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed Labels and Barcode Stickers These products are designed using quality material and are used in different applications.</p>
   <Link to='/Products'>
    <div className='sm:flex lg:flex xl:flex md:flex sm:justify-center md:justify-start lg:justify-start xl:justify-start'>
      <button className='flex px-4 py-2 transition duration-300 ease-in-out delay-150 rounded-lg gap-x-3 hover:-translate-y-1 hover:scale-110 bg-violet-500 w-fit'>
        <p className='tracking-wide text-white font-Poppins'> Check out</p>
        <TbExternalLink size='20px' style={{color:'white'}} />
      </button> 
    </div>
   </Link>
   </div>
</div>

{/* Second div/Product */}

<div className='flex justify-around md:flex-row sm:gap-y-10 sm:flex-col-reverse mt-36 sm:mx-5 xl:mx-0 lg:mx-0'>
   

{/*Description*/}


   <div className='flex flex-col gap-y-6 max-w-prose' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
   data-aos-easing="ease-in-sine">
      <h1 className='font-semibold lg:text-2xl lg:text-start xl:text-start sm:text-center font-Poppins text-violet-500'>Stickers</h1>
      <p className='text-lg font-bold lg:text-left xl:text-left sm:text-center text-clip font-Inter' > We are instrumental in offering an exquisite array of Barcode Stickers that are widely appreciated for their designs and finishing. We have installed latest techniques that assist us in designing and bringing forth a premium quality range that is in compliance with the standards of international market. </p>
    <Link to='/Products'>
     <div className='sm:flex lg:flex xl:flex md:flex sm:justify-center md:justify-start lg:justify-start xl:justify-start'>
      <button className='flex px-4 py-2 transition duration-300 ease-in-out delay-150 rounded-lg gap-x-3 hover:-translate-y-1 hover:scale-110 bg-violet-500 w-fit'>
         <p className='tracking-wide text-white font-Poppins'> Check out</p>
         <TbExternalLink size='20px' style={{color:'white'}} />
      </button>
     </div>
   </Link>
   </div>

   {/*  Image */}

   <div className='sm:flex sm:justify-center'>
   <div className='h-64 w-64 border-2 overflow-hidden scale-125 border-black rounded-r-[5rem] rounded-bl-[5rem] shadow-2xl shadow-violet-300' data-aos="fade-left" data-aos-duration="5000"  data-aos-offset="200"
   data-aos-easing="ease-in-sine">
     <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   </div>
</div>


{/* Third div/Product */}


<div className='flex justify-around md:flex-row sm:flex-col sm:gap-y-10 mt-36 sm:mx-5 xl:mx-0 lg:mx-0'>

    {/* Image */}
    <div className='sm:flex sm:justify-center'>
   <div className='h-64 w-64 border-2 overflow-hidden scale-125 border-black rounded-l-[5rem] rounded-br-[5rem] shadow-2xl shadow-violet-300' data-aos="fade-right" data-aos-duration="5000"  data-aos-offset="200"
   data-aos-easing="ease-in-sine">
     <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   </div>

   {/*Description*/}
   <div className='flex flex-col space-y-6 max-w-prose' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
   data-aos-easing="ease-in-sine">
     <h1 className='font-semibold lg:text-2xl lg:text-start xl:text-start sm:text-center font-Poppins text-violet-500'>Hang Tags</h1>
     <p className='text-lg font-bold lg:text-left xl:text-left sm:text-center text-clip font-Inter' > Our name is enlisted amongst trustworthy manufacturer and supplier of comprehensive range of Hang Tags. These are used in businesses for pricing or brand apparels and many more places. We offer products in the stipulated time frame to meet the market demand</p>
     <div>
       <Link to='/Products'>
        <div className='sm:flex lg:flex xl:flex md:flex sm:justify-center md:justify-start lg:justify-start xl:justify-start'>
        <button className='flex px-4 py-2 transition duration-300 ease-in-out delay-150 rounded-lg gap-x-3 hover:-translate-y-1 hover:scale-110 bg-violet-500 w-fit'>
         <p className='tracking-wide text-white font-Poppins'> Check out</p>
         <TbExternalLink size='20px' style={{color:'white'}} />
        </button>
        </div>
       </Link>
     </div>
   </div>
</div>



{/* common one */}

<Link to='/Products'>
<div className='flex justify-center mt-36 sm:mx-5 lg:mx-0 xl:mx-0'>
<button className='flex flex-row px-4 py-2 transition duration-300 ease-in-out delay-150 rounded-lg hover:-translate-y-1 hover:scale-110 gap-x-3 bg-violet-500 w-fit'>
   <p className='tracking-wide text-white font-Poppins'> Didn't Help Here is the way for brief one  </p>
   <TbExternalLink size='20px' style={{color:'white'}} />
</button>
</div>
</Link>
</div>
    )
}
