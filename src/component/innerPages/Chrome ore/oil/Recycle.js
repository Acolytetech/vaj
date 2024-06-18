import React from 'react'
import recycle1 from '../../../../image/innerImage/Recycle Oil.png'
import recycle2 from '../../../../image/innerImage/recycle1.jpg'
import recycle3 from '../../../../image/innerImage/recycle2.png'
export default function Recycle() {
  return (
    <div className="container mx-auto p-4 ">
    <div style={{position:'relative'}}>
 <img
        src={recycle1}
      alt="Main"
      className=" w-full h-1/2" style={{height:'300px'}}
    />
        <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'50px', left:'30px', color:'dark' }}></h1>
        </div>
<div className="flex flex-col md:flex-row bg-white overflow-hidden">
  
  <div className="md:w-2/2 p-6 flex flex-col justify-center">
 
    <h1 className="text-2xl font-bold mb-4">Recycle-Oil</h1>
    <p className="text-gray-700 mb-4">
    The concept is to regulate the recycling of used oil, which creates a new product from recycled oil, including motor and hydraulic oil. Boost opportunities and benefit the environment.
    According to decarbonization technology, in India, roughly 257 registered recycling oil facilities are located in 124 districts and 19 states, with a combined capacity of 1.39 MMT.
    
    </p>
    <h2 className="text-2xl font-bold mb-4"> USES</h2>
            <p className="text-gray-700">
            <ol className='list-decimal ml-10 p-4'>
  <li>Sump oil is used for dewatering, filtering, and de-mineralizing.</li>
  <li>Renewable alternatives to traditional diesel fuel.</li>
  <li>Lubricants and hydraulics transform oil. </li>
  <li>Manufacturing the products, i.e., soap, cosmetics, and candles.  </li>
  <li>Energy generates heat and electricity.  </li>
  <li>Agribusiness can be used as additives and pest control products.  </li>
</ol>
           
   </p>
       </div>
</div>
<div className="flex flex-wrap mt-4 ">
  
  <div className="w-1/2 p-2">
    <img
      src={recycle2}
      alt="Sub 2"
      className="object-cover w-full h-full rounded-lg"
    />
  </div> 
 <div className="w-1/2 p-2">
    <img
      src={recycle3}
      alt="Sub 2"
      className="object-cover w-full h-full rounded-lg"
    />
  </div>
</div>
</div>
  )
}

