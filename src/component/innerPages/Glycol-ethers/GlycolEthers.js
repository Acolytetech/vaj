import React from 'react';
import glycol from '../../../image/innerImage/Glycol Ether Banner.jpg'
import glycol1 from '../../../image/innerImage/Glycol Ether.jpg'
import glycol2 from '../../../image/innerImage/Glycol.jpg'

const GlycolEthers = () => {
  return (
<<<<<<< HEAD
      <div className="container mx-auto p-4 productpage">
          
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
        <img
              src={glycol}
            alt="Main"
            className=" w-full h-1/2 productimg rounded-xl" 
          />
=======
      <div className="container mx-auto p-4 ">
          <div style={{position:'relative'}}>
       <img
              src={glycol}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
              <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'50px', left:'30px', color:'dark' }}></h1>
              </div>
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
          <h1 className="text-2xl font-bold mb-4">Glycol Ethers</h1>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Composition:</span> Composed of ether and alcohol functional groups.   </li>
        <li><span className='font-bold'> Types:</span> Includes ethylene glycol ethers and propylene glycol ethers. </li>
        <li><span className='font-bold'>Appearance: </span>  Clear, colorless liquids.   </li>
        <li><span className='font-bold'>Boiling Point:</span>   Varies depending on specific glycol ether.   </li>
        <li><span className='font-bold'>Solubility:  </span>  Soluble in water and most organic solvents.     </li>
        <li><span className='font-bold'> Odor: </span>  Mild, pleasant odor.    </li>
        <li><span className='font-bold'> Toxicity: </span> Generally low toxicity, but can cause irritation and CNS effects with high exposure.      </li>
       
       
        
    </ol>
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
                  <p className="text-gray-700">
                  <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>  Composed of ether and alcohol functional groups. Solvent:</span> Used in paints, inks, and coatings for its solvent properties.   </li>
        <li><span className='font-bold'> Cleaning:</span>  Effective in industrial and household cleaning products. </li>
        <li><span className='font-bold'>Personal Care:</span>   Ingredient in cosmetics and personal care products.    </li>
        <li><span className='font-bold'>  Automotive:</span> Used in brake fluids and anti-freeze formulations.   </li>
        <li><span className='font-bold'>  Electronics: </span> Utilized in the manufacturing of electronics and semiconductors.  </li>
    </ol>
                 
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
       <div className="w-1/2 p-2">
          <img
            src={glycol2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GlycolEthers;
