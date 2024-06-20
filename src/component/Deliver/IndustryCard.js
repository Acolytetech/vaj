import React from 'react';
import './Card.css';

const IndustryCard = ({ industry }) => {
  return (
    <div className="relative mt-24">
      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white card">
        <img className="w-full h-48 object-cover" src={industry.image} alt={industry.title} />
        <div className="p-6">
          <h1 className="font-bold text-xl capitalize mb-2">{industry.title}</h1>
          <p className="text-gray-700 text-base">{industry.description}</p>
          {industry.button && (
            <a href={industry.button} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
