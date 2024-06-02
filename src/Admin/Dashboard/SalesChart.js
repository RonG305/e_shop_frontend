import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesChart = () => {
  const series = [{
    name: 'Sales',
    data: [12000, 14000, 13000, 15000, 17000, 16000, 18000, 20000, 19000, 22000, 24000, 23000]  // Sample sales data for each month
  }];

  const options = {
    chart: {
      type: 'area',
      height: 350,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      type: 'category'
    },
    yaxis: {
      title: {
        text: 'Sales Amount (Kshs)'
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return "$" + y.toFixed(0);
          }
          return y;
        }
      }
    },
    fill: {
      opacity: 0.8,
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 0
    }
  };

  return (
    <div className='border border-slate-200  rounded-md mb-2 p-4'>
         <h4 className=' text-xl font-bold'>Sales Review</h4>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SalesChart;
