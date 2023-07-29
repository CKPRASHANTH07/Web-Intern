import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import dvcds from '../images/dvce dscrptn.png'
import stdwrn from '../images/stndrd and wrng.png'
import rccle from '../images/rccle.png'
import Navbar from '../homecomponents/Navbar';
import Footer from '../homecomponents/footer';
import { Link } from 'react-router-dom';


const products = [
    {
      id: 1,
      title: 'Device description Labels',
      subtitle: 'Custom labels',
      description:
      'The unique identifier for the specific device model, which helps in identifying and differentiating various versions of the product.',
      image:dvcds,
    },
    
    {
      id:2,
      title:'Standard and warning labels',
      subtitle:'Standard Symbols',
      description:
      'Standard and warning labels are used to convey important information, instructions, or warnings to users about a product`s usage, safety, and regulatory compliance',
      image:stdwrn,
    },
    {
      id:3,
      title:'Recycle instructions',
      subtitle:'Standard Symbols',
      description:
      'These labels are used to indicate proper disposal methods for electronic waste, also known as e-waste.',
      image:rccle,
    }
  ];

export default function Electroniclabels() {
  return (
    <div>
    <Navbar/>
    {/* Heading1 */}
    <div className='my-5 lg:mx-32 xl:mx-32 sm:mx-0'>
      <h1 className='text-2xl font-bold underline lg:text-start xl:text-start sm:text-center underline-offset-4 decoration-violet-500 decoration-4 decoration-slice font-Poppins'>
        Likely Products
      </h1>
    </div>
    {/* Render product cards dynamically */}
    {products.map((product) => (
      <div
        key={product.id}
        className='justify-between px-10 py-10 my-10 overflow-hidden transition duration-300 ease-in-out rounded-lg shadow-xl hover:-translate-y-1 hover:scale-110 lg:flex lg:flex-row xl:flex xl:flex-row sm:flex sm:flex-col-reverse lg:mx-32 xl:mx-32 sm:mx-5'
      >
        {/* Product details */}
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'>
            {product.title}
          </h1>
          <h2 className='text-lg font-bold text-gray-400 font-Inter'>{product.subtitle}</h2>
          <p className='max-w-lg text-base font-semibold font-Inter'>{product.description}</p>
          <Link to='/Contactus'>
          <button className='flex flex-row px-3 py-1 mt-2 rounded-lg place-items-center gap-x-2 bg-violet-500 w-fit'>
            <h1 className='font-bold tracking-wider text-white font-Inter text-md'>Order Now</h1>
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
