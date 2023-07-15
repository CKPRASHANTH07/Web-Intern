import React from 'react'
import cube from '../images/cube.png'

export default function Hero(){
    return (
      <div className='relative w-screen h-screen bg-center bg-no-repeat bg-contain' style={{backgroundImage:`url(${cube})`}}> 
      <div className='z-10 pt-16 text-center lg:text-3xl xl:text-5xl font-Poppins'>
          <h1 className='text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text'> Stand out from the crowd with eye-catching,</h1>
        </div>
      </div>
    )
}

