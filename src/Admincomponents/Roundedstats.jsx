import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip);

export default function Roundedstats() {


    const data = {
        labels: [
          'Red',
          'Blue',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      };
      const data1={
        datasets:[{
         data:[100,300],
         backgroundColor:['green','blue']
        }]
      }

      const data2={
        datasets:[{
          data:[500,200],
          backgroundColor:['orange','grey']
        }]
      }

      const config = {
        type: 'doughnut',
        data: data,
      };
      const options={
        responsive:true,
        centertext: "123"
      };
  return (
    <div className='relative'>
     <div className='border-2 h-36 w-fit px-10 flex gap-x-10 border-black rounded-lg'>
    <Doughnut data={data} options={options} />
    <Doughnut data={data1} options={options}/>
    <Doughnut data={data2} options={options}/>
     </div>
    </div>
  )
}
