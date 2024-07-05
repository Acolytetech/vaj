import React from 'react';
import indo1 from '../../../image/innerImage/Indones.jpg'
import indo2 from '../../../image/innerImage/Indonesian Coal.jpg'


const Indo = () => {
  return (
    <div className="container mx-auto p-4">
       <img
            src={indo1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">Indonesian Coal: A Global Energy Resource</h1>
          <p className="text-gray-700 mb-4">
          
          
          Indonesia is one of the world's largest coal producers and exporters. The country has vast coal reserves, with significant deposits in Sumatra and Kalimantan. Indonesian coal is known for its relatively low ash and sulfur content, making it a popular choice for both domestic use and international export.

The coal industry is a major contributor to Indonesia's economy, providing employment and generating substantial revenue. The country's strategic location and developed infrastructure for coal mining and shipping facilitate efficient production and export, primarily to major markets in Asia, including China, India, Japan, and South Korea.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          .Electricity Generation
.Cement Production
.Steel Manufacturing
.Industrial Heating and Steam Generation
.Coal Gasification
.Domestic Use
.Coal-Based Chemicals Production
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src=''
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={indo2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Indo
