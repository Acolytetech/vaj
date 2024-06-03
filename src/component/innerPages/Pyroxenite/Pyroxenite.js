import React from 'react';
// import rubber1 from '../../../image/innerImage/rubber1.webp'
// import rubber2 from '../../../image/innerImage/rubber2.jpg'
// import rubber3 from '../../../image/innerImage/rubber3.png'

const Pyroxenite = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4"> Pyroxenite: An Intriguing Rock with Diverse Applications</h2>
          <p className="text-gray-700 mb-4">
          
         
          Pyroxenite is a coarse-grained igneous rock composed primarily of pyroxene minerals, such as augite and hypersthene, along with minor amounts of other minerals like olivine, plagioclase feldspar, and chromite. It forms through the crystallization of magma deep within the Earth's mantle and is commonly associated with ultramafic rock formations. Pyroxenite exhibits a dark green to black coloration and is known for its high density and durability.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
.Construction Aggregates
• Refractory Materials
• Landscaping and Decorative Uses
• Metallurgical Applications
• Geological Research
• Jewelry and Ornamental Stone

          </p>
        </div>
      </div>
      {/* <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={rubber2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div
        <div className="w-1/2 p-2">
          <img
            src={rubber3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Pyroxenite;