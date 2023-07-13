import React from 'react'
import cube from '../images/cube.png'

export default function Hero(){
    return (
      <div className='relative bg-contain bg-no-repeat bg-center h-screen w-screen' style={{backgroundImage:`url(${cube})`}}>
        <div className='lg:text-3xl xl:text-5xl pt-16 text-center font-Poppins z-10'>
          <h1 className='bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'> Stand out from the crowd with eye-catching,</h1>
        </div>
      </div>
    )
}

