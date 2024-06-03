import React from 'react';
// import miniral1 from '../../../image/innerImage/miniral1.png'
// // import miniral2 from '../../../image/innerImage'
import gypsum1 from '../../../image/innerImage/Gypsum.jpg'
import gypsum from '../../../image/innerImage/Gypsum banner.jpg'
const Gypsum = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <img src={gypsum} alt='gypsum'/>
          <h2 className="text-2xl font-bold mb-4">Gypsum: A Versatile Mineral with Wide-Ranging Applications</h2>
          <p className="text-gray-700 mb-4">
          
          
          Gypsum is a soft sulfate mineral composed of calcium sulfate dihydrate (CaSO4·2H2O). It forms through the evaporation of saline water and is commonly found in sedimentary rocks. Gypsum has been utilized by humans for various purposes for thousands of years, owing to its abundance, versatility, and unique properties.


          </p>

          <h2 className="text-2xl font-bold mb-4"> Properties of Gypsum</h2>
          <ul></ul>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          .Construction Materials
.Agricultural Applications
.Industrial Uses
.Environmental Remediation
.Coal Gasification
.Domestic Use
.Coal-Based Chemicals
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={gypsum1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        {/* <div className="w-1/2 p-2">
          <img
            src={rubber3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Gypsum
