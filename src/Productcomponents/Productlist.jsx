import React from 'react'
import ribbon from '../images/ribbons.png'
import fbrclbl from '../images/fabric labe (2).png'
import tt from '../images/tt.png'
import jl from '../images/jwllbl.png'
import hng from '../images/hngtg.png'
import stckr from '../images/stckr.png'

export default function Productlist() {

  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [showComparison, setShowComparison] = React.useState(false);



  const toggleCompare = (product) => {
    const index = selectedProducts.findIndex((p) => p.name === product.name);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      const updatedProducts = [...selectedProducts];
      updatedProducts.splice(index, 1);
      setSelectedProducts(updatedProducts);
    }
    setShowComparison(!showComparison);
  };
  


  const products = [
    {
      name: 'Fancy Ribbons',
      type: 'Label',
      finish: 'Synthetic',
      imageUrl:ribbon,
    },
    {
      name: 'Fabric Labels',
      type: 'Cloth',
      finish: 'Smooth cotton',
      imageUrl:fbrclbl,
    },
    {
      name: 'Twill Tape Labels',
      type: 'Cloth',
      finish: 'Raw surface',
      imageUrl:tt,
    },
    {
      name: 'Jewellery labels',
      type: 'Plastic',
      finish: 'Glossy',
      imageUrl:jl,
    },
    {
      name: 'Hang Tags',
      type: 'Paper',
      finish: 'Matte',
      imageUrl:hng,
    },
    {
      name:"Brand Stickers",
      type:'Paper',
      finish:'Polished',
      imageUrl:stckr,
    },
  ];


  return (
    <div className='relative w-full h-auto'>
      <div className='grid grid-cols-3 gap-y-16'>
         {products.map((product, index) => (
         <div key={index} className='flex flex-col px-2 py-3 mb-5 border-2 rounded-lg shadow-xl w-fit gap-y-5 shadow-violet-300'>
         <div className='overflow-hidden bg-gray-200 rounded-lg h-52 w-52'>
           <img src={product.imageUrl} alt={product.name}/>
         </div>
         <div  className='flex justify-center p-2'>
           <h1 className='font-semibold font-Poppins w-fit'>{product.name}</h1>
         </div>
         <div className='flex justify-between mx-3'>
           <h1 className='font-semibold text-orange-400 font-Inter w-fit'>{product.type}</h1>
           <h1 className='font-semibold text-gray-600 font-Inter w-fit'>{product.finish}</h1>
         </div>
         <div className='flex flex-col space-y-3'>
         <button onClick={()=>toggleCompare(product)}>
         <div className='flex justify-center w-full py-1 rounded-md bg-violet-500'>
           <h1 className='font-bold text-white font-Inter'>Compare</h1>
         </div>
         </button>
          <button>
         <div className='flex justify-center w-full py-1 rounded-md bg-violet-500'>
           <h1 className='font-bold text-white font-Inter'>More info</h1>
         </div>
         </button>
         </div>
         </div>))}
      </div>
      <div>
</div>
</div>
  )
}


