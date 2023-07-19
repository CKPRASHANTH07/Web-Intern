import React from 'react'
import Navbar from './homecomponents/Navbar'
import Producthero from './Productcomponents/Producthero'
import Productfilter from './Productcomponents/Productfilter'
import Productlist from './Productcomponents/Productlist'
import Footer from './homecomponents/footer'

export default function Productindi() {
  return (
    <div>
      <div className=''>
      <Navbar/>
      <Producthero/>
      <div className='flex flex-row mx-10 mt-16 gap-x-10'>
      <Productfilter/>
      <Productlist/>
      </div>
      <Footer/>
      </div>
    </div>
  )
}
