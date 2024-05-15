import React from "react";
import { Link } from "react-router-dom";


const dealsData = [
    {
      imageUrl: '/images/med1.png',
      productName: 'Product 1',
      price: '$19.99'
    },
    {
      imageUrl: '/images/med2.png',
      productName: 'Product 2',
      price: '$24.99'
    },

    {
        imageUrl: '/images/med1.png',
        productName: 'Product 1',
        price: '$19.99'
      },
      {
        imageUrl: '/images/med2.png',
        productName: 'Product 2',
        price: '$24.99'
      },
    
  ];
  

const DealsCard = ({ imageUrl, productName, price }) => {
  return (
    <Link to={`/main/product-overview`} className="hover:bg-gray-300 bg-gray-200 transition-all ease-out delay-150 p-2">
      <img src={imageUrl} alt={productName} loading="lazy" />
      <p className="">{productName}</p>
      <p className=" text-orange-400">Kshs {price}</p>
    </Link>
  );
};

const Deals = ({ deals }) => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-center flex-col my-4">
        <p className="text-xl font-bold">Deals and Outlet</p>
        <p>Todays deal & More</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {dealsData.map((deal, index) => (
          <DealsCard key={index} imageUrl={deal.imageUrl} productName={deal.productName} price={deal.price} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
