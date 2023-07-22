import React from 'react'
import Roundedstats from './Admincomponents/Roundedstats'
import Enquiryform from './Admincomponents/Enquiryform'
import SideBar from './Admincomponents/SideBar'

export default function Admin() {
  return (
    <div className='relative'>
        <Roundedstats/>
        <Enquiryform/> 
        <SideBar/>
    </div>
  )
}
