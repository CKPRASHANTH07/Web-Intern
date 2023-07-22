import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import bbnk from '../images/bldbnk.png'
import drgspftn from '../images/drg dscrptn.png'
import drgwrng from '../images/drg warning.png'
import Navbar from '../homecomponents/Navbar';
import Footer from '../homecomponents/footer';
import { Link } from 'react-router-dom';



const products = [
  {
    id: 1,
    title: 'Blood bank Labels',
    subtitle: 'Custom labels',
    description:
      'Custom shipping labels can be created to include specific instructions, branding, or special handling requirements for the package.',
    image:bbnk,
  },
  {
    id:2,
    title:'Drug specification labels',
    subtitle:'Custom labels',
    description:
    'Drug specification labels are labels used on pharmaceutical products to provide detailed information about the drug`s specifications, composition, and other relevant details',
    image:drgspftn  
  },
  {
    id:3,
    title:'Drug warning labels',
    subtitle:'Customlabels',
    description:'Includes warning information to alert users about potential risks, side effects, and precautions associated with the medication.',
    image:drgwrng
  }
];

export default function Pharmaceuticallabels() {
  return (
    <div>
    <Navbar/>
    {/* Heading1 */}
    <div className='mx-32 my-5'>
      <h1 className='text-2xl font-bold underline underline-offset-4 decoration-violet-500 decoration-4 decoration-slice font-Poppins'>
        Likely Products
      </h1>
    </div>
    {/* Render product cards dynamically */}
    {products.map((product) => (
      <div
        key={product.id}
        className='flex flex-row justify-between mx-32 my-10 overflow-hidden rounded-lg shadow-xl px-10 py-10'
      >
        {/* Product details */}
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'>
            {product.title}
          </h1>
          <h2 className='text-lg font-bold font-Inter text-gray-400'>{product.subtitle}</h2>
          <p className=' text-base font-semibold font-Inter max-w-lg'>{product.description}</p>
          <Link to='/Contactus'>
          <button className='flex mt-2 flex-row place-items-center rounded-lg gap-x-2 bg-violet-500 w-fit px-3 py-2'>
            <h1 className='font-Inter tracking-wider font-bold text-white text-md'>Order Now</h1>
            <MdKeyboardDoubleArrowRight style={{ color: '#ffffff' }} size='30px' />
          </button>
          </Link>
        </div>
        {/* Image details */}
        <div className='overflow-hidden rounded-lg max-w-max'>
          <img className='w-auto h-56' src={product.image} alt='' />
        </div>
      </div>
    ))}
    <Footer/>
    </div>
  )
}
