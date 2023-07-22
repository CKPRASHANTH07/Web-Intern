import React from 'react'
import label from '../images/labels.png'
import { useEffect,useRef} from 'react'
import {TbExternalLink} from 'react-icons/tb'
import { Link } from 'react-router-dom'


export default function Products(){

   const scrl=useRef(null);
   useEffect(()=>{

   },[]);

    return (
        
<div  className='relative' ref={scrl}>
   <div className='flex justify-center'>
      <h1 className='underline font-Poppins lg:text-4xl xl:text-5xl underline-offset-8 decoration-4 decoration-violet-500'>Products</h1>
   </div>
{/* one product text and image div*/}
<div className='flex justify-around mt-28'>
   <div className='h-64 w-64 border-2 overflow-hidden scale-125 border-black rounded-l-[5rem] rounded-br-[5rem] shadow-2xl shadow-violet-300 '>
      <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   <div className='flex flex-col space-y-6 max-w-prose'>
      <h1 className='font-semibold lg:text-2xl font-Poppins text-violet-500'>Labels</h1>
      <p className='text-lg font-bold text-left text-clip font-Inter' > We have in our store Labels and Stickers, which are optimum in quality. Our range comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed Labels and Barcode Stickers These products are designed using quality material and are used in different applications.</p>
   <div>
   <button className='flex gap-x-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 rounded-lg bg-violet-500 w-fit'>
     <p className='tracking-wide text-white font-Poppins'> Check out</p>
     <TbExternalLink size='20px' style={{color:'white'}} />
   </button>
   </div>
   </div>
</div>

<div className='flex justify-around mt-36'>
   <div className='flex flex-col space-y-6 max-w-prose'>
    <div>
      <h1 className='font-semibold lg:text-2xl font-Poppins text-violet-500'>Stickers</h1>
      <p className='text-lg font-bold text-left text-clip font-Inter' > We are instrumental in offering an exquisite array of Barcode Stickers that are widely appreciated for their designs and finishing. We have installed latest techniques that assist us in designing and bringing forth a premium quality range that is in compliance with the standards of international market. </p>
    </div>
    <div>
      <button className='flex gap-x-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 rounded-lg bg-violet-500 w-fit'>
         <p className='tracking-wide text-white font-Poppins'> Check out</p>
         <TbExternalLink size='20px' style={{color:'white'}} />
      </button>
    </div>
   </div>
   <div className='h-64 w-64 border-2 overflow-hidden scale-125 border-black rounded-r-[5rem] rounded-bl-[5rem] shadow-2xl shadow-violet-300'>
     <img src={label} className='mt-1 grayscale' alt='' />
   </div>
</div>
{/* one product text and image div*/}
<div className='flex justify-around mt-36'>
   <div className='h-64 w-64 border-2 overflow-hidden scale-125 border-black rounded-l-[5rem] rounded-br-[5rem] shadow-2xl shadow-violet-300 '>
   <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   <div className='flex flex-col space-y-6 max-w-prose'>
   <h1 className='font-semibold lg:text-2xl font-Poppins text-violet-500'>Hang Tags</h1>
   <p className='text-lg font-bold text-left text-clip font-Inter' > Our name is enlisted amongst trustworthy manufacturer and supplier of comprehensive range of Hang Tags. These are used in businesses for pricing or brand apparels and many more places. We offer products in the stipulated time frame to meet the market demand</p>
   <div>
   <button className='flex gap-x-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-4 py-2 rounded-lg bg-violet-500 w-fit'>
      <p className='tracking-wide text-white font-Poppins'> Check out</p>
      <TbExternalLink size='20px' style={{color:'white'}} />
   </button>
   </div>
   </div>
</div>

<Link to='/Products'>
<div className='flex justify-center mt-36'>
<button className='flex flex-row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-3 px-4 py-2 rounded-lg bg-violet-500 w-fit'>
   <p className='tracking-wide text-white font-Poppins'> Didn't Help Here is the way for brief one  </p>
   <TbExternalLink size='20px' style={{color:'white'}} />
</button>
</div>
</Link>
</div>
    )
}
