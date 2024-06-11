import React from 'react';
import Magnanceore1 from '../../../image/innerImage/Manganese Ore.jpg'


const Magnanceore = () => {
  return (
    <div className="container mx-auto p-4">
       <img src={Magnanceore1} alt='indonesian coal' style={{width:'100%',height:'400px'}} />

      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">Manganese-Ore: A Durable and Versatile Construction Material</h1>
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
            src=''
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

export default Magnanceore
