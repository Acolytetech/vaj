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
          
 
          Fuel oil is a kind of fuel that is obtained by the distillation of petroleum. It is frequently used to power and heat many kinds of engines, especially in industrial settings and to heat houses. Fuel oil comes in a variety of grades, from light to heavy, with varying viscosities and energy contents. Fuel oil is frequently used in boilers, furnaces, and power plants to produce heat and electricity.

<h3>Make-Up</h3>
The precise composition of fuel oil varies based on the quality and source of the crude oil, which is made up of a variety of hydrocarbons. Long-chain hydrocarbons, aromatic chemicals, and maybe metals, nitrogen, and sulfur are among its constituents. These contaminants may have an impact on the fuel's efficiency and emissions.
          </p>
          <h2 className="text-2xl font-bold mb-4">Uses</h2>
          <p className="text-gray-700">
          Rubber process oil products are used as a component in rubber formulations for the manufacturing of rubber products Such products are tires, rubber bands, hoses, rubber shock absorbers, footwears, wire and cable coverings, flooring materials, solvents in the production of adhesives, sealants, polishes and many more.
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
