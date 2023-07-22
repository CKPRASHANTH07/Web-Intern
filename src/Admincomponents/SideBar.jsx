import React from 'react'
import {BsGear} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {GrUserSettings} from 'react-icons/gr'
import {MdOutlineFeedback} from 'react-icons/md'

export default function SideBar() {
  return (
    <div className='absolute top-14'>
       <div className='flex flex-col px-4 border-2 border-l-0 border-black rounded-r-lg py-7 gap-y-7'>
        <BsGear size='25px'/>
        <CgProfile size='25px' />
        <GrUserSettings size='25px' />
        <MdOutlineFeedback size='25px' />
       </div>
    </div>
  )
}
