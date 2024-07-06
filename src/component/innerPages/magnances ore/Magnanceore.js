import React from 'react';
import Magnanceore1 from '../../../image/innerImage/Manganese Ore.jpg'


const Magnanceore = () => {
  return (
    <div className="container mx-auto p-4 pt-0">

      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
       
        <div className="md:w-2/2 p-6 pt-0 flex flex-col justify-center">
       <img src={Magnanceore1} alt='indonesian coal' className="w-full rounded-xl productimg" style={{height:'400px'}} />

          <h1 className="text-2xl font-bold mb-4">Manganese-Ore: A Durable and Versatile Construction Material</h1>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li>Manganese ore is primarily composed of manganese oxides and hydroxides.  </li>
        <li>It often contains impurities such as iron, silicon, and aluminum.   </li>
        <li>The most common manganese minerals are pyrolusite, braunite, and psilomelane.    </li>
        <li>Manganese ore deposits are mainly found in South Africa, Australia, China, and Gabon.    </li>
        <li>The quality of manganese ore is determined by its manganese content and the presence of impurities.   </li>
        <li>It is typically processed through crushing, screening, and beneficiation.   </li>  
    </ol>
          </p>

          <h2 className="text-2xl font-bold mb-4"> Properties of Gypsum</h2>
          <ul></ul>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          <ol className='list-decimal ml-10 p-4'>
        <li>Essential for the production of steel and iron to improve strength and durability.   </li>
        <li>Used in the manufacture of aluminum alloys.   </li>
        <li>Employed in the production of batteries, particularly dry cell batteries.    </li>
        <li>Acts as a coloring agent in glass and ceramics.    </li>
        <li>Used in the production of fertilizers and animal feed.    </li>
        <li>Utilized in the chemical industry for the production of various manganese compounds.   </li>  
    </ol>

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
