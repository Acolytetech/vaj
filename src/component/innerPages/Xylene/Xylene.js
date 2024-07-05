import React from 'react';
import x1 from '../../../image/innerImage/xylene banner.jpg'
import x2 from '../../../image/innerImage/Xylene-3.jpg'
import x3 from '../../../image/innerImage/xylene1.webp'


const Xylene = () => {
  return (
      <div className="container mx-auto p-4 productpage">
          
      <div className="flex flex-col md:flex-row  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
        <img
              src={x1}
            alt="Main"
            className=" w-full h-1/2 rounded-xl productimg" 
          />
                  <h1 className="text-2xl font-bold mb-4 ">Xylene</h1>
                  
                  <p className="text-gray-700 mb-4">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Formula: </span>   C₈H₁₀.</li>
        <li><span className='font-bold'> Appearance:</span>White crystalline solid or clear, colorless liquid. Includes ortho-xylene, meta-xylene, and para-xylene. </li>
        <li><span className='font-bold'>Boiling Point: </span> Varies with isomer (e.g., p-xylene: 138.4°C).  </li>
        <li><span className='font-bold'>  Density: </span> About 0.86 g/cm³ at 20°C.  </li>
        <li><span className='font-bold'>Solubility: </span>  Insoluble in water, soluble in organic solvents.   </li>
        <li><span className='font-bold'>  Flammability: </span>Highly flammable with a flash point around 27°C (81°F).</li>
      
        
    </ol>
               </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Solvent: </span> Widely used in paints, coatings, and adhesives.    </li>
        <li><span className='font-bold'>  Chemical Feedstock: </span> Used in the production of terephthalic acid for PET plastics.   </li>
        <li><span className='font-bold'>Printing: </span>  Utilized in the printing industry for inks and dyes.   </li>
        <li><span className='font-bold'> Rubber and Leather:  </span> Used in the production of rubber and leather goods.     </li>
        <li><span className='font-bold'>  Laboratory: </span> Commonly used as a solvent in laboratory settings.   </li>
    </ol>

                  </p>
             </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={x2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={x3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Xylene;
