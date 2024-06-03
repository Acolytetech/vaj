import React from 'react';

import rubber1 from '../../../image/innerImage/Furnace Oil 1.jpg'
import rubber2 from '../../../image/innerImage/Furnace Oil 2.jpg'
import rubber3 from '../../../image/innerImage/Furnace Oil 3.jpg'


const Furananceoil = () => {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
         
                <div className="md:w-2/2 p-6 flex flex-col justify-center">

                    <img src='' alt='bitumen'/>

                    <img src={rubber1} alt='bitumen'/>

                    <h2 className="text-2xl font-bold mb-4">Furanance Oil</h2>
                  <p className='text-gray-700'>
                  Compared to lighter fractions like gasoline or diesel, furnace oil is a complex blend of hydrocarbons with a greater molecular weight composition. A byproduct of the distillation of crude oil, furnace oil is often referred to as heavy fuel oil (HFO). In addition to aromatic molecules and long-chain hydrocarbons, it also contains a variety of contaminants including metals and asphaltenes. The crude oil's origin and the refining method employed both affect the composition.
                     <p className='text-gray-700"'>
                    <h3> Qualities</h3>
Because of its high viscosity, furnace oil is less volatile than lighter fuels. It can release sulfur dioxide when burned because it contains more sulfur than other petroleum products. Furnace oil needs to be warmed in order to be pumped and burnt effectively because of its high viscosity. In addition, compared to lighter fuels, it has a greater boiling point and less volatility, which helps to maintain its stability during storage and transit. Although the amount of sulfur can vary, it is usually higher, hence using emissions control devices is necessary to lessen the effects on the environment. Furnace oil is a useful energy source for industrial applications since it also has a high energy density.
                      </p>  
                       
                        
                    </p>
                    <h2 className="text-2xl font-bold mb-4">uses</h2>
                    <p className="text-gray-700">
Furnace oil is commonly used in industries for heating purposes, such as in boilers, furnaces, and power plants. It's also used as a backup fuel in some diesel engines and generators.

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

export default Furananceoil;
