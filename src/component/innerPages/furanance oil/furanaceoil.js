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

                    <h1 className="text-2xl font-bold mb-4">Furanance Oil</h1>
                  <p className='text-gray-700'>
                  Compared to lighter fractions like gasoline or diesel, furnace oil is a complex blend of hydrocarbons with a greater molecular weight composition. A byproduct of the distillation of crude oil, furnace oil is often referred to as heavy fuel oil (HFO). In addition to aromatic molecules and long-chain hydrocarbons, it also contains a variety of contaminants including metals and asphaltenes. The crude oil's origin and the refining method employed both affect the composition.
                     <p className='text-gray-700"'>
                    <h3> Qualities</h3>
Because of its high viscosity, furnace oil is less volatile than lighter fuels. It can release sulfur dioxide when burned because it contains more sulfur than other petroleum products. Furnace oil needs to be warmed in order to be pumped and burnt effectively because of its high viscosity. In addition, compared to lighter fuels, it has a greater boiling point and less volatility, which helps to maintain its stability during storage and transit. Although the amount of sulfur can vary, it is usually higher, hence using emissions control devices is necessary to lessen the effects on the environment. Furnace oil is a useful energy source for industrial applications since it also has a high energy density.
                      </p>  
                       
                      <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Composition: </span> A heavy, viscous oil composed mainly of long-chain hydrocarbons. </li>
        <li><span className='font-bold'>Appearance:</span> Dark brown to black liquid.  </li>
        <li><span className='font-bold'>Viscosity:</span> High viscosity, requiring preheating for efficient combustion. </li>
        <li><span className='font-bold'>Source:</span>  Obtained from the distillation of crude oil. </li>
        <li><span className='font-bold'>Sulfur Content:</span>  Varies, often contains significant sulfur, contributing to emissions.  </li>
        <li><span className='font-bold'>Energy Content:</span>  High calorific value, making it a potent energy source.  </li>
        <li><span className='font-bold'>Storage:</span>  Requires proper storage facilities due to its thick consistency.  </li>
        
    </ol>
                    </p>
                    <h2 className="text-2xl font-bold mb-4">uses</h2>
                    <p className="text-gray-700">
                    <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Industrial Heating: </span> Used as a fuel in furnaces, boilers, and kilns for industrial heating.  </li>
        <li><span className='font-bold'>Power Generation:</span> Fuels power plants to generate electricity.   </li>
        <li><span className='font-bold'>VMarine Applications:</span> Used in marine engines and shipping industry.  </li>
        <li><span className='font-bold'> Production of Steam:</span> Employed in generating steam for industrial processes.  </li>
        <li><span className='font-bold'>Backup Fuel:</span>  Acts as a backup fuel for various industrial and commercial applications.  </li>

        
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

export default Furananceoil;
