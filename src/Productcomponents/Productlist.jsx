import React,{useState} from 'react'
import ribbon from '../images/ribbons.png'
import fbrclbl from '../images/fabric labe (2).png'
import tt from '../images/tt.png'
import jl from '../images/jwllbl.png'
import hng from '../images/hngtg.png'
import stckr from '../images/stckr.png'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Productlist({selectedCategory}) {

  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [showComparison, setShowComparison] = React.useState(false);
  const [showProductDetails, setShowProductDetails] = useState(null);


  const toggleProductDetails = (product) => {
    setShowProductDetails((prevProduct) => (prevProduct === product ? null : product));
  };



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
      Usage:'Electronic',
      Size: '1 inch wide',
      Colors:' Red, Blue, Green, Yellow',
      Material:'Polyester',
      Pattern:'Striped',
    },
    {
      name: 'Fabric Labels',
      type: 'Cloth',
      finish: 'Smooth cotton',
      imageUrl:fbrclbl,
      usage:'Retail',
      Usage: 'Garments',
      Size: '2.5 cm x 5 cm',
      Colors: 'White, Black',
      Material: 'Cotton',
      Design: 'Customizable',
    },
    {
      name: 'Twill Tape Labels',
      type: 'Cloth',
      finish: 'Raw surface',
      imageUrl:tt,
      Usage: 'Bags and Accessories',
      Size: '3/4 inch wide',
      Colors: 'Natural, Brown',
      Material: 'Twill',
      Pattern: 'Solid',
    },
    {
      name: 'Jewellery labels',
      type: 'Plastic',
      finish: 'Glossy',
      imageUrl:jl,
      Usage: 'Jewelry and Accessories',
      Size: '1.5 cm x 1.5 cm',
      Colors: 'Gold, Silver',
      Material: 'PVC',
      Shape: 'Round',
    },
    {
      name: 'Hang Tags',
      type: 'Paper',
      finish: 'Matte',
      imageUrl:hng,
      Usage: 'Apparel and Footwear',
    Size: '3 inches x 2 inches',
    Colors: 'White, Kraft',
    Material: 'Cardstock',
    Shape: 'Rectangle',
    },
    {
      name:"Brand Stickers",
      type:'Paper',
      finish:'Polished',
      imageUrl:stckr,
      Usage: 'Packaging and Promotions',
    Size: '2 inches diameter',
    Colors: 'Customizable',
    Material: 'Glossy paper',
    Shape: 'Circle',
    },
  ];




  return (
    <div className='relative w-full h-auto'>
      <div className='grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-y-16'>
      {products.map((product) =>
        product.type.includes(selectedCategory)? 
        (
          <div key={product.name} className='flex flex-col px-2 py-3 mb-5 border-2 rounded-lg shadow-xl w-fit gap-y-5 shadow-violet-300'>
            <div className='overflow-hidden bg-gray-200 rounded-lg h-52 w-52'>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className='flex justify-center p-2'>
              <h1 className='font-semibold font-Poppins w-fit'>{product.name}</h1>
            </div>
            <div className='flex justify-between mx-3'>
              <h1 className='font-semibold text-orange-400 font-Inter w-fit'>{product.type}</h1>
              <h1 className='font-semibold text-gray-600 font-Inter w-fit'>{product.finish}</h1>
            </div>
            <div className='flex flex-col space-y-3'>
              <button onClick={() => toggleCompare(product)}>
                <div className='flex justify-center w-full py-1 rounded-md bg-violet-500'>
                  <h1 className='font-bold text-white font-Inter'>Compare</h1>
                </div>
              </button>
              <button onClick={() => toggleProductDetails(product)}>
                <div className='flex justify-center w-full py-1 rounded-md bg-violet-500'>
                  <h1 className='font-bold text-white font-Inter'>More info</h1>
                </div>
              </button>
            </div>
          </div>
        )
         : null
      )}
      </div>
           
      {showProductDetails && (
        <div className='absolute w-1/2 px-5 py-5 border-2 border-black rounded-lg bg-white/80 backdrop-blur-lg h-fit top-10'>
         <div className='flex flex-row justify-between '>
          <div>
          <h1 className='font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'>More details</h1>
          </div>
          <div>
           <button className='px-3 py-1 rounded-lg' onClick={() => toggleProductDetails(null)}>
             <AiOutlineCloseCircle  style={{color:'#810CA8'}}  size='25px' />
           </button>
          </div>
         </div>
         <div className=''>
          <h1 className='font-bold tracking-wide text-violet-500 font-Poppins'>{showProductDetails.name}</h1>
           <div className='flex flex-col mt-5 gap-y-3'>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Type&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.type}</p> </div>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Finish&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.finish}</p> </div>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Usage&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Usage}</p> </div>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Color&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Colors}</p> </div>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Size&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Size}</p> </div>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Material&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Material}</p> </div>
           <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Pattern&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Pattern}</p> </div>
           </div>
         </div>
        </div>
      )}
</div>
);
}


