import React from 'react'
import t1 from '../../../../image/innerImage/Tyre Oil 1.jpg'
import t2 from '../../../../image/innerImage/Tyre Oil 2.jpg'
import t3 from '../../../../image/innerImage/Tyre Oil 3.jpg'
function Tyre() {
  return (
    <div className="container mx-auto p-4 ">
    <div style={{position:'relative'}}>
 <img
        src={t1}
      alt="Main"
      className=" w-full h-1/2" style={{height:'300px'}}
    />
        <h1 style={{ fontSize: '2rem', fontWeight: '700',position:'absolute', top:'50px', left:'30px', color:'dark' }}></h1>
        </div>
<div className="flex flex-col md:flex-row bg-white overflow-hidden">
  
  <div className="md:w-2/2 p-6 flex flex-col justify-center">
 
    <h1 className="text-2xl font-bold mb-4">Tyre Oil</h1>
    <p className="text-gray-700 mb-4">
    <ol className='list-decimal ml-10 p-4'>
  <li><span className='font-bold'>Definition:</span> a Pyrolysis is a synthetic fuel which is constructed through the pyrolysis of rejected tyres</li>
  <li><span className='font-bold'> Chemical composition:</span> According to the sources It is a compound mix of various hydrocarbons, which includes aliphatic, aromatic, and polycyclic aromatics. The chemical is composed of carbon, hydrogen, sulphur, nitrogen, and oxygen.</li>
  <li><span className='font-bold'>Production Process: </span>  According to various sources the process includes heating shredded scrap tyres to high temperatures (300°C to 700°C) in the absence of oxygen. Tyre oil is produced during heat decomposition, along with byproducts including gas and solid residue (char).  </li>
  <li><span className='font-bold'> Environmental Impact:</span>  The oil supports in the supervising of discarded tyres . If the process is controlled properly it will reduce hazardous emission .  </li>
  <li><span className='font-bold'>Economic Benefits:  </span>  Reusing old tyres into oils can save up costing on garbage disposal , provide energy and even open up new revenue streams.   </li>
  <li><span className='font-bold'> Key issues: </span>  The main problem that this manufacturing includes is that the critical requirement of environmental friendly pyrolysis technology, derived handling at last ensuring class and firmness of the oil that's been produced for the varied reasons .    </li>
 
 
 
  
</ol>
    
    </p>
    <h2 className="text-2xl font-bold mb-4"> USES</h2>
            <p className="text-gray-700">
            <ol className='list-decimal ml-10 p-4'>
  <li><span className='font-bold'>   Rubber Compounding:</span> Pyrolysis are used in the rubber compounding process to lower solidity and make uncooked rubber easier to grasp and treat. This is critical for the mixing, banishment, and moulding processes. </li>
  <li><span className='font-bold'> Heat resistance :</span>  Tyre oils of some kind, specifically paraffinic oils have the ability to offer heat resistance to vulcan compounds turning them compatible for higher temperature applications. </li>
  <li><span className='font-bold'> Tyre manufacturing :</span>    As we talk about the tyre manufacturing process pyrolysis is mostly used as plasticizers which results in improvement of elasticity and processing capacity.  </li>
  <li><span className='font-bold'>  Enhancing Wear Resistance:</span> Tyre oils mainly help in enhancement of product reliability and resistance to degradation by accommodating effective distribution of chemicals and other substances in the elastic compound.  </li>
  <li><span className='font-bold'> Improving surface finish: </span>  Tyre oils provide a smoother and aesthetically pleasing quality of the surface.  </li>
</ol>
           
   </p>
       </div>
</div>
<div className="flex flex-wrap mt-4 ">
  
  <div className="w-1/2 p-2">
    <img
      src={t2}
      alt="Sub 2"
      className="object-cover w-full h-full rounded-lg"
    />
  </div> 
 <div className="w-1/2 p-2">
    <img
      src={t3}
      alt="Sub 2"
      className="object-cover w-full h-full rounded-lg"
    />
  </div>
</div>
</div>
  )
}

export default Tyre
