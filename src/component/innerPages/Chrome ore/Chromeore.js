import React from 'react';
import ChromeoreBanner from '../../../image/innerImage/Chrome Ore banner.jpg'
import Chromeore1 from '../../../image/innerImage/Chrome Ore.jpg'
import Chromeore2 from '../../../image/innerImage/chrome3.png'
const ChromeOreComponent = () => {
  return (
    <div className="container mx-auto p-4">
       <img src={ChromeoreBanner} alt='indonesian coal' style={{width:'100%',height:'400px'}} />

      <div className="flex flex-col md:flex-row bg-white overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">Chrome-Ore: A Durable and Versatile Construction Material</h1>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li>Chrome ore, also known as chromite, is an oxide of chromium and iron (FeCr2O4).  </li>
        <li>It is the main source of chromium for industrial applications.   </li>
        <li>The ore is usually found in layered igneous rock formations.   </li>
        <li>Chrome ore deposits are primarily located in South Africa, Kazakhstan, India, and Turkey.   </li>
        <li>It has a high melting point and is resistant to corrosion.   </li>
        <li>The quality of chrome ore is determined by its chromium content and the presence of impurities.  </li>  
    </ol>
          </p>

          <h2 className="text-2xl font-bold mb-4"> Properties of Gypsum</h2>
          <ul></ul>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
          <ol className='list-decimal ml-10 p-4'>
        <li>Main raw material for the production of ferrochrome, an alloy used in stainless steel.   </li>
        <li>Used in the manufacturing of refractory bricks and materials.    </li>
        <li>Employed in the production of chrome plating for corrosion-resistant surfaces.    </li>
        <li>Utilized in the chemical industry for the production of chromium compounds.    </li>
        <li>Acts as a catalyst in various industrial processes.   </li>
        <li>Used in the leather tanning industry.   </li>  
    </ol>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={Chromeore1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={Chromeore2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChromeOreComponent;
