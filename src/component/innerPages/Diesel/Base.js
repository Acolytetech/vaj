// import { ImportContacts } from '@mui/icons-material';
import React from 'react';
import b1 from '../../../image/innerImage/Base Oil.png'
import b2 from '../../../image/innerImage/Base-oil (1).jpg'
import b3 from '../../../image/innerImage/base-oil.jpg'
const Base = () => {
  return (
<<<<<<< HEAD
    <div className="container mx-auto p-4 productpage">
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={b1} alt='bio-oil'className='rounded-xl' />
=======
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={b1} alt='bio-oil'/>
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
          <h1 className="text-2xl font-bold mb-4"> Base-Fuel

          </h1>
          <p className="text-gray-700 mb-4">
          
          <ol className='list-decimal ml-10 p-4'>
        <li>Base fuel refers to the primary fuel used in internal combustion engines.   </li>
        <li>It is composed of hydrocarbons derived from crude oil.    </li>
        <li>The fuel undergoes refining processes to meet specific standards.  </li>
        <li>Base fuel serves as the foundation for blending with various additives.   </li>
        <li>It is formulated to provide optimal combustion and energy output.  </li>
        <li>The quality and composition of base fuel can vary based on regional specifications.    </li>  
    </ol>
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          <ol className='list-decimal ml-10 p-4'>
        <li>Used in gasoline and diesel engines for transportation.  </li>
        <li>Employed in industrial and residential heating systems.    </li>
        <li>Utilized in power generation and backup generators.   </li>
        <li>Acts as a feedstock for the production of other fuels and chemicals.   </li>
        <li>Used in agricultural machinery and equipment.   </li>
        <li>Employed in aviation fuel blends.  </li>  
    </ol>

          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={b2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={b3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
        </div>
  );
};

export default Base