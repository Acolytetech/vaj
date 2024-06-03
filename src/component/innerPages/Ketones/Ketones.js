import React from 'react';
// import Ketone from '../../../image/innerImage/ketones.webp'
// import Benzene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
// import Benzene3 from '../../../image/innerImage/Toluence Oil 3.jpg'
import KetonesBanner from '../../../image/innerImage/Ketones banner.jpg'
import Ketones1 from '../../../image/innerImage/ketone.jpg'

const KetonesComponent = () => {
  return (
      <div className="container mx-auto p-4 mt-24">
          <div style={{position:'relative'}}>
       <img
              src={KetonesBanner}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'50px', left:'30px', color:'dark' }}>Glycol Ethers</h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h2 className="text-2xl font-bold mb-4">Ketones</h2>
          <p className="text-gray-700 mb-4">
          
          A ketone is an organic compound, where a carbonyl group is linked to a carbon atom in each of two hydrocarbon radicals. It has the general formula RC(=O)R’, where R and R’ can be a variety of carbon containing substituents.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  A ketone is an organic compound, where a carbonyl group is linked to a carbon atom in each of two hydrocarbon radicals. It has the general formula RC(=O)R’, where R and R’ can be a variety of carbon containing substituents.
                  </p>
             </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={Ketones1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       {/* <div className="w-1/2 p-2">
          <img
            src={taulene3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default KetonesComponent;
