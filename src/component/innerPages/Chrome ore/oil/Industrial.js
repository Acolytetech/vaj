import React from 'react'
import i1 from '../../../../image/innerImage/Industri.png'
import i2 from '../../../../image/innerImage/Industrial1.webp'
import i3 from '../../../../image/innerImage/Industrial3.jpg'
function Industrial() {
  return (
    <div className="container mx-auto p-4 productpage">
   
<div className="flex flex-col md:flex-row bg-white overflow-hidden">
  
  <div className="md:w-2/2 p-6 flex flex-col justify-center">
  <img
        src={i1}
      alt="Main"
      className=" w-full rounded-xl productimg" 
    />
    <h1 className="text-2xl font-bold mb-4">Industrial Oil</h1>
    <p className="text-gray-700 mb-4">
    <ol className='list-decimal ml-10 p-4'>
  <li><span className='font-bold'>Definition:</span> It allude to the categories of lubricants designed for the use of industrial machinery and equipment to make sure smooth operation and lessen friction
  </li>
  <li><span className='font-bold'> Types:</span>It is classified for different motive such as Hydraulic Oil , Gear oil , compression oil , Turbine oil , cutting oil etc. </li>
  <li><span className='font-bold'> Functions: </span>  It serves several functions such as Lubrication which reduces fiction between gears . It also work as coolant to prevent heat related harm and help in cleaning  contaminants for maintaining cleanliness in system  </li>
  <li><span className='font-bold'>Properties:</span>   Viscosity i.e flow resistance is important for the evolution of lubricant film . Water separation for the separation of oil and water to avoid contamination 
Environmental considerations
   </li>
 
 
  
</ol>
    
    </p>
    <h2 className="text-2xl font-bold mb-4"> USES</h2>
            <p className="text-gray-700">
            <ol className='list-decimal ml-10 p-4'>
  <li>Manufacturing , as industrial oils are broadly used in manufacturing plants to insure smoothness of systems and equipments by bringing down the fiction . </li>
  <li>Automobile industry : These oils are salient for the lubrication of engines, gearbox and other elements which mainly reduce the heat and protect wear . </li>
  <li><span className='font-bold'> Aerospace :</span>   Industrial oils are necessary for the greasing and cooling down of the aircraft power source and hydraulic system . They guarantee the safety of aviation components.    </li>
  <li><span className='font-bold'>  metalworking:</span> Drilling, milling and grinding are some of the work that use cutting fluid . They serve as cooling systems , extending the life to applicants and turn aside metal overheating .   </li>
  <li><span className='font-bold'>Food and beverages industry :  </span> Food - grade industrial oils are used in food processing and wrapping. They maintain the safety quality of food while ensuring the machinery functions.  </li>
  <li>Agriculture, industrial oils are crucial for the smoothness and cooling of agricultural instruments together with tractors and harvests. They help to maintain the performance and resilience of agricultural tools </li>
 
</ol>
           
   </p>
       </div>
</div>
<div className="flex flex-wrap mt-4 ">
  
  <div className="w-1/2 p-2">
    <img
      src={i2}
      alt="Sub 2"
      className="object-cover w-full h-full rounded-lg"
    />
  </div> 
 <div className="w-1/2 p-2">
    <img
      src={i3}
      alt="Sub 2"
      className="object-cover w-full h-full rounded-lg"
    />
  </div>
</div>
</div>
  )
}

export default Industrial
