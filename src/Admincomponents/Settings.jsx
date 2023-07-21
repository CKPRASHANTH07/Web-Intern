import React from 'react'
import {FiSettings} from 'react-icons/fi'

export default function Settings() {
  return (
    <div className='relative mt-10 mx-20'>
      <div className='border border-black px-3 py-3 flex flex-col w-fit rounded-lg'>
      {/*Account information*/}
       <div className='flex flex-row gap-x-3 place-items-center'>
        <FiSettings style={{color:'darkcyan'}} />
        <h1 className='font-Inter font-bold'>Passwords and settings</h1>
       </div>
      </div>
    </div>
  )
}
