import React from 'react';
import ReactApexChart from 'react-apexcharts';

const OrderChart = () => {
  const series = [{
    name: 'Orders',
    data: [23, 11, 22, 27, 13, 22, 37]
  }, {
    name: 'Returns',
    data: [5, 3, 8, 7, 2, 5, 6]
  }];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        endingShape: 'rounded'
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    fill: {
      opacity: 1
    },
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      type: 'category'
    },
    yaxis: {
      title: {
        text: 'Number of Orders'
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " orders";
          }
          return y;
        }
      }
    }
  };

  return (
    <div className='border border-slate-200  rounded-md p-4 '>
      <h4 className=' text-xl font-bold'>Orders Review</h4>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default OrderChart;
