import React from 'react'

export default function Ourteam() {
  return (
    <div className='relative'>
    <div className='flex justify-start mx-20'>
      <h1 className='font-bold font-Poppins lg:text-2xl xl:text-5xl underline underline-offset-8 decoration-4 decoration-violet-500'>Our team</h1>
    </div>
    <div className='mx-20 my-20 shadow-lg '>
      <iframe
        width="100%"
        height="100%"
        title='team'
        src='https://www.youtube.com/embed/bwWgOLiBY-Q'
        className='w-full h-full aspect-video'
      />
    </div>
  </div>
  )
}
