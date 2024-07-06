// import { ImportContacts } from '@mui/icons-material';
import React from 'react';
import import1 from '../../../image/innerImage/imported1.jpg'
import import2 from '../../../image/innerImage/imported2.jpg'
import import3 from '../../../image/innerImage/imported3.jpg'

const Import= () => {
  return (
    <div className="container mx-auto p-4 productpage">
                <img src={import1} alt='bio-oil'className='rounded-xl' style={{width:'100%', height:'50vh'}} />
      
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
       
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
        {/* <img
            src={import1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg productimg" 
          /> */}

          <h1 className="text-2xl font-bold mb-4"> Import Diesel

          </h1>
          <p className="text-gray-700 mb-4">
          
          <ol className='list-decimal ml-10 p-4'>
        <li>Import diesel is a petroleum-derived fuel used in diesel engines.   </li>
        <li>It is composed primarily of hydrocarbons in the C10 to C20 range. .   </li>
        <li>Diesel fuel is produced through the distillation of crude oil.  </li>
        <li>It has a higher energy density compared to gasoline.  </li>
        <li>Import diesel is subject to quality standards and specifications.  </li>
        <li>It contains additives to improve performance and reduce emissions.   </li>  
    </ol>
          
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
          <ol className='list-decimal ml-10 p-4'>
        <li>Used as fuel for transportation vehicles such as trucks, buses, and cars.   </li>
        <li>Employed in agricultural machinery and equipment   </li>
        <li>Utilized in industrial generators and power plants.   </li>
        <li>Acts as a heating fuel in residential and commercial buildings.  </li>
        <li>Used in marine engines for boats and ships.   </li>
        <li>Employed in the construction industry for heavy machinery.  </li>  
    </ol>

          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={import2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={import3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Import;