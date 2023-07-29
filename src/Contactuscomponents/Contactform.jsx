import React from 'react'
import { useState } from 'react'
import bpo from '../images/bpo.jpg'
import emailjs from '@emailjs/browser'
import { Switch } from '@headlessui/react'
import {FaCheckCircle} from 'react-icons/fa'
import {FaRegTimesCircle} from 'react-icons/fa'
import countriesData from 'country-list';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const countries = countriesData.getData();

export default function Contactform() {

  const [agreed, setAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const [CompanyName, setCompanyName] = useState('');
  const [ApplicationName, setApplicationName] = useState('');
  const [Email, setEmail] = useState('');
  const [ProductName, setProductName] = useState('');
  const [Quantity, setQuantity] = useState();
  const [CountryCode, setCountryCode] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Message, setMessage] = useState('');

  const [Alert, setAlert] = useState(null)

  const handleSubmit= (event) => {
    event.preventDefault();

    // Your EmailJS service and template IDs
    const customerTemplateId = 'template_zx4o0tb';

    // Send the acknowledgment email to the customer
    emailjs.send('service_de4keik', customerTemplateId, {
      user_name: ApplicationName,
      to_mail:Email,
    }, 'ZTic5LurSD4Uvq3q_')
    .then((response) => {
      console.log('Customer acknowledgment email sent!', response);
      resetform();
      setAlert('Contact details sent Successully check your mail')
      setIsSuccess(true)
      setTimeout(() => {
        setAlert(null);
      },7000);
    })
    .catch((error) => {
      setAlert('Failed to send check your credentials', error);
      setIsSuccess(false)
      setTimeout(()=>{
        setAlert(null);
      },7000);
    });
  }

  function resetform(){
    setAgreed(false);
    setApplicationName('');
    setCompanyName('')
    setCountryCode('us')
    setEmail('')
    setMessage('')
    setPhoneNumber('')
    setProductName('')
    setQuantity('')
  }

  return (
    <div className='relative'>
    <div className='mx-10 lg:flex xl:flex lg:justify-around xl:justify-around'>
    <div className='lg:mx-20 xl:mx-20'>
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
            Applicant Name
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
          <div className="flex flex-col my-5 gap-y-3">
          <label htmlFor="country" className="block text-lg font-semibold leading-6 text-gray-900 font-Inter">
          Country Code
           </label>
        <select
          value={CountryCode}
          onChange={(e)=>setCountryCode(e.target.value)}
          id="country"
          name="country"
          className="h-full px-2 py-2 font-bold border-2 border-gray-300 rounded-md font-Poppins sm:text-sm"
          required
        >
         {countries.map((country, index) => (
                 <option key={index} value={country.code}>
                 {`${country.code} ${country.name}`}
                </option>))}
        </select>
          </div>
        <div className="flex flex-col min-w-full my-5 gap-y-3">
          <label htmlFor="phone-number" className="block text-lg font-bold leading-6 text-gray-900 font-Inter">
            Phone number
          </label>
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
              className=" w-full rounded-md border-2 border-gray-300 px-3.5 py-2 font-Inter font-semibold text-gray-900  sm:text-sm sm:leading-6"
              required
            />
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

    {/*  Success message */}
    {Alert&&(
      <div className='flex justify-center'>
     <div className={`place-items-center px-3 gap-x-2 rounded-lg mt-10 flex justify-center py-3 ${isSuccess?'bg-green-300':'bg-red-300'} ${isSuccess?'border-green-600':'border-red-600'} border-2 w-fit`} >
        <div>
        {isSuccess?<FaCheckCircle style={{color:'#16A34A'}} size='20px'  />:<FaRegTimesCircle style={{color:'#DC2626'}} size='20px' />}
        </div>
       <h1 className={`font-bold ${isSuccess?'text-green-600':'text-red-600'} font-Inter`}>{Alert}</h1>
     </div>
     </div>
     )}
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