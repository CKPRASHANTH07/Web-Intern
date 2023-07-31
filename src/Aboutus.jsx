import React from 'react'
import Navbar from './homecomponents/Navbar'
import Aboutushero from './Aboutuscomponents/Aboutushero'
import Footer from './homecomponents/footer'
import Timeline from './Aboutuscomponents/Timeline'
import Whyus from './Aboutuscomponents/Whyus'
import Potentials from './Aboutuscomponents/Potentials'
import Ourteam from './Aboutuscomponents/Ourteam'


export default function Aboutus() {
  return (
    <div className='flex flex-col gap-10'>
      <Navbar/>
      <div className='relative'>
      <Aboutushero />
      <div className='mt-96'>
      <Timeline/>
      <Whyus/>
      <Potentials/>
      <Ourteam/>
      <Footer/>
      </div>
      </div>
    </div>
  )
}
