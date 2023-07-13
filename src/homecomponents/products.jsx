import React from 'react'
import label from '../images/labels.png'

export default function Products(){
    return (
        
<div  className='relative'>
<div className='flex justify-center'>
<h1 className='font-Poppins lg:text-4xl xl:text-5xl underline underline-offset-8 decoration-4 decoration-violet-500'>Products</h1>
</div>
{/* one product text and image div*/}
<div className='flex justify-around mt-20'>
   <div className='h-64 w-64 border-2 overflow-hidden border-black rounded-l-[5rem] rounded-br-[5rem] shadow-2xl shadow-violet-300 '>
   <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   <div className='flex flex-col space-y-6 max-w-prose'>
   <h1 className='font-semibold lg:text-2xl font-Poppins text-violet-500'>Labels</h1>
   <p className='text-lg font-bold text-left text-clip font-Inter' > We have in our store Labels and Stickers, which are optimum in quality. Our range comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed Labels and Barcode Stickers These products are designed using quality material and are used in different applications.</p>
   <div>
   <button className='px-4 py-2 rounded-lg bg-violet-500 w-fit'>
   <p className='font-semibold text-white font-Poppins'> Check out</p>
   </button>
   </div>
   </div>
</div>

<div className='flex justify-around mt-36'>
    <div className='flex flex-col space-y-6 max-w-prose'>
   <h1 className='font-semibold lg:text-2xl font-Poppins text-violet-500'>Labels</h1>
   <p className='text-lg font-bold text-left text-clip font-Inter' > We have in our store Labels and Stickers, which are optimum in quality. Our range comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed Labels and Barcode Stickers These products are designed using quality material and are used in different applications. </p>
   <div>
   <button className='px-4 py-2 rounded-lg bg-violet-500 w-fit'>
   <p className='font-semibold text-white font-Poppins'> Check out</p>
   </button>
   </div>
   </div>
   <div className='h-64 w-64 border-2 overflow-hidden border-black rounded-r-[5rem] rounded-bl-[5rem] shadow-2xl shadow-violet-300'>
   <img src={label} className='mt-1 grayscale' alt='' />
   </div>
</div>
{/* one product text and image div*/}
<div className='flex justify-around mt-20'>
   <div className='h-64 w-64 border-2 overflow-hidden border-black rounded-l-[5rem] rounded-br-[5rem] shadow-2xl shadow-violet-300 '>
   <img src={label} className='mt-1 grayscale' alt='' />
   </div>
   <div className='flex flex-col space-y-6 max-w-prose'>
   <h1 className='font-semibold lg:text-2xl font-Poppins text-violet-500'>Labels</h1>
   <p className='text-lg font-bold text-left text-clip font-Inter' > We have in our store Labels and Stickers, which are optimum in quality. Our range comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed Labels and Barcode Stickers These products are designed using quality material and are used in different applications.</p>
   <div>
   <button className='px-4 py-2 rounded-lg bg-violet-500 w-fit'>
   <p className='font-semibold text-white font-Poppins'> Check out</p>
   </button>
   </div>
   </div>
</div>

<div className='flex justify-center mt-36'>
<button className='px-4 py-2 rounded-lg bg-violet-500 w-fit'>
   <p className='font-semibold text-white font-Poppins'> Didn't Help Here is the way for brief one  </p>
   </button>
</div>
</div>
    )
}
