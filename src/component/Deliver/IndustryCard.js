import React from 'react';
import './Card.css';

const IndustryCard = ({ industry }) => {
  return (
    <div className="relative mt-24">
      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white card">
        <img className="w-full h-48 object-cover" src={industry.image} alt={industry.title} />
        <div className="p-6">
          <h1 className="font-bold text-xl mb-2">{industry.title}</h1>
          <p className="text-gray-700 text-base">{industry.description}</p>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
