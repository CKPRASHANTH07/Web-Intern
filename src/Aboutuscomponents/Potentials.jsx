import React,{useEffect,useState,useMemo} from 'react'
import pot1 from '../images/pot1.png'
import pot2 from '../images/pot2.png'
import pot3 from '../images/pot3.png'
import pot4 from '../images/pot4.png'

export default function Potentials() {


    const [count, setCount] = useState([0, 0, 0,0]);
    const targetValue = useMemo(() => [3, 2, 4,4], []);
    const images=[pot1,pot2,pot3,pot4];
    const headings=['Rotary machine','Flatbed Machines','Thermal Printer','Laser Cutting Machine'];
    const description=['4+1 colour 4+2 colour 2+1 colour','4 colour 3 colour ','','Cold & Hot Cut Machine ']
  
    useEffect(() => {
      const durations = [5000, 5000, 5000,5000]; // Set the desired durations in milliseconds
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




  return (
    <div className='relative mx-20 my-20'>
        <div className='flex justify-start mb-20'>
            <h1 className='font-Poppins lg:text-2xl xl:text-5xl'>Our Potential Infrastructure</h1>
        </div>
       
    {/*details*/}
    <div className='flex flex-row justify-start my-10 divide-x-4 divide-violet-600'>
    {count.map((value,index)=>(
        <div className='flex'>
        <div className='flex flex-col pl-5 gap-y-5'>
          {/*images*/}
          <div className='w-20 h-20'>
           <img src={images[index]} alt=''/>
          </div>
          {/* numbers */}
          <div key={index} className='py-2 w-fit'>
           <div className='text-start w-28'>
              <p className='text-2xl text-violet-500 font-Poppins'>{value}Nos</p>
           </div>
          </div>
        </div>
        <div className='flex flex-col px-5 w-fit gap-y-5'>
         <p className='text-lg font-extrabold leading-tight text-orange-500 font-Poppins'>{headings[index]}</p>
         <p className='text-base font-bold max-w-prose font-Inter'>{description[index]}</p>
        </div>
        </div>
    ))}
    </div>
    </div>
  )
}
