import React from 'react';
import xyleneimg from '../../../image/innerImage/xylene.jpeg'
// import Benzene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
// import Benzene3 from '../../../image/innerImage/Toluence Oil 3.jpg'


const Xylene = () => {
  return (
      <div className="container mx-auto p-4">
          <div style={{position:'relative'}}>
       <img
              src={xyleneimg}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'20px', left:'550px', color:'black' }}>XYLENE</h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
                  <h2 className="text-2xl font-bold mb-4 ">Xylene</h2>
                  
                  <p className="text-gray-700 mb-4">
                  Phenols are typically colorless or faintly colored liquids or solids with characteristic odors. They have higher boiling points and lower solubility in water compared to alcohols of similar molecular weight due to hydrogen bonding between phenol molecules.
               </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  Phenols have a wide range of industrial applications, including as disinfectants, antiseptics, and preservatives due to their antimicrobial properties.
They are used in the production of plastics, resins, and adhesives, as well as in the synthesis of pharmaceuticals, dyes, and fragrances.
Phenols are also important intermediates in organic synthesis, serving as building blocks for the preparation of various organic compounds.

                  </p>
             </div>
      </div>
      {/* <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={taulene2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={taulene3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Xylene;
