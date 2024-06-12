import React from 'react';
// import phenols from '../../../image/innerImage/phenols.jpg'
// import Benzene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
// import Benzene3 from '../../../image/innerImage/Toluence Oil 3.jpg'


const Phenols = () => {
  return (
      <div className="container mx-auto p-4">
          <div style={{position:'relative'}}>
       <img
              src=''
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'20px', left:'550px', color:'black' }}>PHENOLS</h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
                  <h1 className="text-2xl font-bold mb-4 ">Phenols</h1>
                  
                  <p className="text-gray-700 mb-4">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Formula: </span>  C₆H₅OH. </li>
        <li><span className='font-bold'> Appearance:</span>White crystalline solid or clear, colorless liquid. </li>
        <li><span className='font-bold'>Boiling Point: </span> Approximately 181.7°C (359.1°F).</li>
        <li><span className='font-bold'>  Density: </span>About 1.07 g/cm³ at 20°C. </li>
        <li><span className='font-bold'>Solubility: </span> Moderately soluble in water, highly soluble in organic solvents.  </li>
        <li><span className='font-bold'>  Flammability: </span>Moderately soluble in water, highly soluble in organic solvents. </li>
        <li><span className='font-bold'> Toxicity:</span> Toxic, can cause burns and systemic toxicity upon exposure.   </li>
        
    </ol>
               </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Manufacturing: </span>  Used to produce resins, plastics, and synthetic fibers.   </li>
        <li><span className='font-bold'>  Disinfectant:</span>  Effective in medical and household disinfectants.  </li>
        <li><span className='font-bold'>Pharmaceuticals: </span>  Used in the production of drugs and antiseptics.   </li>
        <li><span className='font-bold'> Cosmetics:  </span>Ingredient in some cosmetic products.     </li>
        <li><span className='font-bold'> Industrial:</span>  Utilized in the production of caprolactam for nylon manufacturing.    </li>
    </ol>

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

export default Phenols;
