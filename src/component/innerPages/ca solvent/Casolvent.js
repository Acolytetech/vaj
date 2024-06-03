import React from 'react';
import rubber1 from '../../../image/innerImage/CA Solvent 1.jpg';
import ca2 from '../../../image/innerImage/CA Solvent 2.jpg'
import ca3 from '../../../image/innerImage/CA Solvent 3.jpg'






const Casolvent = () => {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
               
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={rubber1} alt='bitumen'/>

                    <h2 className="text-2xl font-bold mb-4">CA Solvent</h2>
                    <p className="text-gray-700 mb-4">
                  
    Casolvent, also known as asphalt and tar oil, is a substance produced through the processing of crude waste. 
    <br/> 
    Casolvent is applied in the construction and maintenance of many structures, systems, and components, such as the following:
    <ol className='list-decimal ml-10 p-4'>
        <li>Roads and Highways: Used extensively in the construction of roads, highways, and runways due to its durability and resistance to traffic loads.</li>
        <li>Roofing: Employed in the manufacture of roofing materials like shingles and roofing felt, providing waterproofing and protection.</li>
        <li>Pavement Preservation: Ideal for surface dressing, micro-surfacing, and other pavement preservation treatments.</li>
        <li>Industrial Coatings: Used to produce protective coatings for metal surfaces to prevent corrosion.</li>
        <li>Pipe Coating: Provides a protective layer for pipelines, especially in the oil and gas industry, to prevent corrosion and damage.</li>
        <li>Soundproofing: Applied in soundproofing materials to reduce noise levels in buildings and vehicles.</li>
        <li>Marine Construction: Utilized in the construction and maintenance of marine structures due to its resistance to water and salt.</li>
        <li>Mastic Asphalt: Used in flooring, roofing, and waterproofing applications where a durable and waterproof material is needed.</li>
        <li>Waterproof Membranes: Essential for creating waterproof membranes for bridges, tunnels, and other infrastructure projects.</li>
        <li>Cement Production: Mixed with cement to enhance its properties for specific construction needs.</li>
        <li>Adhesives: Serves as an adhesive in building and construction materials, particularly in areas exposed to water.</li>
        <li>Sealants: Employed in sealant applications for roads, pavements, and other surfaces.</li>
        <li>Pavement and Concrete Joints: Used to seal joints in pavements and concrete structures, ensuring longevity and resistance to weather conditions.</li>
    </ol>
    Casolvent is a byproduct of crude oil. It is composed of complex hydrocarbons and contains elements like calcium, iron, sulfur, and oxygen. The quality of the material and ease of production depend on the source and type of crude oil from which it is derived. It was first used for its natural adhesive and waterproofing characteristics, helping to bind building materials together, as well as to line ship bottoms.
    <br/>


                        
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Uses</h2>
                    <p className="text-gray-700">
                    Casolvent is applied in the construction and maintenance of many structures, systems, and components, such as the following
                    Casolvent Uses
The product has several modern uses. It's generally meant for industrial use and is commonly found in road paving. The majority of U.S. roads are made of either Casolvent or a combination of Casolvent and aggregates, such as concrete.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={ca2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={ca3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
        </div>
    );
};

export default Casolvent;
