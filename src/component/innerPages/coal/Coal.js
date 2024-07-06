import React from 'react';
import coal1 from '../../../image/innerImage/Indian Coal1.jpg';
import coal2 from '../../../image/innerImage/Indian Coal2.jpg';
import coal3 from '../../../image/innerImage/Indian Coal.jpg';
const Coal = () => {
  return (
    <div className="container mx-auto p-4 productpage">
   
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center productpage">
        <img
            src={coal1}
            alt="Sub 2"
            className="object-cover w-full rounded-lg productimg" 
          />
        
          <h1 className="text-2xl font-bold mb-4">Indian Coal: An Integral Part of the Energy Landscape</h1>
          <p className="text-gray-700 mb-4">
          
          
          India is one of the largest producers and consumers of coal in the world. Coal remains a cornerstone of India's energy infrastructure, fueling a significant portion of the country's electricity generation and industrial activities. Indian coal is primarily derived from its extensive coal reserves, located mainly in states such as Jharkhand, Odisha, Chhattisgarh, West Bengal, and Madhya Pradesh.

Indian coal is predominantly bituminous and sub-bituminous, with varying calorific values and ash contents. The nation's reliance on coal is deeply rooted in its abundance, relatively low cost, and the established infrastructure for mining and transportation.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          .Electricity Generation
.Steel Production
.Cement Industry
.Industrial Heating and Steam Generation
.Coal Gasification
.Domestic Use
.Coal-Based Chemicals
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={coal2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={coal3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Coal
