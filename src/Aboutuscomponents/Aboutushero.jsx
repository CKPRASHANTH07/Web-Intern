import React from 'react'
import ceo from '../images/ceo.png'

export default function Aboutushero() {
  return (
    <div className='relative h-full mt-10'>
    {/* slanted background */}
    <div className='absolute inset-y-0 w-[90%] h-[170%] transform -skew-y-6 top-20 left-20 bg-violet-500'></div>
  
    {/* details */}
    <div className='relative z-10 flex flex-col text-white top-44 left-28 w-fit'>
      <h1 className='text-xl font-Poppins underline underline-offset-8 decoration-yellow-300 decoration-4'>Our Leader</h1>
      <h1 className='mt-2 text-lg font-Poppins'>Founder & CEO</h1>
      <p className='mt-5 font-bold max-w-prose font-Inter text-md'>
        One thing that inspired the creation of Elysium Technologies was the belief in the transformative power of technology. The founders recognized that technology has the potential to revolutionize businesses, industries, and individuals' lives. They were inspired by the idea of harnessing this power to create innovative solutions that could drive businesses forward, enhance productivity, and make a positive impact in the world.
      </p>
    </div>
    {/*Image*/}
    <div className='absolute top-0 w-fit h-[182%] overflow-hidden right-32'>
    <img className='-mt-10' src={ceo} alt=''/>
    </div>
  </div>
  
  )
}

