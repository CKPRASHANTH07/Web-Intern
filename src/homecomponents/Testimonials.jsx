import React, { useState, useEffect, useMemo } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Testimonials() {
  const [count, setCount] = useState([0, 0, 0]);
  const targetValue = useMemo(() => [700, 1200, 500], []);
  const headings=['No of projects','No of Clients','No of innovations'];

  useEffect(() => {
    const durations = [5000, 5000, 5000]; // Set the desired durations in milliseconds
    const increment = targetValue.map((value, index) =>
      Math.ceil(value / durations[index] * 10)
    );

    const timeout = setTimeout(() => {
      setCount((prevCounts) =>
        prevCounts.map((count, index) =>
          count < targetValue[index] ? count + increment[index] : count
        )
      );
    }, 10);

    return () => clearTimeout(timeout);
  }, [count, targetValue]);


  useEffect(()=>{

    Aos.init();
 },[]);

  return (
    <div className='relative' data-aos="fade-up" data-aos-duration="5000"  data-aos-offset="200"
    data-aos-easing="ease-in-sine">
    <div className='my-10 flex justify-center'>
    <h1 className='text-3xl font-Poppins font-bold underline underline-offset-8 decoration-4 decoration-violet-500'>Stats</h1>
    </div>
      <div className='flex flex-row justify-center space-x-36'>
        {count.map((value, index) => (
            <div className='flex flex-col space-y-10'>
             <div className='flex justify-center '>
             <div key={index} className='px-1 py-10 rounded-full bg-violet-500 w-fit'>
              <div className='text-center w-28'>
              <p className='text-2xl text-white font-Poppins'>{value}+</p>
             </div>
             </div>
             </div>
          <div className='flex justify-center'>
           <h1 className='font-extrabold tracking-wide lg:text-xl xl:text-4xl font-Inter'>{headings[index]}</h1>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}

