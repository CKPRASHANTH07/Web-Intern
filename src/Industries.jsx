import React from 'react'
import Navbar from './homecomponents/Navbar'
import Streamgrid from './Industriescomponents/Streamgrid'
import Footer from './homecomponents/footer'
export default function Industries() {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar/>
      <Streamgrid/>
      <Footer/>
    </div>
  )
}
