import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Logo() {


  useEffect(()=>{

    Aos.init();
 },[]);


  return (
  <div className='relative mt-24'>
<div class="container my-24 mx-auto md:px-6" data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
data-aos-easing="ease-in-sine">

<section class="mb-32 text-center">
  <h2 class="mb-16 text-3xl font-bold font-Poppins underline underline-offset-8 decoration-4 decoration-violet-500">
    Companies Trust us
  </h2>

  <div class="grid mx-20 items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
    <div class="mb-12 lg:mb-0">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/2.png"
        class="px-16 md:px-12" alt="Nasa - logo" />
    </div>

    <div class="mb-12 lg:mb-0">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/1.png"
        class="px-16 md:px-12" alt="Amazon - logo" />
    </div>

    <div class="mb-12 lg:mb-0">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/3.png"
        class="px-16 md:px-12" alt="Nike - logo" />
    </div>

    <div class="mb-12 lg:mb-0">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/4.png"
        class="px-16 md:px-12" alt="Ikea - logo" />
    </div>
  </div>
</section>
</div>
</div>
  )
}
