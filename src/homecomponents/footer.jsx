import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsYoutube} from 'react-icons/bs'
import {FaCopyright,FaProductHunt,FaHandsHelping} from 'react-icons/fa'
import {FcPrivacy} from 'react-icons/fc'
import {LiaStarSolid} from 'react-icons/lia'
import {VscWorkspaceTrusted,VscFeedback} from 'react-icons/vsc'
import {MdEmail} from 'react-icons/md'
import {TbDeviceLandlinePhone} from 'react-icons/tb'
export default function Footer() {
  return (
    <div className='relative'>
     <div className='flex-col justify-center'>
      <div className='flex justify-center space-x-3 place-items-center'>
        <FaCopyright style={{color:"#8b5cf6"}} size={30}/>
        <h1 className='text-xl font-Poppins text-violet-500'>All Rights Reserved</h1>
      </div>
      <div className='flex justify-center w-full'>
      <div className='flex lg:flex-row xl:flex-row sm:flex-col gap-x-32'>
        <div className='flex flex-col space-y-5 mt-7 mb-7 '>
          <h1 className='font-Poppins text-violet-500'>Follow us on</h1>
        <div className='flex flex-row space-x-3 place-items-center'>
         <BsFacebook style={{color:"#8b5cf6"}}/>
         <h1 className='font-bold font-Poppins'>Facebook</h1>
        </div>
        <div className='flex flex-row space-x-3 place-items-center'>
         <BsTwitter style={{color:"#8b5cf6"}}/>
         <h1 className='font-bold font-Poppins'>Twitter</h1>
        </div>
        <div className='flex flex-row space-x-3 place-items-center'>
         <BsInstagram style={{color:"#8b5cf6"}}/>
         <h1 className='font-bold font-Poppins'>Instagram</h1>
        </div>
        <div className='flex flex-row space-x-3 place-items-center'>
         <BsYoutube style={{color:"#8b5cf6"}}/>
         <h1 className='font-bold font-Poppins'>Youtube</h1>
        </div>
      </div>
      <div className='flex flex-col space-y-5 mt-7 mb-7'>
        <div className='flex'>
         <h1 className='font-Poppins text-violet-500'>Rate Us on</h1>
        </div> 
         <div className='flex flex-row'>
         <LiaStarSolid style={{color:"yellow"}} size={30}/>
         <LiaStarSolid style={{color:"yellow"}} size={30}/>
         <LiaStarSolid style={{color:"yellow"}} size={30}/>
         <LiaStarSolid style={{color:"yellow"}} size={30}/>
         <LiaStarSolid style={{color:"yellow"}} size={30}/>
         </div>
         <div className='flex flex-row space-x-3 place-items-center'>
         <VscWorkspaceTrusted style={{color:"#8b5cf6"}}/>
         <h1 className='font-Poppins'>Trust Pilot</h1>
         </div>
         <div className='flex flex-row space-x-3 place-items-center'>
         <FaProductHunt style={{color:"#8b5cf6"}}/>
         <h1 className='font-Poppins'>Product hunter</h1>
         </div>
      </div>
      <div className='flex flex-col space-y-5 mt-7 mb-7'>
        <div className='flex'>
         <h1 className='font-Poppins text-violet-500'>Write us on</h1>
        </div>
        <div className='flex flex-row space-x-3 place-items-center'>
         <MdEmail style={{color:"#8b5cf6"}}/>
         <h1 className='font-Poppins'>printmajesty@gmail.com</h1>
         </div>
         <div className='flex flex-row space-x-3 place-items-center'>
         <VscFeedback style={{color:"#8b5cf6"}}/>
         <h1 className='font-Poppins'>feedback.com</h1>
         </div>
         <div className='flex'>
       <h1 className='font-Poppins text-violet-500'>Reach us</h1>
      </div>
      <div className='flex flex-row space-x-3 place-items-center'>
      <TbDeviceLandlinePhone style={{color:"#8b5cf6"}} />
      <h1 className='font-Poppins'> 0422 - 60685 </h1>
      </div>
      </div>
      <div className='flex flex-col space-y-5 mt-7 mb-7'>
      <div className='flex'>
       <h1 className='font-Poppins text-violet-500'>White papers</h1>
      </div>
      <div className='flex flex-row space-x-3 place-items-center'>
      <FaHandsHelping style={{color:"#8b5cf6"}} />
      <h1 className='font-Poppins'>Terms of Agreement</h1>
      </div>
      <div className='flex flex-row space-x-3 place-items-center'>
      <FcPrivacy style={{color:"#8b5cf6"}} />
      <h1 className='font-Poppins'>Privacy policy</h1>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
