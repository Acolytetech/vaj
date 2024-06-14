import React from 'react';

const Pyroxenite = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4"> Pyroxenite: An Intriguing Rock with Diverse Applications</h1>
          <p className="text-gray-700 mb-4">
          
          <ol className='list-decimal ml-10 p-4'>
        <li>Pyroxenite is an ultramafic igneous rock composed primarily of pyroxene minerals.   </li>
        <li>It contains minerals such as augite, diopside, and hypersthene.   </li>
        <li>The rock is typically dark green to black in color.  </li>
        <li>It is formed in high-temperature and high-pressure environments within the Earth's mantle.  </li>
        <li>Pyroxenite often contains trace amounts of olivine and amphibole.  </li>
        <li>It has a granular texture and high density.   </li>  
    </ol>
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          <ol className='list-decimal ml-10 p-4'>
        <li>Source of magnesium and silica for industrial processes.  </li>
        <li>Used in the production of refractory materials.   </li>
        <li>Employed in the metallurgical industry for alloy production.  </li>
        <li>Acts as a flux in steelmaking to remove impurities.   </li>
        <li>Utilized in the manufacture of high-strength ceramics.   </li>
        <li>Used as an aggregate in construction and road building.   </li>  
    </ol>

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