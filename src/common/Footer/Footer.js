import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 py-8 text-sm px-3">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Company Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className=" font-bold text-2xl mb-2">MedSwift</h3>
          <p></p>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className="text-lg font-bold mb-2">Useful links</h3>
          <ul>
            <li>Bout Medswift</li>
            <li>Our services</li>
            <li>How to shop in Medscrift</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className="text-lg font-bold mb-2">Customer Service</h3>
          <ul>
            <li>Payment methos</li>
            <li>Money back guarantee</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h3 className="text-lg font-bold mb-2">My Account</h3>
          <ul>
            <li>Sign in</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track my order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-col ">
        <p className=' text-lg font-bold '>Subscribe to our Newsletter</p>
      <p className="text-sm md:text-base">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div className=" mb-4 md:mb-0">
          <input
            type="email"
            className="bg-gray-700 border border-gray-600 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your email"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">
            Subscribe
          </button>
        </div>
        
      </div>

    
    </footer>
  );
};

export default Footer;
