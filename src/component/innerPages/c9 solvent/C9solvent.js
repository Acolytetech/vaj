import React from 'react';
 import c9 from '../../../image/innerImage/c9 solvent banner.jpg'
 import c91 from '../../../image/innerImage/C9 Solvent.jpg'
 import c92 from '../../../image/innerImage/c9solvent2.jpg';
const C9solvent = () => {
  return (
    <div className="container mx-auto p-4 productpage">
      
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
        <img
            src={c9}
            alt="Main"
            className=" w-full h-1/2 productimg rounded-xl" 
          />
       
          <h1 className="text-2xl font-bold mb-4">C9 solvent</h1>
          <p className="text-gray-700 mb-4">
          
          
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Composition: </span> Composed primarily of C9 aromatic hydrocarbons, including trimethylbenzene and ethyltoluene. </li>
        <li><span className='font-bold'>Appearance: </span> Clear, colorless liquid with a distinct aromatic odor.   </li>
        <li><span className='font-bold'>Boiling Point:</span>  Generally between 150°C and 190°C.   </li>
        <li><span className='font-bold'> Density:</span>  Around 0.85 g/cm³ at 20°C. </li>
        <li><span className='font-bold'>Solubility: </span> Insoluble in water, but soluble in organic solvents.   </li>
        <li><span className='font-bold'> Flash Point: </span> Typically around 42°C (108°F).  </li>
        <li><span className='font-bold'> Toxicity: </span>Can cause irritation to the skin, eyes, and respiratory system upon exposure. </li>
        
    </ol>
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>  Paint Thinner: </span> Widely used as a solvent in paints and coatings.  </li>
        <li><span className='font-bold'> Industrial Cleaning: </span> Effective in cleaning and degreasing applications.   </li>
        <li><span className='font-bold'> Adhesives:</span>  Utilized in the formulation of adhesives.    </li>
        <li><span className='font-bold'>  Chemical Synthesis:</span>  Acts as a solvent in various chemical synthesis processes.  </li>
        <li><span className='font-bold'>Printing Inks:</span> Used in the production of printing inks for its solvent properties.  </li>
        
        
    </ol>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={c91}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={c92}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default C9solvent;
