import React from 'react'

export default function Productlist() {

  const products = [
    {
      name: 'Product1',
      type: 'Type1',
      finish: 'Finish1',
      imageUrl: 'path_to_image1.jpg',
    },
    {
      name: 'Product2',
      type: 'Type2',
      finish: 'Finish2',
      imageUrl: 'path_to_image2.jpg',
    },
    {
      name: 'Product3',
      type: 'Type3',
      finish: 'Finish3',
      imageUrl: 'path_to_image3.jpg',
    },
    {
      name: 'Product4',
      type: 'Type4',
      finish: 'Finish4',
      imageUrl: 'path_to_image4.jpg',
    },
    {
      name: 'Product5',
      type: 'Type5',
      finish: 'Finish5',
      imageUrl: 'path_to_image5.jpg',
    },
  ];


  return (
    <div className='relative w-full h-auto'>
      <div className='grid grid-cols-3 gap-y-16'>
         {products.map((product, index) => (
         <div key={index} className='flex flex-col px-2 py-3 border-2  rounded-lg w-fit gap-y-5 shadow-xl shadow-violet-300 mb-5'>
         <div className='bg-gray-200 w-52 h-52 rounded-lg'>
           <img src={product.imageUrl} alt={product.name}/>
         </div>
         <div  className='flex justify-center p-2'>
           <h1 className='font-semibold font-Poppins w-fit'>{product.name}</h1>
         </div>
         <div className='flex justify-between mx-3'>
           <h1 className='font-semibold font-Inter w-fit'>{product.type}</h1>
           <h1 className='font-semibold font-Inter w-fit'>{product.finish}</h1>
         </div>
         <div className='flex flex-col space-y-3'>
         <div className='flex justify-center w-full bg-violet-500 rounded-md py-1'>
           <button>
           <h1 className='font-bold font-Inter text-white'>Compare</h1>
           </button>
         </div>
         <div className='flex justify-center w-full bg-violet-500 rounded-md py-1'>
           <h1 className='font-bold font-Inter text-white'>More info</h1>
         </div>
         </div>
         </div>))}
      </div>
    </div>
  )
}
