import React,{useEffect,useState} from 'react'

export default function Enquiryform() {

    const [data, setData] = useState([]);
    useEffect(() => {
      // Function to fetch data from the server
      const fetchData = async () => {
        try {
          const response = await fetch('http://52.23.177.30:8080/enquiry_form');
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
            <td className="px-4 py-3 font-bold text-center font-Inter">{item.Company_Name}</td>
            <td className="px-4 py-3 font-bold text-center text-gray-700 font-Inter">{item.query_time}</td>
            <td className='px-4 py-3 font-bold text-center font-Inter'>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
