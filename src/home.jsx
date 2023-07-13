import React from 'react'
import Navbar from './homecomponents/Navbar'
import Hero from './homecomponents/Hero'
import Products from './homecomponents/products'
import Logo from './homecomponents/logo'
import Testimonials from './homecomponents/Testimonials'
import Testimonial1 from './homecomponents/testimonial1'
import Footer from './homecomponents/footer'


export default function Home(){
      return (
      <div className='scroll-smooth'>
        <Navbar/>
        <Hero/>
        <Products />
        <Logo/>
        <Testimonials/>
        <Testimonial1/>
        <Footer/>
      </div>
    )
}
