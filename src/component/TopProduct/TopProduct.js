import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopProduct.css';

const TopProduct = () => {
  const [currentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, [currentIndex]);

  return (
    <div className="fixed-bg">
      <div className="content-container" data-aos="fade-left">
        <h2 className="text-xl md:text-xl lg:text-3xl font-bold mb-2 leading-relaxed pr-8 p-5" data-aos="fade-right">
          Top Petroleum Product Supplier Of India
        </h2>
        <p className="text-sm md:text-sm lg:text-lg text-black mb-4 py-8 font-medium leading-relaxed p-5" data-aos="fade-left">
          India's top petroleum product suppliers include Indian Oil Corporation Limited (IOCL), Bharat Petroleum Corporation Limited (BPCL), and Reliance Industries Limited (RIL). IOCL is the largest state-owned entity, leading in refining and distribution, while BPCL and HPCL also play significant roles in the market.
        </p>
        <div className='flex flex-col md:flex-row justify-between p-5' data-aos="fade-right">
          <ul className='p-5'>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Energy Security
            </li>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Economic Growth
            </li>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Infrastructure Development
            </li>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Technological Advancements
            </li>
          </ul>
          <ul className='p-5'>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Diverse Product Portfolio
            </li>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Supply Reliability
            </li>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Environmental Stewardship
            </li>
            <li className="text-sm md:text-base lg:text-lg text-black font-medium flex items-center pr-8">
              <span className="mr-2 mt-2">&#9658;</span> Market Competition
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;