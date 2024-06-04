import React from 'react';
// import methyl from '../../../image/innerImage/methyl.jpg'
// import Benzene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
// import Benzene3 from '../../../image/innerImage/Toluence Oil 3.jpg'
import methyl from '../../../image/innerImage/Methyl Alcohol banner.jpg'

import methyl1 from '../../../image/innerImage/Methyl Alcohol.jpg'
const Methylalcohol = () => {
  return (
      <div className="container mx-auto p-4 ">
          <div style={{position:'relative'}}>
       <img
              src={methyl}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'230px', left:'500px', color:'black' }}>Methyl Alcohol</h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h2 className="text-2xl font-bold mb-4 ">Methyl Alcohol</h2>
          <p className="text-gray-700 mb-4">
          Methanol is primarily produced from natural gas, but it can also be produced from renewable sources such as biomass. The production process typically involves synthesis gas (syngas) production followed by catalytic conversion of syngas to methanol.
             </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  Methanol is widely used as a solvent in various industries, including paints, coatings, adhesives, and cleaning products.
It is a precursor chemical in the production of formaldehyde, acetic acid, and other chemicals.
Methanol is used as a fuel or fuel additive, particularly in racing cars, marine engines, and certain types of fuel cells.
It is also used in the production of biodiesel and as a denaturant for ethanol.

                  </p>
             </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={methyl1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
     
      </div>
    </div>
  );
};

export default Methylalcohol;
