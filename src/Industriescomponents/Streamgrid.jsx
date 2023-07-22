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
        <h1 className='text-xl text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-bold font-Poppins'>Explore your Way</h1>
      </div>
      {/* Stream grid */}
      <div className='grid grid-cols-3 mx-20 my-10 gap-y-7 gap-x-7 '>
             <Link to='/Industries/Shipping'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
               <p className='font-Inter text-lg font-bold'>Shipping and Logistics Labels</p>
               <LiaShippingFastSolid size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Inventory'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Inventory Labels</p>
             <MdOutlineInventory size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Product'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Product Labels</p>
             <BiSolidBox size='40px' style={{color:'#8B5CF6'}} />
             </div>
             </Link>
             <Link to='/Industries/Barcode'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Barcode Labels</p>
             <BiBarcodeReader size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Foodandbeverage'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Food and Beverage Labels</p>
             <IoFastFood   size="40px" style={{ color: '#8B5CF6' }}  />
             </div>
             </Link>
             <Link to='/Industries/Pharmaceutical'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Pharmaceutical Labels</p>
             <GiMedicines  size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Retail'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Retail Labels</p>
             <BiSolidShoppingBags size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Electronic'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Electronic Labels</p>
             <FaMicrochip  size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Security'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Security Labels</p>
             <MdOutlineSecurity size="40px" style={{ color: '#8B5CF6' }}  />
             </div>
             </Link>
             <Link to='/Industries/Warehouse'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Warehouse Labels</p>
             <LuWarehouse size="40px" style={{ color: '#8B5CF6' }} />
             </div>
             </Link>
             <Link to='/Industries/Compliance'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Compliance Label</p>
             <MdFeedback size='40px' style={{color:'#8B5CF6'}} />
             </div> 
             </Link>
             <Link to='/Industries/Safety'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Safety Labels</p>
             <RiSafe2Line size='40px' style={{color:'#8B5CF6'}} />
             </div> 
             </Link>
             <Link to='/Industries/Custom'>
             <div className='max-w-xl px-3 py-5 border-2 border-black rounded-lg flex flex-row justify-between pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 gap-x-5 place-items-center shadow-lg'>
             <p className='font-Inter text-lg font-bold'>Custom Labels</p>
             <TiSpanner size='40px' style={{color:'#8B5CF6'}} />
             </div>
             </Link>
      </div>
    </div>
  )
}
