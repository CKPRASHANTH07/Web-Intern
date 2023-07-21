import React,{useEffect, useState,useMemo} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip);

export default function Roundedstats() {


  const [input1,setInput1] = useState(0);
  const [input2,setInput2] = useState(0);
  const [inputd1,setInputd1]=useState(0);
  const [inputd2,setInputd2]=useState(0);
  const [inputd3,setInputd3]=useState(0);
  const [inputd4,setInputd4]=useState(0);
  const [count, setCount] = useState([0,0,0]);
  const targetValue = useMemo(() => [input1, inputd1, inputd3], [input1, inputd1, inputd3]);




   useEffect(()=>{ 
    const inputValue=70;
    const inputValue1=30;
    const inputValue2=60;
    setInput1(inputValue);
    setInput2(100 - inputValue);
    setInputd1(inputValue1);
    setInputd2(100-inputValue1);
    setInputd3(inputValue2);
    setInputd4(100-inputValue2);
    
    const durations = [5000,5000,5000];
    const increment = targetValue.map((value, index) =>
    Math.ceil(value / durations[index] * 10)
  );

  const timeout = setTimeout(() => {
    setCount((prevCounts) =>
      prevCounts.map((count, index) =>
        count < targetValue[index] ? count + increment[index] : count
      )
    );
  }, 10);

  return()=>clearTimeout(timeout)   


   },[count,targetValue]);


    const data={
        datasets:[{
          data:[input1,input2],
          backgroundColor: ['#38E54D','#001C30'],
        }]
      };

      const data1={
        datasets:[{
         data:[inputd1,inputd2],
         backgroundColor:['#F0DE36','#001C30']
        }]
      };

      const data2={
        datasets:[{
          data:[inputd3,inputd4],
          backgroundColor:['#FF0303','#001C30']
        }]
      };

      const options={
        responsive:true,
        cutout:'80%',
        layout:{
          padding:20,
        },
        borderWidth:5,
        borderJoinStyle:'round',
        plugins:{
          
        },
      };


      const myPlugin = {
        id: 'myPlugin',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          const xCoor = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
          const yCoor = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

          
          const dataValue = chart.data.datasets[0].data[0];
          ctx.save();
          ctx.font='bolder 44px sans-serif';
          ctx.fillStyle = '#423F3E';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${dataValue}%`, xCoor, yCoor);
          ctx.restore();
        },
    }


  return (
    <div className='relative mt-10 mx-36'>

     <div className='flex justify-start mx-2 my-7'>
      <h1 className='text-2xl font-bold font-Poppins'>Stats</h1>
     </div>
     <div className='flex flex-col justify-center w-fit'>
      <div className='flex flex-row justify-center px-5 rounded-lg w-fit gap-x-8'>
      {/* Stat 1 */}
       <div className='flex flex-col px-2 pb-2 overflow-hidden border-2 border-black rounded-lg shadow-lg shadow-slate-400 gap-y-4'>
        <Doughnut data={data} options={options} plugins={[myPlugin]} />
        <h1 className='text-xl font-extrabold text-center font-Inter'>No of Visitors</h1>
       </div>
      {/* Stat 2 */}
       <div className='flex flex-col px-2 pb-2 overflow-hidden border-2 border-black rounded-lg shadow-lg shadow-slate-400 gap-y-4'>
        <Doughnut data={data1} options={options} plugins={[myPlugin]} />
        <h1 className='text-xl font-extrabold text-center font-Inter'>No of Forms</h1>
       </div>
      {/* Stat 3 */}
      <div className='flex flex-col px-2 pb-2 overflow-hidden border-2 border-black rounded-lg shadow-lg shadow-slate-400 gap-y-4'>
        <Doughnut data={data2} options={options} plugins={[myPlugin]}  />
        <h1 className='text-xl font-extrabold text-center font-Inter'>No of Contracts made</h1>
       </div>
      </div>
     </div>
    </div>
  )
}
