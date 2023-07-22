import React from 'react'

export default function Sales() {
  return (
    <div className='relative'>
       <div className='my-10 text-center lg:text-3xl xl:text-5xl font-Poppins'>
         <h1 className='text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text'> Welcome Sales Person !</h1>
       </div>

      <div className='flex flex-row justify-evenly'>
         <div className='flex flex-col gap-y-3'>
         <label className="mt-5 font-bold font-Poppins sm:text-base lg:text-xl xl:text-2xl">Company Name</label>
          <input type='text' placeholder='Enter the Company Name' className='px-3 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'  required/>
         </div>

         <div className='flex flex-col gap-y-3'>
         <label className="mt-5 font-bold font-Poppins sm:text-base lg:text-xl xl:text-2xl">Select Status</label>
          <select type='text' placeholder='Enter the Company Name' className='px-5 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'  required>
          <option className='px-3 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'>Recieved</option>
          <option className='px-3 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'>In Contact</option>
          <option className='px-3 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'>Accepted</option>
          <option className='px-3 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'>Rejected</option>
          </select>
         </div>
       

         <div className='flex flex-col gap-y-3'>
         <label className="mt-5 font-bold font-Poppins sm:text-base lg:text-xl xl:text-2xl">Enter Time</label>
          <input type='time' placeholder='Enter the Company Name' className='px-3 py-2 text-xl font-black font-Inter ring-2 ring-violet-500'  required/>
         </div>
      </div>

      <div className='flex justify-center mt-10 '>
      <div className='flex flex-col w-1/3 gap-y-5'>
      <label className="mt-5 font-bold text-center font-Poppins sm:text-base lg:text-xl xl:text-2xl">Additional notes</label>
      <textarea className='w-full h-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-violet-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
      </div>
      </div>

      <div className='flex justify-center my-10'>
      <button className='px-3 py-1 transition ease-in-out rounded-lg shadow-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:scale-110'>
       <h1 className='tracking-wide text-white font-Poppins sm:text-base lg:text-xl xl:text-2xl'>Update Now !</h1>
      </button>
      </div>
    </div>
  )
}
