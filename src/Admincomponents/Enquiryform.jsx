import React,{useEffect,useState} from 'react'

export default function Enquiryform() {

    const [data, setData] = useState([]);

    useEffect(() => {
      // Function to fetch data from the server
      const fetchData = async () => {
        try {
          const response = await fetch('your_server_endpoint');
          const jsonData = await response.json();
          setData(jsonData); // Assuming data is an array of objects
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className='relative mt-16 mx-36'>

    <div className='flex justify-start mx-2 my-7'>
    <h1 className='text-2xl font-bold font-Poppins'>Enquiries</h1>
   </div>


    <table className="w-auto border border-black border-dashed divide-y-2 divide-gray-900 table-fixed">
      <thead>
        <tr className=''>
          <th className="px-4 py-2 w-[5%]">S.NO</th>
          <th className="px-4 py-2 w-[30%]">Company name</th>
          <th className='px-4 py-2 w-[7%]'>Time</th>
          <th className='px-4 py-2 w-[10%]'>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-2">{item.column1Data}</td>
            <td className="px-4 py-2">{item.column2Data}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
