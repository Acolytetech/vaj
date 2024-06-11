import React from 'react';

// import r1 from '../../../image/innerImage/'
import rubber1 from '../../../image/innerImage/Rubber Processing Oil 1.jpg'
import rubber2 from '../../../image/innerImage/Rubber Processing Oil 2.jpg'
import rubber3 from '../../../image/innerImage/Rubber Processing Oil 3.jpg'
// import rubber3 from '../../../image/innerImage/rubber3.png'


const Rudder = () => {
  return (
    <div className="container mx-auto p-4">
        <img

           

            src={rubber1}

            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">RUBBER PROCESS OIL</h2>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>  Composition: </span>  Mixture of aromatic, naphthenic, and paraffinic hydrocarbons.     </li>
        <li><span className='font-bold'> Types:</span> Includes aromatic, paraffinic, and naphthenic oils.   </li>
        <li><span className='font-bold'>Appearance:</span>   Varies from light yellow to dark brown.    </li>
        <li><span className='font-bold'> Viscosity: </span>  Medium to high viscosity.    </li>
        <li><span className='font-bold'> Boiling Point:</span>  High boiling range, ensuring stability at processing temperatures  </li>
        <li><span className='font-bold'>Compatibility:</span>  Compatible with various types of rubber polymers.     </li>
        <li><span className='font-bold'>  Properties:</span>  Improves flexibility, durability, and processing of rubber compounds.     </li>

        
    </ol>

          </p>
          <h2 className="text-2xl font-bold mb-4">uses</h2>
          <p className="text-gray-700">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>  Rubber Manufacturing: </span>  Essential in the production of rubber products like tires and hoses.     </li>
        <li><span className='font-bold'> Plasticizer:</span>  Acts as a plasticizer in rubber compounding. </li>
        <li><span className='font-bold'>Softening Agent:</span>   Enhances the softness and workability of rubber.     </li>
        <li><span className='font-bold'> Viscosity: </span>  Medium to high viscosity.    </li>
        <li><span className='font-bold'> Boiling Point:</span>  High boiling range, ensuring stability at processing temperatures  </li>
        <li><span className='font-bold'>Extender Oil:</span>   Used to extend the rubber polymer and reduce costs.     </li>
        <li><span className='font-bold'>  Industrial Products: </span>  Utilized in making industrial rubber products like belts and gaskets.      </li>

        
    </ol>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
        <img

            
            src={rubber2}

            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={rubber3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Rudder;
