import React from 'react'
import logo from '../assets/logo.svg'

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


function Home() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

    const datas = {
      labels:['mon', 'tue', 'wed', 'tur', 'fri', 'sun', 'sat'],
        datasets: [
          {
            label: 'Dataset 1',
            data:[10,45,52,31,21,30,27],
            backgroundColor: 'hsl(10, 79%, 65%)',
            hoverBackgroundColor:'hsl(186, 34%, 60%)',
            borderRadius:'10px',
          },
        ],
      }

    
    return (
        <div className='flex justify-center items-start max-w-md mx-auto h-screen flex-col'>

            <div className="top bg-softred hsl(10, 79%, 65%) text-white  rounded-2xl w-full p-5 mb-4 flex justify-between items-start">
                <div className="text">
                <p className='mb-1'>My balance</p>
                <p className='text-xl font-bold'>$921.48</p>
                </div>
                <img src={logo} alt="" />
             
            </div>
            <div className="bottom bg-white w-full  h-96 rounded-2xl  flex flex-col justify-between p-8">
                <p className='text-2xl font-bold text-red-900'> Spending - Last 7 days</p>
      
                <Bar data={datas}  />
              

                <div className="reviews flex justify-between items-center">
                    <div className="left">
                        <p className='font-semibold text-gray-500'>Total this month</p>
                        <p className='text-4xl font-bold text-red-900'>$478.33</p>


                    </div>

                    <div className="right flex flex-col ">
                        <p className='self-end  text-red-900 font-bold'>+2.4%</p>
                        <p className='font-normal text-gray-500'> from last month</p>


                    </div>
                </div>

                
              

            </div>




        </div>
    )
}

export default Home