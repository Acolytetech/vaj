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
          
Rubber processing oil or naphthenic oil as it is called, is used during the mixing of rubber compounds. It is also used to produce products from a rubber band, huge and even small toys. The rubber process oil that we sell at Myriro is an oil composition with a kinematic viscosity at 100 °C and contains less than 3% Polynuclear aromatic compounds.
They are further processed as process oil for rubber compounds, incredibly aromatic rubbers. Rubber process oil is used throughout a mix of rubber compounds. Get the best rubber process oil at Myriro at wholesale prices from the best wholesalers from Vadodara.
          </p>
          <h2 className="text-2xl font-bold mb-4">uses</h2>
          <p className="text-gray-700">
          Rubber process oil products are used as a component in rubber formulations for the manufacturing of rubber products Such products are tires, rubber bands, hoses, rubber shock absorbers, footwears, wire and cable coverings, flooring materials, solvents in the production of adhesives, sealants, polishes and many more.
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
