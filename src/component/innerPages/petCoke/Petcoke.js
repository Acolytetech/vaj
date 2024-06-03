import React from 'react';
// import miniral1 from '../../../image/innerImage/miniral1.png'
// // import miniral2 from '../../../image/innerImage'
// import miniral2 from '../../../image/innerImage/miniral2.jpg'

const Petcoke = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Petroleum Coke (Petcoke): A Versatile Byproduct of Oil Refining</h2>
          <p className="text-gray-700 mb-4">
          
          
          Petroleum coke, or petcoke, is a carbonaceous solid residue obtained from the refining of crude oil. It is produced during the thermal cracking process, where heavy crude oil is transformed into lighter hydrocarbons and other refined products like gasoline and diesel. Petcoke is composed primarily of carbon, with small amounts of sulfur, nitrogen, and metals.

Petroleum coke comes in two main forms: calcined and green. Calcined petcoke undergoes a high-temperature process that removes volatile components, resulting in a denser, more stable material suitable for various industrial applications. Green petcoke, on the other hand, is the raw, untreated form and is typically used as a fuel in cement kilns and power plants.
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
            src=""
            
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

export default Petcoke
