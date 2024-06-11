import React from 'react';
// import miniral1 from '../../../image/innerImage/miniral1.png'
// // import miniral2 from '../../../image/innerImage'
// import miniral2 from '../../../image/innerImage/miniral2.jpg'
import miniral1 from '../../../image/innerImage/Mineral Oil 1.jpg'
const MiniralOil = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-whiteoverflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <img src={miniral1} alt='miniral oil'/>
          <h2 className="text-2xl font-bold mb-4">MINERAL OIL</h2>
          <p className="text-gray-700 mb-4">
          
          
          Mineral oil is a colorless, oily, almost tasteless, water-insoluble liquid. It's found in cosmetics, carrier oils, and lubricant laxatives
          </p>
          <h1 className="text-2xl font-bold mb-4"> USES</h1>
          <p className="text-gray-700">
         
          Its uses include moisturizing the skin treating dandruff, cradle cap, cracked feet, mild eczema, and other skin problem removing earwax and relieving constipation.
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

export default MiniralOil
