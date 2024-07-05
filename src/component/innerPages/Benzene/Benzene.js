import React from 'react';
import benzene  from '../../../image/innerImage/benzene banner.png'
import benzene1 from '../../../image/innerImage/Benzene.jpg'
import benzene2 from '../../../image/innerImage/benezene.jpg'

const Benzene = () => {
  return (
    <div className="container mx-auto p-4">
<<<<<<< HEAD
      
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
        <img
            src={benzene}
            alt="Main"
            className=" w-full h-1/2 productimg" 
          />
=======
       <img
            src={benzene}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
          <h1 className="text-2xl font-bold mb-4">Benzene</h1>
          <p className="text-gray-700 mb-4">
          
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Formula: </span>   C₆H₆.  </li>
        <li><span className='font-bold'> Appearance:</span> Clear, colorless liquid with a sweet odor. </li>
        <li><span className='font-bold'>Boiling Point: </span>  Approximately 80.1°C (176.2°F).   </li>
        <li><span className='font-bold'> Density:</span>  About 0.876 g/cm³ at 20°C.   </li>
        <li><span className='font-bold'> Solubility:   </span>Slightly soluble in water, highly soluble in organic solvents.    </li>
        <li><span className='font-bold'> Flammability:</span>  Highly flammable with a flash point of -11.1°C (12°F).    </li>
        <li><span className='font-bold'>Toxicity: </span> Carcinogenic, with significant health risks upon exposure.     </li>
       
        
    </ol>
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Manufacturing:</span>  Used to produce other chemicals such as styrene and phenol.  </li>
        <li><span className='font-bold'>  Solvent:</span> Utilized in various industrial applications as a solvent </li>
        <li><span className='font-bold'>Fuel Component: </span>  Added to gasoline to enhance octane levels.   </li>
        <li><span className='font-bold'> Plastics and Resins:</span>  Essential in the production of plastics and resins.  </li>
        <li><span className='font-bold'>Rubber:  </span> Used in the manufacture of rubber and synthetic fibers.    </li>
       
       
        
    </ol>
         </p>
             </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={benzene1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={benzene2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Benzene;
