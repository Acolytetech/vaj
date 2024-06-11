
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
          <h1 className="text-2xl font-bold mb-4"> MIXED HYDROCARBON OIL GREEN/YELLOW MATERIAL</h1>
          <p className="text-gray-700 mb-4">
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Composition: </span>   Blend of various hydrocarbons, including aliphatic and aromatic compounds.  </li>
        <li><span className='font-bold'>  Appearance:</span> Color ranges from clear to dark brown.   </li>
        <li><span className='font-bold'>Viscosity: </span>  Medium to high viscosity, depending on the specific blend.   </li>
        <li><span className='font-bold'>Density:</span>  Typically higher than water.   </li>
        <li><span className='font-bold'>Sulfur Content:</span> Flammable with varying flash points.   </li>
        <li><span className='font-bold'>  Boiling Range:</span>  Wide boiling range due to the mixed nature of the hydrocarbons.  </li>
        <li><span className='font-bold'>  Applications:</span> Versatile in various industrial applications. </li>
        
    </ol>          
         </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
       
          <ol className='list-decimal ml-10 p-4'>
        <li><span className='font-bold'>Fuel: </span>    Used as a fuel for industrial heating and power generation.   </li>
        <li><span className='font-bold'> Solvent: </span>Acts as a solvent in various industrial processes.   </li>
        <li><span className='font-bold'>Lubricant: </span>  Can be used as a lubricant in specific applications.    </li>
        <li><span className='font-bold'> Chemical Feedstock:</span>  Employed as a raw material in the chemical industry.   </li>
        <li><span className='font-bold'>Cleaning:</span>  Utilized in cleaning and degreasing operations.    </li>
       
        
    </ol>  
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
