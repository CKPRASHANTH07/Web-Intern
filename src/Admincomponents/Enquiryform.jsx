import React,{useEffect,useState} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'


export default function Enquiryform() {


  const [showProductDetails, setShowProductDetails] = useState(null);


  const toggleProductDetails = (item) => {
    setShowProductDetails((prevSelectedItem) => (prevSelectedItem === item ? null : item));
  };

    const [data, setData] = useState([]);
    useEffect(() => {
      // Function to fetch data from the server
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('Token')
          const response = await fetch('https://18.234.190.228:8080/enquiry_form',{
            method:"GET",
            headers : {
              'Authorization': `Bearer ${token}`,
            }
          });
          const jsonData = await response.json();
          setData(jsonData.queries); // Assuming data is an array of objects
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className='relative mt-16 mx-44'>

    <div className='flex justify-start mx-2 my-7'>
    <h1 className='text-2xl font-bold font-Poppins'>Enquiries</h1>
   </div>


    <table className="w-full mb-10 ml-5 border-2 border-black divide-y-2 divide-gray-900 rounded-lg table-fixed ">
      <thead className='my-10 tracking-wide text-white bg-violet-500'>
        <tr className='text-lg font-Poppins'>
          <th className="px-4 py-5 w-[5%]">S.NO</th>
          <th className="px-4 py-5 w-[25%]">Company name</th>
          <th className='px-4 py-5 w-[13%]'>Time</th>
          <th className='px-4 py-5 w-[10%]'>Status</th>
        </tr>
      </thead>
      <tbody className='divide-y-2 divide-gray-900'>
        {data.map((item) => (
          <tr key={item.query_no}>
            <td className='px-4 py-3 font-bold text-center font-Inter'>{item.query_no}</td>
            <td onClick={() => toggleProductDetails(item)} className="px-4 py-3 font-bold text-center font-Inter hover:cursor-pointer ">{item.Company_Name}</td>
            <td className="px-4 py-3 font-bold text-center text-gray-700 font-Inter">{item.query_time}</td>
            <td className='px-4 py-3 font-bold text-center font-Inter'>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>





    {showProductDetails && (
      <div className='absolute w-1/2 px-5 py-5 border-2 border-black rounded-lg bg-white/80 backdrop-blur-lg h-fit top-10'>
       <div className='flex flex-row justify-between '>
        <div>
        <h1 className='font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-Poppins'>Application details</h1>
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
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Company name&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Company_Name}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Applicant name&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Application_No}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>E-mail&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Email}</p></div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Product name&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Product_Name}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Quantity&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Quantity}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Phone number&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Phone_Number}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Message&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.Message}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Submitted time&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.query_time}</p> </div>
         <div className='flex gap-x-2'><p className='font-bold text-slate-500 font-Roboto'>Application status&#xa0;&#xa0;:</p><p className='font-bold font-Inter'>{showProductDetails.status}</p> </div>
         </div>
       </div>
      </div>
    )}
    </div>
  )
}
