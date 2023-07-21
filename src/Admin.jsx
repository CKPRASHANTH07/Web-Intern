import React from 'react'
import Roundedstats from './Admincomponents/Roundedstats'
import Enquiryform from './Admincomponents/Enquiryform'
import Settings from './Admincomponents/Settings'

export default function Admin() {
  return (
    <div className='relative'>
        <Roundedstats/>
        <Enquiryform/> 
        <Settings/>
    </div>
  )
}
