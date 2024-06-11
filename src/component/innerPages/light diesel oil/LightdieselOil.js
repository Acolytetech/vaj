import React from 'react';
import LightDieselOil from '../../../image/innerImage/Light Diesel oil 1.jpg'
import LightDieselOil2 from '../../../image/innerImage/Light Diesel oil 2.jpg'
import LightDieselOil3 from '../../../image/innerImage/Light Diesel oil 3.jpg'



const lightdieseloil = () => {
    return (
        <div className="container mx-auto p-4 ">
            <img
                src={LightDieselOil}
                alt="Sub 2"
                className="object-cover w-full h-full rounded-lg"
            />
            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">

                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-4">Light Diesel Oil</h1>
                    <p className="text-gray-700 mb-4">
                    <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Composition: </span> Composition: Lighter hydrocarbons with a higher volatility compared to other diesel fuels.  </li>
        <li><span className='font-bold'> Grades:</span> Appearance: Clear to yellowish liquid.   </li>
        <li><span className='font-bold'>Density:</span>Boiling Point: Lower boiling range compared to heavy diesel oil.  </li>
        <li><span className='font-bold'>Sulfur Content:</span>  Typically lower sulfur content.  </li>

        <li><span className='font-bold'> Viscosity:</span>  Lower viscosity, making it easier to pump and handle.  </li>
        <li><span className='font-bold'> Flammability:</span>span Highly flammable with a flash point around 55°C (131°F).  </li>
        
    </ol>
                    </p>
                    <h2 className="text-2xl font-bold mb-4">uses</h2>
                    <p className="text-gray-700">
                    <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'> Industrial Burners: </span> Used in small industrial burners and furnaces.   </li>
        <li><span className='font-bold'> Generators:</span>  Powers diesel generators for electricity production.    </li>
        <li><span className='font-bold'>Agriculture:</span> Fuels agricultural machinery and equipment.   </li>
        <li><span className='font-bold'> Construction:</span>  Used in construction equipment like excavators and loaders.   </li>

        <li><span className='font-bold'> Transport:</span> Sometimes used in smaller transport vehicles and machinery.    </li>
        
        
    </ol>
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
        <img
            src={LightDieselOil2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={LightDieselOil3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
        </div>
    );
};

export default lightdieseloil;
