import React from 'react';
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
       
          <h1 className="text-2xl font-bold mb-4 ">Methyl Alcohol</h1>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Formula: </span>  CH₃OH. </li>
        <li><span className='font-bold'> Appearance:</span>  Clear, colorless liquid.  </li>
        <li><span className='font-bold'>Boiling Point: </span> Approximately 64.7°C (148.5°F). </li>
        <li><span className='font-bold'>  Density: </span>About 0.7918 g/cm³ at 20°C.   </li>
        <li><span className='font-bold'>Solubility: </span>  Miscible with water and many organic solvents. </li>
        <li><span className='font-bold'>  Flammability: </span>Highly flammable with a flash point of 11°C (52°F).</li>
        <li><span className='font-bold'> Toxicity:</span> Highly toxic, can cause blindness and death if ingested.  </li>
        
    </ol>
             </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Solvent: </span>  Commonly used in industrial and laboratory applications.  </li>
        <li><span className='font-bold'>  Fuel:</span> Used as a fuel and fuel additive. </li>
        <li><span className='font-bold'>Antifreeze: </span>  Component in antifreeze and windshield washer fluid.   </li>
        <li><span className='font-bold'> Chemical Feedstock: </span> Used in the production of formaldehyde and other chemicals.    </li>
        <li><span className='font-bold'> Pharmaceuticals: </span> Utilized in the manufacture of pharmaceuticals and medical products.    </li>
       
        
    </ol>

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
