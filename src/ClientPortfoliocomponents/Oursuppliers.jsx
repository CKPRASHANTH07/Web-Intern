import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Oursuppliers() {

  useEffect(()=>{

    Aos.init();
 },[]);



  return (
    <div className='relative' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
    data-aos-easing="ease-in-sine">
    {/*Heading*/}
      <div className='flex justify-center mt-20 mb-14'>
         <h1 className='font-bold font-Poppins lg:text-2xl underline underline-offset-8 decoration-4 decoration-violet-500'>Our Suppliers</h1>
      </div>
      {/*content*/}
      <div className='flex flex-row justify-center'>
      <div className='grid grid-cols-3 mx-10 gap-x-20'>
      {/*1st coloumn*/}
      <div className='flex flex-col gap-y-5 '>
       {/*1st div*/}
         <div className='flex border-2 border-black rounded-lg'>
           {/*image1*/}
             <div className='w-20 h-20'>
               <img src='' alt=''/>
             </div>
           {/*description1*/}
             <div className='flex flex-col justify-center px-2'>
               <h1 className='font-bold font-Poppins text-violet-500'> PNP Polytex</h1>
               <h2 className='font-bold font-Inter'>Over 9+ years</h2>
             </div>
         </div>
       {/*2nd div*/}
         <div className='flex border-2 border-black rounded-lg'>
           {/*image1*/}
             <div className='w-20 h-20'>
               <img src='' alt=''/>
             </div>
           {/*description1*/}
             <div className='flex flex-col justify-center px-2'>
               <h1 className='font-bold font-Poppins text-violet-500'>  Metro Papers Co.</h1>
               <h2 className='font-bold font-Inter'>Over 5+ years</h2>
             </div>
         </div>
      </div>
      {/*2nd coloumn*/}
      <div className='flex flex-col gap-y-5 '>
       {/*1st div*/}
         <div className='flex border-2 border-black rounded-lg'>
           {/*image1*/}
             <div className='w-20 h-20'>
               <img src='' alt=''/>
             </div>
           {/*description1*/}
             <div className='flex flex-col justify-center px-2'>
               <h1 className='font-bold font-Poppins text-violet-500'> Atul Enterprisers</h1>
               <h2 className='font-bold font-Inter'>Over 9+ years</h2>
             </div>
         </div>
       {/*2nd div*/}
         <div className='flex border-2 border-black rounded-lg'>
           {/*image1*/}
             <div className='w-20 h-20'>
               <img src='' alt=''/>
             </div>
           {/*description1*/}
             <div className='flex flex-col justify-center px-2'>
               <h1 className='font-bold font-Poppins text-violet-500'>Elite Print Ink Company</h1>
               <h2 className='font-bold font-Inter'>Over 2+ years</h2>
             </div>
         </div>
           {/*3rd div*/}
           <div className='flex border-2 border-black rounded-lg'>
           {/*image1*/}
             <div className='w-20 h-20'>
               <img src='' alt=''/>
             </div>
           {/*description1*/}
             <div className='flex flex-col justify-center px-2'>
               <h1 className='font-bold font-Poppins text-violet-500'> Vimal Fab</h1>
               <h2 className='font-bold font-Inter'>Over 7+ years</h2>
             </div>
         </div>
      </div>
      {/*3rd coloumn*/}
      <div className='flex flex-col gap-y-5 '>
      {/*1st div*/}
        <div className='flex border-2 border-black rounded-lg'>
          {/*image1*/}
            <div className='w-20 h-20'>
              <img src='' alt=''/>
            </div>
          {/*description1*/}
            <div className='flex flex-col justify-center px-2'>
              <h1 className='font-bold font-Poppins text-violet-500'> TES Packaging</h1>
              <h2 className='font-bold font-Inter'>Over 9+ years</h2>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
