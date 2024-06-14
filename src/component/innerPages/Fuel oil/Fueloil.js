import React from 'react';
import fueloil from '../../../image/innerImage/Fuel Oil 1.jpg'
import fueloil2 from '../../../image/innerImage/Fuel Oil 2.jpg'
import fueloil3 from '../../../image/innerImage/Fuel Oil 3.jpg'


const Fueloil = () => {
  return (
    <div className="container mx-auto p-4">
        <img
            src={fueloil}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
     
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Fuel Oil</h2>
          <p className="text-gray-700 mb-4">
          
 
          Fuel oil is a kind of fuel that is obtained by the distillation of petroleum. It is frequently used to power and heat many kinds of engines, especially in industrial settings and to heat houses. Fuel oil comes in a variety of grades, from light to heavy, with varying viscosities and energy contents. Fuel oil is frequently used in boilers, furnaces, and power plants to produce heat and electricity   
          </p>
          <h1 className="text-2xl font-bold mb-4">Uses</h1>
          <p className="text-gray-700">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Heating: </span>  Widely used in heating applications for industrial and residential buildings.  </li>
        <li><span className='font-bold'> Power Plants:</span>  Fuels turbines and engines for electricity generation.   </li>
        <li><span className='font-bold'>Marine Fuel:</span>  Used in ships and large marine vessels.   </li>
        <li><span className='font-bold'> Industrial Processes: </span> Provides energy for various industrial manufacturing processes.  </li>
        <li><span className='font-bold'> Backup Power:</span> Acts as a backup fuel for emergency generators.   </li>
       
        
    </ol>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
        <img
            src={fueloil2 }
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={fueloil3 }
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Fueloil;
