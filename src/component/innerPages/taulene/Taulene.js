import React from 'react';
import taulene1 from '../../../image/innerImage/Toluence Oil 1.jpg'
import taulene2 from '../../../image/innerImage/Toluence Oil 2.jpg'
import taulene3 from '../../../image/innerImage/Toluence Oil 3.jpg'


const Toluence = () => {
  return (
    <div className="container mx-auto p-4">
       <img
            src={taulene1}
            alt="Main"
            className=" w-full h-1/2" style={{height:'300px'}}
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h2 className="text-2xl font-bold mb-4">Toluence Oil</h2>
          <p className="text-gray-700 mb-4">
          
                      It seems like you're referring to "toluene," which is a colorless, water-insoluble liquid with a sweet, benzene-like odor. It's a common solvent used in various industries, including paint thinners, adhesives, rubber, printing ink, and pharmaceuticals. Toluene is produced during the refining of crude oil and is also found naturally in crude oil and in the tolu tree.
                      
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          In the context of "paint thinners," toluene is often used as a key ingredient. Paint thinners are solvents that can dilute paint, making it thinner and easier to apply. They're commonly used to clean brushes and other painting equipment and to remove paint from surfaces.          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={taulene2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={taulene3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Toluence;
