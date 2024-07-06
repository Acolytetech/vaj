import React, { useState, useEffect } from 'react';
import IndustryCard from './IndustryCard'; // Assuming IndustryCard is in the same directory
import 'tailwindcss/tailwind.css';
import bit from '../../image/innerImage/bitumen 2.jpg';
import c9solvent from '../../image/innerImage/c9solvent2.jpg';
import casolvent from '../../image/innerImage/CA Solvent 2.jpg';
import baseoil from '../../image/innerImage/base-oil.jpg';
import fueloil from '../../image/innerImage/Fuel Oil 3.jpg';
import ldo from '../../image/innerImage/Light Diesel oil 3.jpg';
import coal from '../../image/innerImage/Indian Coal2.jpg';
import rubber from '../../image/innerImage/Rubber Processing Oil 3.jpg';
import limestone from '../../image/innerImage/Limestone.jpg';

const industries = [
  {
    title: 'Bitumin',
    image: bit,
    description: 'Primarily composed of complex hydrocarbons, including alkanes, cycloalkanes, and aromatic compounds.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/bitumen-oil.html',
  },
  {
    title: 'fuel oil',
    image: fueloil,
    description: 'Fuel oil is a kind of fuel that is obtained by the distillation of petroleum.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/fuel-oil.html',
  },
  {
    title: 'light diesel oil',
    image: ldo,
    description: 'Lighter hydrocarbons with a higher volatility compared to other diesel fuels.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/light-diesel-oil.html',
  },
  {
    title: 'indian coal',
    image: coal,
    description: 'Coal remains a cornerstone of India energy infrastructure, fueling a significant portion of the country.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/',
  },
  {
    title: 'rubber processing oil',
    image: rubber,
    description: 'Composition: Mixture of aromatic, naphthenic, and paraffinic hydrocarbons.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/milling-machine.html#2853649574273',
  },
  {
    title: 'Base oil',
    image: baseoil,
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats,',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/base-oil.html#2853715206948',
  },
  
];

const Deliver = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleIndustries = () => {
    if (screenWidth < 640) {
      // For mobile, show 1 card
      return industries.slice(currentIndex, currentIndex+1);
    } else if (screenWidth < 1024) {
      // For tablets, show 2 cards
      return industries.slice(currentIndex, currentIndex + 3);
    } else {
      // For larger screens, show 3 cards
      return industries.slice(currentIndex, currentIndex + 3);
    }
  };

  return (
    <div className="container-fluid px-4 py-24 text-capitalize">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
        {getVisibleIndustries().map((industry, index) => (
          <IndustryCard key={index} industry={industry} />
        ))}
        <div className="absolute bottom-0 left-0 right-0 top-60 flex justify-center mt-4">
          {new Array(Math.ceil(industries.length / 3)).fill(null).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mt-10 mx-1 ${index === Math.floor(currentIndex / 3) ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index * 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deliver;
