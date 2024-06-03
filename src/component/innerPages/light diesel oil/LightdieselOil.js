import React from 'react';
import LightDieselOil from '../../../image/innerImage/Light Diesel oil 1.jpg'
import LightDieselOil2 from '../../../image/innerImage/Light Diesel oil 2.jpg'
import LightDieselOil3 from '../../../image/innerImage/Light Diesel oil 3.jpg'



const lightdieseloil = () => {
    return (
        <div className="container mx-auto p-4 mt-24">
            <img
                src={LightDieselOil}
                alt="Sub 2"
                className="object-cover w-full h-full rounded-lg"
            />
            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">

                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Light Diesel Oil</h2>
                    <p className="text-gray-700 mb-4">
                        Light diesel oil (LDO) is a type of diesel fuel that typically has a lower viscosity and a higher cetane number compared to heavier grades of diesel fuel. It is commonly used in applications where a cleaner-burning fuel is required, such as in diesel engines for automobiles, trucks, buses, and some industrial machinery. Light diesel oil is often preferred for its efficient combustion properties and lower emissions of pollutants like sulfur dioxide and particulate matter. It's important to note that the exact specifications of light diesel oil can vary depending on regional standards and fuel blends.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">uses</h2>
                    <p className="text-gray-700">
                        <h1 >Transportation:</h1> LDO is used as fuel for diesel engines in automobiles, trucks, buses, and other vehicles. It powers the engines that drive transportation systems, both for personal and commercial purposes.

                       <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}> Industrial Machinery:</h1> Many industrial machines, such as generators, pumps, compressors, and construction equipment, are powered by diesel engines running on light diesel oil.

                       <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}> Power Generation:</h1> LDO is often used in diesel generators to produce electricity in areas where grid power is unavailable or unreliable. These generators can serve as backup power sources or as primary sources in remote locations.

                       <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}> Marine Applications: </h1>Light diesel oil is also used as fuel for diesel engines in marine vessels, including ships, boats, and offshore platforms.

                        <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}>Agriculture:</h1> Diesel-powered agricultural machinery, such as tractors, harvesters, and irrigation pumps, commonly run on light diesel oil.

                       <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}> Heating: </h1>In some regions, LDO is used for residential and commercial heating purposes in boilers, furnaces, and space heaters.

                        <h1 style={{fontSize:'1.2rem',lineHeight:'3rem',fontWeight:'600'}}>Industrial Heating:</h1> Certain industrial processes require heating, and light diesel oil is used in boilers and furnaces to generate heat for applications such as steam production, drying, and heating in manufacturing plants.
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
