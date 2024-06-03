import React from 'react';
import IndustryCard from './IndustryCard'; // Assuming IndustryCard is in the same directory
import 'tailwindcss/tailwind.css';
import coal from '../../image/icons/mining-cart.png';
import oil from '../../image/icons/oil-pump.png';
import minerals from '../../image/icons/gold-ingot.png';

const industries = [
  {
    title: 'Petroleum & Gas',
    image: oil, // Directly assign the image path
    description: 'Petroleum and natural gas are nonrenewable sources of energy, a liquid found underground that can be used to make gasoline.'
  },
  {
    title: 'Coal Industries',
    image: coal, // Directly assign the image path
    description: 'Coals at IGR are always kept on high, we believe in purity of products. Indian Coals, US Coals, Pet-coke or Indonesian Coals we have all the varieties available at best cost.'
  },
  {
    title: 'Minerals Industries',
    image: minerals, // Directly assign the image path
    description: 'Hygiene and Health are the most valuable thing this 2020, IGR have served country in this crucial time. All kinds of Minerals and ores available at best quality and good cost.'
  }
];

const Deliver = () => {
  return (
    <div className="px-4 bg-gray-200 py-24">
      <h1 className="text-3xl font-semibold text-center mb-8">Delivering High-Performance Solutions Across Diverse Industries and Technologies!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <IndustryCard key={index} industry={industry} />
        ))}
      </div>
    </div>
  );
};

export default Deliver;
