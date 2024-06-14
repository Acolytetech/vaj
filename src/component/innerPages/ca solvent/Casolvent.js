import React from 'react';
import rubber1 from '../../../image/innerImage/CA Solvent 1.jpg';
import ca2 from '../../../image/innerImage/CA Solvent 2.jpg'
import ca3 from '../../../image/innerImage/CA Solvent 3.jpg'
const Casolvent = () => {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
               
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={rubber1} alt='bitumen'/>

                    <h1 className="text-2xl font-bold mb-4">CA Solvent</h1>
                    <p className="text-gray-700 mb-4">
                  
    Casolvent, also known as asphalt and tar oil, is a substance produced through the processing of crude waste. 
    <br/> 
    Casolvent is applied in the construction and maintenance of many structures, systems, and components, such as the following:
    <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Chemical Name: </span>Cyclohexane, also known as hexahydrobenzene. </li>
        <li><span className='font-bold'>Appearance:</span> Clear, colorless liquid with a distinct odor. </li>
        <li><span className='font-bold'>Boiling Point:</span> Around 80.74°C (177.33°F) .</li>
        <li><span className='font-bold'>Solubility:</span> Insoluble in water but soluble in most organic solvents.</li>
        <li><span className='font-bold'>Flammability:</span> Highly flammable with a flash point of -20°C (-4°F). </li>
        <li><span className='font-bold'>Density:</span> Approximately 0.778 g/cm³. </li>
        <li><span className='font-bold'>Toxicity:</span> Can cause dizziness, headache, and nausea upon inhalation. </li>
        
    </ol>
                       </p>
                    <h2 className="text-2xl font-bold mb-4">Uses</h2>
                    <p className="text-gray-700">
                  <li><span className='font-bold'>Solvent: </span> Commonly used as a solvent in chemical synthesis and industrial processes.  </li>
                  <li><span className='font-bold'>Paint and Coatings:</span>  Utilized in the manufacture of varnishes, paints, and coatings.  </li>
                  <li><span className='font-bold'>Adhesives:</span> Adhesives: Used in adhesive formulations for its solvent properties.    </li>
                  <li><span className='font-bold'>Rubber and Plastics: </span> Employed in the production of rubber and plastic materials.   </li>
                  <li><span className='font-bold'>Laboratory Use:</span>  Serves as a solvent in laboratory settings for chemical reactions and extractions.  </li>
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={ca2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={ca3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
        </div>
    );
};

export default Casolvent;
