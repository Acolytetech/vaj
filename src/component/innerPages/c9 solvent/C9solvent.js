import React from 'react';
// import c9solvent from '../../../image/innerImage/c9 sovent.jpeg'
// import miniral2 from '../../../image/innerImage/miniral1.png'
// import miniral3 from '../../../image/innerImage/miniral2.jpg'
 import c9 from '../../../image/innerImage/c9 solvent banner.jpg'
 import c91 from '../../../image/innerImage/C9 Solvent.jpg'
const C9solvent = () => {
  return (
    <div className="container mx-auto p-4 ">
       <img
            src={c9}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h2 className="text-2xl font-bold mb-4">C9 solvent</h2>
          <p className="text-gray-700 mb-4">
          
          
MTO is used as an extraction solvent, as a cleaning solvent, as a degreasing solvent and as a solvent in Aerosols, Paints, Wood preservatives, Lacquers, Varnishes, and Asphalt produces MTO is mainly used as RAW material for paints/ varnishes.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
In foods and beverages, distilled turpentine oil is used as a flavoring ingredient. In manufacturing, turpentine oil is used in soap and cosmetics and also as a paint solvent. It is also added to perfumes, foods, and cleaning agents as a fragrance.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={c91}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src=''
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default C9solvent;
