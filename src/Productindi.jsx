import React, { useState } from 'react'
import Navbar from './homecomponents/Navbar'
import Producthero from './Productcomponents/Producthero'
import Productfilter from './Productcomponents/Productfilter'
import Productlist from './Productcomponents/Productlist'
import Footer from './homecomponents/footer'

export default function Productindi() {

  const [selectdProduct, selectedCategory] = useState('')
  console.log(selectdProduct)

  return (
    <div>
      <div className=''>
      <Navbar/>
      <Producthero/>
      <div className='mx-10 mt-16 lg:flex xl:flex lg:flex-row xl:flex-row sm:flex sm:flex-col gap-x-10'>
      <Productfilter setSelectedCategory={selectedCategory} selectedCategory={selectdProduct}/>
      <Productlist selectedCategory={selectdProduct}/>
      </div>
      <Footer/>
      </div>
    </div>
  )
}
