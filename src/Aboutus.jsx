import React from 'react'
import Navbar from './homecomponents/Navbar'
import Aboutushero from './Aboutuscomponents/Aboutushero'
import Footer from './homecomponents/footer'
export default function Aboutus() {
  return (
    <div>
      <Navbar/>
      <div className='relative'>
      <Aboutushero />
      <div className='mt-96'>
      <Footer/>
      </div>
      </div>
    </div>
  )
}
