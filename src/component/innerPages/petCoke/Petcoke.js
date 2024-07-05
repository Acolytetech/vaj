import React from 'react';


const Petcoke = () => {
  return (
    <div className="container mx-auto p-4">
    <img src='' alt='indonesian coal' style={{width:'100%',height:'400px'}} />

   <div className="flex flex-col md:flex-row bg-white overflow-hidden">
    
     <div className="md:w-2/2 p-6 flex flex-col justify-center">
       <h1 className="text-2xl font-bold mb-4">Petcoke</h1>
       <p className="text-gray-700 mb-4">
       <ol className='list-decimal ml-10 p-4'>
     <li>It is composed primarily of carbon, with minor amounts of hydrogen, sulfur, and metals.  </li>
     <li>Petcoke, or petroleum coke, is a carbon-rich solid derived from oil refining.    </li>
     <li>Petcoke is produced through the coking process during crude oil refining.    </li>
     <li>It has a high calorific value and low ash content   </li>
     <li>Petcoke is available in two forms: fuel-grade and anode-grade.   </li>
     <li>Petcoke is available in two forms: fuel-grade and anode-grade.   </li>  
 </ol>
       </p>

       <h2 className="text-2xl font-bold mb-4"> Properties of Gypsum</h2>
       <ul></ul>
       <h2 className="text-2xl font-bold mb-4"> USES</h2>
       <p className="text-gray-700">
       <ol className='list-decimal ml-10 p-4'>
     <li>Used as a fuel in cement kilns and power plants.   </li>
     <li>Employed in the production of electrodes for the aluminum and steel industries   </li>
     <li>Utilized in the manufacture of titanium dioxide, a key ingredient in paint and coatings.   </li>
     <li>Acts as a carbon source in the production of ferroalloys.    </li>
     <li>Used in the gasification process to produce synthetic gas. </li>
     <li>Provides a cost-effective alternative to coal in various industrial applications.    </li>  
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

export default Petcoke
