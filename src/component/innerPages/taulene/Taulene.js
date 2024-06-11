import React from 'react';
import taulene1 from '../../../image/innerImage/Toluence Oil 1.jpg'
import taulene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
import taulene3 from '../../../image/innerImage/Toluence Oil 3.jpg'


const Toluence = () => {
  return (
    <div className="container mx-auto p-4">
       <img
            src={taulene1}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h2 className="text-2xl font-bold mb-4">Toluence Oil</h2>
          <p className="text-gray-700 mb-4">
          
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Formula: </span>   C₇H₈.  </li>
        <li><span className='font-bold'> Appearance:</span> Clear, colorless liquid with a sweet, pungent odor. </li>
        <li><span className='font-bold'>Boiling Point: </span> Approximately 110.6°C (231.1°F).  </li>
        <li><span className='font-bold'>  Density: </span>About 0.87 g/cm³ at 20°C.   </li>
        <li><span className='font-bold'>Solubility: </span> Insoluble in water but soluble in organic solvents.   </li>
        <li><span className='font-bold'>  Flammability: </span>Highly flammable with a flash point of 4°C (39°F). </li>
        <li><span className='font-bold'> Toxicity:</span> Can cause neurological damage and other health issues with prolonged exposure.  </li>
        
    </ol>
                      
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Solvent: </span>  Commonly used in paints, coatings, and adhesives.  </li>
        <li><span className='font-bold'> Chemical Feedstock:</span> Used in the production of benzene and other chemicals </li>
        <li><span className='font-bold'>Fuel Additive: </span> Component in gasoline to improve octane ratings.   </li>
        <li><span className='font-bold'> Cleaning Agent:</span> Effective in industrial cleaning and degreasing.   </li>
        <li><span className='font-bold'>Printing:  </span> Utilized in the formulation of printing inks and dyes.   </li>
       
        
    </ol>
            
             </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
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
      </div>
    </div>
  );
};

export default Toluence;
