import React from 'react';
// import miniral1 from '../../../image/innerImage/miniral1.png'
// // import miniral2 from '../../../image/innerImage'
// import miniral2 from '../../../image/innerImage/miniral2.jpg'

const LimeStone = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Limestone: A Versatile Mineral with Diverse Applications</h2>
          <p className="text-gray-700 mb-4">
          
          
          imestone is a sedimentary rock composed primarily of calcium carbonate (CaCO3) minerals, often derived from the skeletal remains of marine organisms such as coral and mollusks. It is one of the most abundant rock types on Earth and has been used by humans for various purposes for thousands of years. Limestone occurs in different geological formations and can exhibit a range of colors and textures, from creamy white to gray and even pink.
          </p>
          <h2 className="text-2xl font-bold mb-4">Cement Grade Limestone</h2>
          <p className="text-gray-700 mb-4">
          
          
          Cement grade limestone refers to limestone with high purity and suitable chemical composition for the production of Portland cement, the most common type of cement used in construction. The key characteristics of cement grade limestone include high calcium content (typically above 90%), low impurities such as silica, alumina, and iron oxide, and a uniform texture that allows for consistent cement production.
          </p>
          {/* <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          .Electricity Generation
.Steel Production
.Cement Industry
.Industrial Heating and Steam Generation
.Coal Gasification
.Domestic Use
.Coal-Based Chemicals
          </p> */}
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

export default LimeStone
