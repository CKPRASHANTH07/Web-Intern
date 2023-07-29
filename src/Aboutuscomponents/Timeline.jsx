import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Timeline() {


    useEffect(()=>{
  
      Aos.init();
   },[]);
  

  return (
    <div  className='relative lg:pt-0 xl:pt-0 sm:pt-32'  data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
    data-aos-easing="ease-in-sine">

        {/* Heading 1 */}

      <div className='flex justify-center'>
       <h1 className='font-semibold underline lg:text-3xl xl:text-5xl font-Poppins underline-offset-8 decoration-4 decoration-violet-500'>What have we come across !</h1>
      </div>

        {/* Container */}
        
      <div className="container w-full h-full mx-auto my-10">
        <div className="relative h-full overflow-hidden lg:p-10 xl:p-10 sm:p-0 wrap">
       
        {/* Line */}

        <div className="absolute h-full border-opacity-100 lg:border-2 xl:border-2 sm:border-0 border-violet-300" style={{left:"50%"}}>
        </div>
        
        {/* 1st Timeline */}

        <div className="flex items-center justify-between w-full mb-8 right-timeline"  data-aos="fade-left" data-aos-duration="5000"  data-aos-offset="200"
        data-aos-easing="ease-in-sine">
          <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 rounded-full shadow-xl lg:px-0 xl:px-0 sm:px-3 lg:py-0 xl:py-0 sm:py-1 lg:mr-0 xl:mr-0 sm:mr-5 lg:w-8 xl:w-8 lg:h-8 xl:h-8">
              <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <div className="order-1 px-6 py-4 rounded-lg shadow-xl lg:w-5/12 xl:w-5/12 bg-violet-500">
              <h3 className="mb-1.5 font-bold font-Poppins text-white text-lg">Founded <p className='text-white w-fit'>2009 </p></h3>
              <p className="text-sm font-semibold leading-snug tracking-wide text-white font-Inter">Print Majesty was founded with a strong belief in the transformative power of technology. The founders recognized the immense potential of technology to revolutionize businesses, industries, and individuals' lives.</p>
            </div>
        </div>

        {/* 2nd Timeline */}

        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline"  data-aos="fade-right" data-aos-duration="5000"  data-aos-offset="200"
        data-aos-easing="ease-in-sine">
            <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 rounded-full shadow-xl lg:w-8 xl:w-8 lg:h-8 xl:h-8 lg:px-0 xl:px-0 sm:px-3 lg:py-0 xl:py-0 sm:py-1 lg:ml-0 xl:ml-0 sm:ml-5">
                <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
              </div>
              <div className="order-1 px-6 py-4 rounded-lg shadow-xl lg:w-5/12 xl:w-5/12 bg-slate-900">
                <h3 className="mb-1.5 font-bold font-Poppins text-white text-lg">Grown Bigger <p className='text-white w-fit'>2014</p></h3>
                <p className="text-sm font-semibold leading-snug tracking-wide text-white font-Inter">Effective leadership plays a crucial role in guiding the company's vision, making strategic decisions, and driving growth. A strong leadership team with a clear vision and the ability to inspire and motivate employees is essential for company growth.</p>
              </div>
        </div>
    
        {/* 3rd Timeline */}

        <div className="flex items-center justify-between w-full mb-8 right-timeline"  data-aos="fade-left" data-aos-duration="5000"  data-aos-offset="200"
        data-aos-easing="ease-in-sine">
            <div className="order-1 w-5/12"></div>
               <div className="z-20 flex items-center order-1 bg-gray-800 rounded-full shadow-xl lg:px-0 xl:px-0 sm:px-3 lg:py-0 xl:py-0 sm:py-1 lg:mr-0 xl:mr-0 sm:mr-5 lg:w-8 xl:w-8 lg:h-8 xl:h-8">
                  <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
               </div>
               <div className="order-1 px-6 py-4 rounded-lg shadow-xl lg:w-5/12 xl:w-5/12 bg-violet-500">
                  <h3 className="mb-1.5 font-bold font-Poppins text-white text-lg">Got Clients <p className='text-white w-fit'>2016 </p></h3>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white font-Inter">Satisfied clients can become valuable brand advocates by referring new clients. Implementing referral programs or offering incentives for client referrals can encourage existing clients to spread the word about your company's services.</p>
               </div>
        </div>

        {/* 4th Timeline */}

        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline"  data-aos="fade-right" data-aos-duration="5000"  data-aos-offset="200"
        data-aos-easing="ease-in-sine">
            <div className="order-1 w-5/12"></div>
               <div className="z-20 flex items-center order-1 bg-gray-800 rounded-full shadow-xl lg:w-8 xl:w-8 lg:h-8 xl:h-8 lg:px-0 xl:px-0 sm:px-3 lg:py-0 xl:py-0 sm:py-1 lg:ml-0 xl:ml-0 sm:ml-5">
                  <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
               </div>
               <div className="order-1 px-6 py-4 rounded-lg shadow-xl lg:w-5/12 xl:w-5/12 bg-slate-900">
                  <h3 className="mb-3 text-xl font-bold text-white font-Poppins">Become a major player <p className='text-white w-fit'>2023 </p></h3>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white font-Inter">Develop a unique value proposition that sets your company apart from competitors. Identify what makes your products or services distinct and valuable to customers.</p>
               </div>
            </div>
        </div>
</div>
    </div>
  )
}
