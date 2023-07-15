import React from 'react'
import Navbar from './homecomponents/Navbar'
import Contactform from './Contactuscomponents/Contactform'
import Footer from './homecomponents/footer'

export default function Contactus() {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar/>
      <Contactform/>
      <div className='mt-20'>
      <Footer/>
      </div>
    </div>
  )
}
