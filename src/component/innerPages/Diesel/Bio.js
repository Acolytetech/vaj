import React from 'react'
import b1 from '../../../image/innerImage/Bio-Diesel.png'
import b2 from '../../../image/innerImage/bio-diesel3.jpg'
import b3 from '../../../image/innerImage/bio-diesel2.png'
function Bio() {
  return (
<<<<<<< HEAD
    <div className="container mx-auto p-4 productpage">
  <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={b1} alt='bio-diesel' className='rounded-xl'/>
=======
    <div className="container mx-auto p-4">
  <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={b1} alt='bio-diesel'/>
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
        <h1 className="text-2xl font-bold mb-4"> Bio-Diesel

        </h1>
        <p className="text-gray-700 mb-4">
        
        <ol className='list-decimal ml-10 p-4'>
      <li>Biodiesel is a renewable fuel made from vegetable oils, animal fats, or recycled grease.    </li>
      <li>It is composed of fatty acid methyl esters (FAME)    </li>
      <li>Biodiesel is biodegradable and non-toxic.  </li>
      <li>It can be blended with petroleum diesel in various proportions.    </li>
      <li>Biodiesel production involves transesterification, a chemical process converting fats into esters.   </li>
      <li>It meets international quality standards such as ASTM D6751 and EN 14214   </li>  
  </ol>
        
        </p>
        <h2 className="text-2xl font-bold mb-4"> USES</h2>
        <p className="text-gray-700">
       
        <ol className='list-decimal ml-10 p-4'>
      <li>Used as a fuel in diesel engines, either pure or blended with petroleum diesel.   </li>
      <li>Employed in transportation vehicles such as cars, trucks, and buses.    </li>
      <li>Utilized in agricultural machinery and equipment.    </li>
      <li>Acts as a heating fuel in residential and commercial buildings.   </li>
      <li>Used in marine engines for boats and ships.    </li>
      <li>Provides environmental benefits by reducing greenhouse gas emissions.   </li>  
  </ol>

        </p>
      </div>
    </div>
    <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={b2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={b3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
        </div>
  )
}

export default Bio
