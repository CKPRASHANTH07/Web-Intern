import React from 'react'
import { Link } from 'react-router-dom'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {MdOutlineInventory} from 'react-icons/md'
import {BiBarcodeReader} from 'react-icons/bi'
import {IoFastFood} from 'react-icons/io5'
import {GiMedicines} from 'react-icons/gi'
import {BiSolidShoppingBags} from 'react-icons/bi'
import {FaMicrochip} from 'react-icons/fa6'
import {MdOutlineSecurity} from 'react-icons/md'
import {LuWarehouse} from 'react-icons/lu'
import {MdFeedback} from 'react-icons/md'
import {RiSafe2Line} from 'react-icons/ri'
import {BiSolidBox} from 'react-icons/bi'
import {TiSpanner} from 'react-icons/ti'

export default function Streamgrid() {
  return (
    <div className='relative mt-10'>
      <div className='flex justify-start mx-20'>
        <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'>Explore your Way</h1>
      </div>
      {/* Stream grid */}
      <div className='my-10 lg:mx-20 xl:mx-20 sm:mx-5 lg:grid xl:grid lg:grid-cols-3 xl:grid-cols-3 sm:grid sm:grid-cols-1 gap-y-7 gap-x-7 '>
             <Link to='/Industries/Shipping'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
               <p className='text-lg font-bold font-Inter'>Shipping and Logistics Labels</p>
               <LiaShippingFastSolid size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Inventory'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Inventory Labels</p>
             <MdOutlineInventory size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Product'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Product Labels</p>
             <BiSolidBox size='40px' style={{color:'#8B5CF6'}} />
             </div>
             </Link>
             <Link to='/Industries/Barcode'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Barcode Labels</p>
             <BiBarcodeReader size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Foodandbeverage'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Food and Beverage Labels</p>
             <IoFastFood   size="40px" style={{ color: '#8B5CF6' }}  />
             </div>
             </Link>
             <Link to='/Industries/Pharmaceutical'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Pharmaceutical Labels</p>
             <GiMedicines  size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Retail'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Retail Labels</p>
             <BiSolidShoppingBags size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Electronic'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Electronic Labels</p>
             <FaMicrochip  size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Security'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Security Labels</p>
             <MdOutlineSecurity size="40px" style={{ color: '#8B5CF6' }}  />
             </div>
             </Link>
             <Link to='/Industries/Warehouse'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Warehouse Labels</p>
             <LuWarehouse size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Compliance'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Compliance Label</p>
             <MdFeedback size='40px' style={{color:'#8B5CF6'}} />
             </div> 
             </Link>
             <Link to='/Industries/Safety'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Safety Labels</p>
             <RiSafe2Line size='40px' style={{color:'#8B5CF6'}} />
             </div> 
             </Link>
             <Link to='/Industries/Custom'>
             <div className='flex flex-row justify-between max-w-xl px-3 py-5 pr-10 transition duration-300 ease-in-out delay-150 border-2 border-black rounded-lg shadow-lg hover:-translate-y-1 hover:scale-110 gap-x-5 place-items-center'>
             <p className='text-lg font-bold font-Inter'>Custom Labels</p>
             <TiSpanner size='40px' style={{color:'#8B5CF6'}} />
             </div>
             </Link>
      </div>
    </div>
  )
}
