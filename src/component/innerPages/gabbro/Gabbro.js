import React from 'react';

import gabbro from '../../../image/innerImage/Gabbro Aggregate banner.jpg'
import gabbro1 from '../../../image/innerImage/Gabbro Aggregate.jpg'


const Gabbro = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
        <img src={gabbro} alt='gabbro'/>
          <h2 className="text-2xl font-bold mb-4">Gabbro Aggregate: A Durable and Versatile Construction Material</h2>
          <p className="text-gray-700 mb-4">
          
          Gabbro is a coarse-grained, dark-colored igneous rock composed mainly of calcium-rich plagioclase feldspar, pyroxene, and sometimes olivine. It forms through the slow cooling and crystallization of magma deep within the Earth's crust. Gabbro is known for its high strength, durability, and resistance to weathering, making it an ideal material for construction applications, particularly as an aggregate.


          </p>

          <h2 className="text-2xl font-bold mb-4"> Properties of Gypsum</h2>
          <ul></ul>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          .Construction of Roads and Highways
.Concrete Production
.Railway Ballast
.Coastal and Marine Engineering
.Landscaping and Decorative Applications
.Concrete Blocks and Precast Products

          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={gabbro1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        {/* <div className="w-1/2 p-2">
          <img
            src={rubber3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Gabbro
