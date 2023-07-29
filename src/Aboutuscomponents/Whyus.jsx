import React from 'react'
import deliver from '../images/Deliverability.png'
import trust from '../images/Trustability.png'
import perfect from '../images/Perfection.png'
import durability from '../images/durability.png'
export default function Whyus() {
  return (
    <div className='relative'  data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <div className='flex my-10 lg:justify-start xl:justify-start sm:justify-center lg:mx-28 xl:mx-28 sm:mx-0'>
        <h1 className='font-bold underline lg:text-3xl xl:text-5xl lg:text-start xl:text-start sm:text-center font-Poppins underline-offset-8 decoration-4 decoration-violet-500'>Why us ?</h1>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 lg:grid-rows-2 xl:grid-rows-2 lg:mx-28 xl:mx-28 sm:mx-10 gap-x-0 gap-y-10'>
        {/*Feature1 */}
        <div className='flex flex-col gap-y-3'  data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="350"
        data-aos-easing="ease-in-sine">
            {/*Image */}
            <div className='w-64 h-64'>
                <img src={deliver} alt=''/>
            </div>
            {/*Heading */}
            <div className='mt-8'>
                <h1 className='text-xl font-semibold text-[#D268CC] font-Poppins'>Deliverability</h1>
            </div>
            {/*Description */}
            <div>
                <p className="max-w-md text-lg font-semibold tracking-wide font-Inter" >Delivering products or services within the agreed-upon timeframe is crucial for customer satisfaction. Meeting deadlines and honoring commitments demonstrates professionalism and reliability.</p>
            </div>
            </div>
        {/*Feature2 */}
        <div className='flex flex-col gap-y-3'  data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="400"
        data-aos-easing="ease-in-sine">
            {/*Image */}
            <div className='w-64 h-64'>
                <img src={trust} alt=''/>
            </div>
            {/*Heading */}
            <div className='mt-8'>
                <h1 className='text-xl font-semibold text-[#D268CC] font-Poppins'>Reliability</h1>
            </div>
            {/*Description */}
            <div>
                <p className="max-w-md text-lg font-semibold tracking-wide font-Inter" >Trustability is a critical factor in establishing and maintaining strong relationships with clients. It is built upon consistent delivery of promises and meeting client expectations.</p>
            </div>
        </div>
        {/*Feature3 */}
        <div className='flex flex-col gap-y-3'  data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            {/*Image */}
            <div className='w-64 h-64'>
                <img src={perfect} alt=''/>
            </div>
            {/*Heading */}
            <div className='mt-8'>
                <h1 className='text-xl font-semibold text-[#D268CC] font-Poppins'>Perfection</h1>
            </div>
            {/*Description */}
            <div>
                <p className="max-w-md text-lg font-semibold tracking-wide font-Inter" >Perfection is a relentless pursuit of excellence in every aspect of a company's operations. It involves meticulous attention to detail, continuous improvement, and exceeding customer expectations.</p>
            </div>
        </div>
        {/*Feature4 */}
        <div className='flex flex-col gap-y-3'  data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="350"
        data-aos-easing="ease-in-sine">
            {/*Image */}
            <div className='w-64 h-64'>
                <img src={durability} alt=''/>
            </div>
            {/*Heading */}
            <div className='mt-8'>
                <h1 className='text-xl font-semibold text-[#D268CC] font-Poppins'>Durability</h1>
             </div>
            {/*Description */}
             <div>
                <p className="max-w-md text-lg font-semibold tracking-wide font-Inter" >
                Durability is a measure of a company's ability to withstand challenges and maintain its operations over the long term. It reflects the company's stability, resilience, and adaptability in the face of changing market conditions.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
