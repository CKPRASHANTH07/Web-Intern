import React from 'react'
import ceo from '../images/ceo.png'

export default function Aboutushero() {
  return (
    <div className='relative h-full mt-10'>
    {/* slanted background */}
    <div className='absolute inset-y-0 lg:w-[90%] xl:w-[90%] lg:h-[170%] xl:h-[170%] sm:w-[90%] sm:h-[260%] transform -skew-y-6 lg:top-20 xl:top-20 lg:left-20 xl:left-20 sm:left-5 bg-violet-500'></div>
  
    {/* details */}
    <div className='relative z-10 flex flex-col text-white lg:top-44 xl:top-44 sm:top-[26rem] lg:left-28 xl:left-28 sm:left-10 w-fit'>
      <h1 className='text-xl underline font-Poppins underline-offset-8 decoration-yellow-300 decoration-4'>Our Leader</h1>
      <h1 className='mt-2 text-lg font-Poppins'>Founder & CEO</h1>
      <p className='mt-5 font-bold lg:max-w-prose xl:max-w-prose sm:max-w-xs font-Inter lg:text-md xl:text-md sm:text-sm'>
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

