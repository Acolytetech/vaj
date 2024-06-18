import React from 'react';
import KetonesBanner from '../../../image/innerImage/Ketones banner.jpg'
import Ketones1 from '../../../image/innerImage/ketone.jpg'
import Ketones2 from '../../../image/innerImage/ketone.png'

const KetonesComponent = () => {
  return (
      <div className="container mx-auto p-4 ">
          <div style={{position:'relative'}}>
       <img
              src={KetonesBanner}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'50px', left:'30px', color:'dark' }}></h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h1 className="text-2xl font-bold mb-4">Ketones</h1>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Composition:</span> Organic compounds with a carbonyl group bonded to two hydrocarbon groups </li>
        <li><span className='font-bold'> Types:</span> Includes acetone, methyl ethyl ketone (MEK), and others </li>
        <li><span className='font-bold'>Appearance: </span>   Clear, colorless liquids.   </li>
        <li><span className='font-bold'>Boiling Point:</span>  Varies with different ketones (e.g., acetone: 56°C, MEK: 80°C).   </li>
        <li><span className='font-bold'>Solubility:  </span> Soluble in water and many organic solvents.      </li>
        <li><span className='font-bold'> Odor: </span>   Distinct, often sharp odor.    </li>
        <li><span className='font-bold'>Flammability:</span> Highly flammable, with varying flash points.       </li>
       
       
        
    </ol>
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Solvent:</span> Commonly used in paints, coatings, and adhesives.  </li>
        <li><span className='font-bold'>Cleaning Agent:</span>  Effective in cleaning and degreasing applications. </li>
        <li><span className='font-bold'> Chemical Synthesis: </span> Utilized as a reagent in chemical manufacturing.   </li>
        <li><span className='font-bold'> Pharmaceuticals: </span>Used in the production of pharmaceuticals.    </li>
        <li><span className='font-bold'>Personal Care:  </span>  Ingredient in cosmetics and personal care products.     </li>
        
       
       
        
    </ol>
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
            src={Ketones2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default KetonesComponent;
