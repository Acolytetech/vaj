
import React from 'react'


import mixed1 from '../../../image/innerImage/Mixed Hydrocarbon Oil 1.jpg'
import mixed2 from '../../../image/innerImage/Mixed Hydrocarbon Oil 2.jpg'
import mixed3 from '../../../image/innerImage/Mixed Hydrocarbon Oil 3.jpg'


function Mixed() {
  return (

    
    <div className="container mx-auto p-4">
       <img
            src={mixed1}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
     
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4"> MIXED HYDROCARBON OIL GREEN/YELLOW MATERIAL</h2>
          <p className="text-gray-700 mb-4">
          
         
Disel has many uses; it heats homes and businesses and fuels trucks, ships, and some cars. A small amount of electricity is produced by diesel, but it is more polluting and more expensive than natural gas. It is often used as a backup fuel for peaking power plants in case the supply of natural gas is interrupted or as the main fuel for small electrical generators. In Europe, the use of diesel is generally restricted to cars (about 40%), SUVs (about 90%), and trucks and buses (over 99%). The market for home heating using fuel oil has decreased due to the widespread penetration of natural gas as well as heat pumps
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
• Boilers
• Furnaces
• Air pre-heaters
• Lower RPM engines
• Lift irrigation pump sets
• Fertilizer plants
• Bunker
•DG set
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={mixed2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={mixed3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

    </div>
  )
}

export default Mixed
