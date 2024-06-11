import React from 'react';
import miniral1 from '../../../image/innerImage/Mineral Oil 1.jpg'
import miniral2 from '../../../image/innerImage/Mineral Oil 2.jpg'
import miniral3 from '../../../image/innerImage/Mineral Oil 3.jpg'

const Miniraloil = () => {
  return (
    <div className="container mx-auto p-4">
       <img
            src={miniral1}
            alt="Main"
            className="object-cover w-full h-full"
          />
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h1 className="text-2xl font-bold mb-4">MINERAL  OIL</h1>
          <p className="text-gray-700 mb-4">
          
          
MTO is used as an extraction solvent, as a cleaning solvent, as a degreasing solvent and as a solvent in Aerosols, Paints, Wood preservatives, Lacquers, Varnishes, and Asphalt produces MTO is mainly used as RAW material for paints/ varnishes.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
In foods and beverages, distilled turpentine oil is used as a flavoring ingredient. In manufacturing, turpentine oil is used in soap and cosmetics and also as a paint solvent. It is also added to perfumes, foods, and cleaning agents as a fragrance.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={miniral2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={miniral3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Miniraloil;
