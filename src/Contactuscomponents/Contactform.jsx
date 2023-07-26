import React from 'react'
import { useState } from 'react'
import bpo from '../images/bpo.jpg'

import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Contactform() {

  const [agreed, setAgreed] = useState(false);

  const [CompanyName, setCompanyName] = useState('');
  const [ApplicationName, setApplicationName] = useState('');
  const [Email, setEmail] = useState('');
  const [ProductName, setProductName] = useState('');
  const [Quantity, setQuantity] = useState();
  const [CountryCode, setCountryCode] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Message, setMessage] = useState('');

  const [data, setdata] = useState('');

  function ResetForm(){
    setCompanyName('')
    setApplicationName('')
    setEmail('')
    setProductName('')
    setQuantity('')
    setCountryCode('US')
    setPhoneNumber('')
    setMessage('')
    setAgreed(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // " 54.173.211.48"
     try{
      const response = await fetch('https://3.88.43.55:8080/enquiry_form',{
        method : "POST",
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify({ CompanyName, ApplicationName, Email, ProductName, Quantity, CountryCode, PhoneNumber, Message})
      })
      const data = await response.json();
      setdata(data.status)
      ResetForm();
     }
     catch(error){
      alert("Backend Error")
     }
  }


  return (
    <div className='relative'>
    <div className='flex justify-around mx-10'>
    <div className='mx-20'>
      <div className="mx-auto mt-10 text-center max-w-2x">
        <h1 className="text-xl text-transparent underline underline-offset-8 decoration-violet-500 decoration-4 font-Poppins bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text sm:text-4xl">Contact sales</h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-14">
       <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-lg font-bold leading-6 text-gray-900 font-Inter">
            Company Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              value={CompanyName}
              onChange={(e)=>setCompanyName(e.target.value)}
              name="company"
              id="company"
              autoComplete="organization"
              className="font-Inter font-semibold w-full rounded-md px-3.5 py-2 text-gray-900 border-2 border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-lg font-bold leading-6 text-gray-900 font-Inter">
            Application Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              value={ApplicationName}
              onChange={(e)=>setApplicationName(e.target.value)}
              name="company"
              id="company"
              autoComplete="organization"
              className="font-Inter font-semibold w-full rounded-md px-3.5 py-2 text-gray-900 border-2 border-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900 font-Inter">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              id="email"
              autoComplete="email"
              className="font-Inter font-semibold w-full rounded-md border-2 border-gray-300 px-3.5 py-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div className=''>
        <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900 font-Inter">
            Product Name
          </label>
        <div className="mt-2.5">
          <input
            type="text"
            value={ProductName}
            onChange={(e)=>setProductName(e.target.value)}
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="font-Inter font-semibold w-full rounded-md border-2 border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
      <div>
      <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900 font-Inter">
            Quantity
          </label>
        <div className="mt-2.5">
          <input
            type="number"
            value={Quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            name="last-name"
            placeholder=''
            id="last-name"
            autoComplete="family-name"
            className="font-Inter font-semibold w-full rounded-md border-2 border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-lg font-bold leading-6 text-gray-900 font-Inter">
            Phone number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                value={CountryCode}
                onChange={(e)=>setCountryCode(e.target.value)}
                id="country"
                name="country"
                className="h-full px-2 py-0 border-2 border-gray-300 rounded-md sm:text-sm"
                required
              >
                <option className='font-bold font-Poppins'>US</option>
                <option className='font-bold font-Poppins'>CA</option>
                <option className='font-bold font-Poppins'>EU</option>
              </select>
            </div>
            <input
              type='tel'
              value={PhoneNumber}
              onChange={(e) => {
                const numericRegex = /^[0-9]*$/; // Regular expression to match only numeric characters
                if (numericRegex.test(e.target.value)) {
                  setPhoneNumber(e.target.value);
                }
              }}
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className=" w-full rounded-md border-2 border-gray-300 px-3.5 py-2 pl-20 font-Inter font-semibold text-gray-900  sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-lg font-bold leading-6 text-gray-900 font-Inter">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
            value={Message}
            onChange={(e)=>setMessage(e.target.value)}
              name="message"
              id="message"
              rows={4}
              className="font-Inter font-semibold w-full rounded-md border-2 border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              defaultValue={''}
              required
            />
          </div>
        </div>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex items-center h-6">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="font-bold leading-6 text-gray-600 text-md font-Inter">
            By selecting this, you agree to our{' '}
            <a href="bla" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group>
      </div>
      <div className="mt-10">
        <button
        disabled={agreed ? false : true}
          type="submit"
          className={`${agreed ? 'bg-violet-500' :'bg-gray-400'} w-full rounded-md bg-gray-400 font-Poppins px-3.5 py-2.5 tracking-wide text-center text-lg font-semibold text-white shadow-sm`}
        >
          Let's talk
        </button>
      </div>
    </form>
    </div>
    <div className='flex flex-col max-w-xl pt-10 mx-10 my-10 gap-y-10 max-h-xl'>
    <h1 className='text-2xl text-center font-Poppins'>Our Team will reach you in mins</h1>
     <div className='pt-5'>
     <img className='' src={bpo} alt='' />
     </div>
     <div className='flex flex-col px-5 py-5 shadow-lg gap-y-5 rounded-xl bg-violet-500'>
      <h1 className='text-xl font-semibold text-center text-white font-Poppins'>Where we work !</h1>
      <p className='text-lg font-bold tracking-wide text-center text-white font-Inter'>Print  Majesty Pvt. Ltd.Ground Floor, Plot No. 105,Marol Co – op Industrial Estate,Mathuradas Vasanji Road, Marol,Andheri East, Mumbai – 400 059.
      </p>
     </div>
   </div>
   </div>
  </div>
  )
}
