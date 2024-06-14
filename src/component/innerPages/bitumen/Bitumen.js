import React from 'react';
import rubber1 from '../../../image/innerImage/Bitumen 1.jpg';
import b2 from '../../../image/innerImage/Bitumen 2.jpg'
import b3 from '../../../image/innerImage/Bitumen 3.jpg'


const Bitumen = () => {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={rubber1} alt='bitumen'/>

                    <h1 className="text-2xl font-bold mt-2">Bitumen</h1>
                    <p className="text-gray-700 mb-4">
                   <ol className='list-decimal ml-6'>
                    <li><span className='font-bold'>Composition:</span> Primarily composed of complex hydrocarbons, including alkanes, cycloalkanes, and aromatic compounds. </li>

<li><span className='font-bold'>Physical State:</span> Solid or semi-solid at room temperature, with a black or dark brown color. </li>

<li><span className='font-bold'>Physical State:</span> Highly viscous, with the ability to soften when heated and harden when cooled. </li>

<li><span className='font-bold'>Source:</span> Derived from the distillation of crude oil during the refining process. </li>

<li><span className='font-bold'>Types:</span> Includes penetration grade, oxidized bitumen, cutback bitumen, and bitumen emulsions. </li>

<li><span className='font-bold'>Properties:</span> Water-resistant, adhesive, and durable with good aging resistance. </li>

<li><span className='font-bold'>Environmental Impact:</span> Non-toxic in its solid form but can emit hazardous fumes when heated. </li>
                   </ol> 
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Uses</h2>
                    <p className="text-gray-700">
               <ol className='list-decimal ml-6'>
                <li><span className='font-bold'>Road Construction:</span> Primary use in asphalt concrete for paving roads, runways, and parking lots. </li>
                <li><span className='font-bold'>Waterproofing:</span> Used in roofing and waterproofing applications for buildings and structures. </li>

<li><span className='font-bold'>Insulation:</span> Acts as a soundproofing and insulating material in construction. </li>

<li><span className='font-bold'>Sealant: </span>Effective as a sealant for joints and cracks in structures. </li>

<li><span className='font-bold'>Industrial Applications: </span>Utilized in the production of bituminous paints and coatings. </li>
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
    );
};

export default Bitumen;
