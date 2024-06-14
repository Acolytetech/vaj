import React from 'react';
import n from '../../../image/innerImage/n xexane banner.png'

const Nhexane = () => {
  return (
      <div className="container mx-auto p-4 ">
          <div style={{position:'relative'}}>
       <img
              src={n}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'20px', left:'550px', color:'white' }}>N-Hexane</h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
                  <h1 className="text-2xl font-bold mb-4 ">N-Hexane</h1>
                  
                  <p className="text-gray-700 mb-4">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Formula: </span>   C₆H₁₄. </li>
        <li><span className='font-bold'> Appearance:</span> Clear, colorless liquid with a mild odor. </li>
        <li><span className='font-bold'>Boiling Point: </span> Approximately 68.7°C (155.7°F).</li>
        <li><span className='font-bold'>  Density: </span>About 0.66 g/cm³ at 20°C. </li>
        <li><span className='font-bold'>Solubility: </span> Insoluble in water, soluble in organic solvents. </li>
        <li><span className='font-bold'>  Flammability: </span>Highly flammable with a flash point around -22°C (-8°F).  </li>
        <li><span className='font-bold'> Toxicity:</span>  Neurotoxic, can cause nerve damage with prolonged exposure.   </li>
        
    </ol>
               </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Solvent: </span> Used in the extraction of vegetable oils from seeds.   </li>
        <li><span className='font-bold'>  Industrial Cleaning: </span> Effective in cleaning and degreasing applications. </li>
        <li><span className='font-bold'>Adhesives:</span>  Utilized in the formulation of adhesives and sealants.   </li>
        <li><span className='font-bold'> Chemical Synthesis:  </span> Acts as a reagent in chemical reactions.     </li>
        <li><span className='font-bold'>  Electronics:</span>  Used in the electronics industry for cleaning and manufacturing.   </li>
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

export default Nhexane;
