import React from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto"
interface LineGraphProps{
    data:any;
}

// Define the LineGraph component
const Linegraph: React.FC <LineGraphProps> =({data}) =>{
        // Define the chart data using the provided data
    const chartData = {
        labels: Object.keys(data.cases),
        datasets:[
            {
                label: "Cases", // Set label for the dataset
                data: Object.values(data.cases),// Set data points as the values of the cases data
                borderColor: "lightblue",// Set border color for the line
                fill: false,// Do not fill area under the line
            },
        ],
    };
  return (
    <Line 
    data={chartData}// Pass chart data to the Line component
    width={'100%'}
    height={'100%'}
    />
  );
};

export default Linegraph;