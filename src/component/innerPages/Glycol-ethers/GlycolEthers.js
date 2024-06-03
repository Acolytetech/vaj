import React from 'react';
// import Glycol from '../../../image/innerImage/glycol-ethers.jpg'
// import Benzene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
// import Benzene3 from '../../../image/innerImage/Toluence Oil 3.jpg'
import glycol from '../../../image/innerImage/Glycol Ether Banner.jpg'
import glycol1 from '../../../image/innerImage/Glycol Ether.jpg'
// import Gabbro from '../gabbro/Gabbro';

const GlycolEthers = () => {
  return (
      <div className="container mx-auto p-4 mt-24">
          <div style={{position:'relative'}}>
       <img
              src={glycol}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'50px', left:'30px', color:'dark' }}>Glycol Ethers</h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h2 className="text-2xl font-bold mb-4">Glycol Ethers</h2>
          <p className="text-gray-700 mb-4">
          
          Benzene is used in the production of styrene, polystyrene and synthetic rubber; phenol, a component in phenolic resins and adhesives; and cyclohexane, a precursor of caprolactam and adipic acid, both used in nylon production.
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  Some industries use benzene to make other chemicals that are used to make plastics, resins, and nylon and synthetic fibers. Benzene is also used to make some types of lubricants, rubbers, dyes, detergents, drugs, and pesticides.
         </p>
             </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={glycol1 }
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

export default GlycolEthers;