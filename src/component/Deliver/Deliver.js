import React, { useState, useEffect } from 'react';
import IndustryCard from './IndustryCard'; // Assuming IndustryCard is in the same directory
import 'tailwindcss/tailwind.css';
<<<<<<< HEAD
import bit from '../../image/innerImage/Bitumen 2.jpg';
import c9solvent from '../../image/innerImage/c9solvent2.jpg';
import casolvent from '../../image/innerImage/CA Solvent 2.jpg';
import baseoil from '../../image/innerImage/base-oil.jpg';
=======

import bit from '../../image/innerImage/Bitumen 2.jpg';
import c9solvent from '../../image/innerImage/c9solvent2.jpg';
import casolvent from '../../image/innerImage/CA Solvent 2.jpg';
import biodiesel from '../../image/innerImage/bio-diesel3.jpg';
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
import fueloil from '../../image/innerImage/Fuel Oil 3.jpg';
import ldo from '../../image/innerImage/Light Diesel oil 3.jpg';
import coal from '../../image/innerImage/Indian Coal2.jpg';
import rubber from '../../image/innerImage/Rubber Processing Oil 3.jpg';
import limestone from '../../image/innerImage/Limestone.jpg';

const industries = [
  {
    title: 'Bitumin',
    image: bit,
<<<<<<< HEAD
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
=======
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
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
  },
  {
    title: 'indian coal',
    image: coal,
<<<<<<< HEAD
    description: 'Coal remains a cornerstone of India energy infrastructure, fueling a significant portion of the country.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/',
=======
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats, reducing carbon emissions and enhancing energy security.',
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
  },
  {
    title: 'rubber processing oil',
    image: rubber,
<<<<<<< HEAD
    description: 'Composition: Mixture of aromatic, naphthenic, and paraffinic hydrocarbons.',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/milling-machine.html#2853649574273',
  },
  {
    title: 'Base oil',
    image: baseoil,
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats,',
    button: 'https://www.indiamart.com/vajravel-traders-private-limited/base-oil.html#2853715206948',
  },
  
=======
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
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
];

const Deliver = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
<<<<<<< HEAD
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
=======
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

<<<<<<< HEAD
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
              className={`h-2 w-2 rounded-full mt-20 mx-1 ${index === Math.floor(currentIndex / 3) ? 'bg-blue-500' : 'bg-gray-300'}`}
=======
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
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
              onClick={() => setCurrentIndex(index * 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deliver;
