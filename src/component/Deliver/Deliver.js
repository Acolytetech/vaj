import React, { useState, useEffect } from 'react';
import IndustryCard from './IndustryCard'; // Assuming IndustryCard is in the same directory
import 'tailwindcss/tailwind.css';

import bit from '../../image/innerImage/Bitumen 2.jpg';
import c9solvent from '../../image/innerImage/c9solvent2.jpg';
import casolvent from '../../image/innerImage/CA Solvent 2.jpg';
import biodiesel from '../../image/innerImage/bio-diesel3.jpg';
import fueloil from '../../image/innerImage/Fuel Oil 3.jpg';
import ldo from '../../image/innerImage/Light Diesel oil 3.jpg';
import coal from '../../image/innerImage/Indian Coal2.jpg';
import rubber from '../../image/innerImage/Rubber Processing Oil 3.jpg';
import limestone from '../../image/innerImage/Limestone.jpg';

const industries = [
  {
    title: 'Bitumin',
    image: bit,
    description: 'Petroleum and natural gas are nonrenewable sources of energy. Crude oil, a liquid found underground, can be refined to produce gasoline and other fuels.',
    button: 'https://m.indiamart.com/vajravel-traders-private-limited/bitumen-oil.html',
  },
  {
    title: 'ca solvent',
    image: casolvent,
    description: 'Coals at IGR are always kept on high, we believe in purity of products. Indian Coals, US Coals, Pet-coke or Indonesian Coals we have all the varieties available at best cost.',
    button: 'https://m.indiamart.com/vajravel-traders-private-limited/bitumen-oil.html',
  },
  {
    title: 'Bio Diesel',
    image: biodiesel,
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats, reducing carbon emissions and enhancing energy security.',
    button: 'https://m.indiamart.com/vajravel-traders-private-limited/bitumen-oil.html',
  },
  {
    title: 'fuel oil',
    image: fueloil,
    description: 'Petroleum and natural gas are nonrenewable sources of energy. Crude oil, a liquid found underground, can be refined to produce gasoline and other fuels.',
    button: 'https://m.indiamart.com/vajravel-traders-private-limited/bitumen-oil.html',
  },
  {
    title: 'light diesel oil',
    image: ldo,
    description: 'Coals at IGR are always kept on high, we believe in purity of products. Indian Coals, US Coals, Pet-coke or Indonesian Coals we have all the varieties available at best cost.',
  },
  {
    title: 'indian coal',
    image: coal,
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats, reducing carbon emissions and enhancing energy security.',
  },
  {
    title: 'rubber processing oil',
    image: rubber,
    description: 'Petroleum and natural gas are nonrenewable sources of energy. Crude oil, a liquid found underground, can be refined to produce gasoline and other fuels.',
  },
  {
    title: 'lime stone',
    image: limestone,
    description: 'Coals at IGR are always kept on high, we believe in purity of products. Indian Coals, US Coals, Pet-coke or Indonesian Coals we have all the varieties available at best cost.',
  },
  {
    title: 'c9 solvent',
    image: c9solvent,
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats, reducing carbon emissions and enhancing energy security.',
  },
];

const Deliver = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleIndustries = industries.slice(currentIndex, currentIndex + 3);

  return (
    <div className="px-4 py-24 text-capitalized">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
        {visibleIndustries.map((industry, index) => (
          <IndustryCard key={index} industry={industry} />
        ))}
        <div className="absolute bottom-0 left-0 right-0 top-60 flex justify-center mt-4">
          {industries.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex / 3 ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index * 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deliver;
