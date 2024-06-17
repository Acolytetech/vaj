import React from 'react'

function Lime() {
  return (
    <div className="container mx-auto p-4">
       <img

            

            src=''

            alt="Main"
            className="object-cover w-full h-full"
          />
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
       
          <h1 className="text-2xl font-bold mb-4">MINERAL  OIL</h1>
          <p className="text-gray-700 mb-4">
          
          
          <ol className='list-decimal ml-10 p-4'>
        <li>Lime stone is primarily composed of calcium carbonate (CaCO3). </li>
        <li>It often contains impurities such as clay, sand, iron oxide, and organic materials. </li>
        <li>It is a sedimentary rock formed from the skeletal fragments of marine organisms. </li>
        <li>Cement grade limestone has higher purity and is specifically used for cement manufacturing. </li>
        <li>It is typically quarried in large blocks for various industrial uses. </li>
        <li>The quality and composition of limestone can vary significantly depending on its geological formation. </li>  
    </ol>
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
          <ol className='list-decimal ml-10 p-4'>
        <li>Lime stone is primarily composed of calcium carbonate (CaCO3).Main raw material in the manufacture of cement.  </li>
        <li>Used as a flux in steel production to remove impurities.  </li>
        <li>Employed in the production of lime for agriculture and water treatment.  </li>
        <li>Crushed limestone is used as an aggregate in construction. </li>
        <li>Acts as a soil conditioner and pH stabilizer in agriculture.  </li>
        <li>Utilized in the production of glass and ceramics.  </li>  
    </ol>

          </p>
        </div>
      </div>
      {/* <div className="flex flex-wrap mt-4 ">
        
        <div className="w-1/2 p-2">
          <img
            src={miniral2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
       <div className="w-1/2 p-2">
          <img
            src={miniral3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div> */}
    </div>
  )
}

export default Lime
