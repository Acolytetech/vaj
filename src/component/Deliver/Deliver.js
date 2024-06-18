import React from 'react';
import IndustryCard from './IndustryCard'; // Assuming IndustryCard is in the same directory
import 'tailwindcss/tailwind.css';

import coal from '../../image/icons/oil.jpg';
import oil from '../../image/icons/coal.jpg';
import bio from '../../image/biodiesel.png';

const industries = [
  {
    title: 'Petroleum & Gas',
    image: coal, // Directly assign the image path
    description: 'Petroleum and natural gas are nonrenewable sources of energy. Crude oil, a liquid found underground, can be refined to produce gasoline and other fuels..'
  },
  {
    title:  'Industries',
    image: oil, // Directly assign the image path
    description: 'Coals at IGR are always kept on high, we believe in purity of products. Indian Coals, US Coals, Pet-coke or Indonesian Coals we have all the varieties available at best cost.'
  },
  {
    title: 'Bio Diesel',
    image: bio, // Directly assign the image path
    description: 'Biodiesel is a renewable, eco-friendly fuel made from vegetable oils or animal fats, reducing carbon emissions and enhancing energy security. '
  }
];

const Deliver = () => {
  return (
    <div className="px-4  py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <IndustryCard key={index} industry={industry} />
        ))}
      </div>
    </div>
  );
};

export default Deliver;
