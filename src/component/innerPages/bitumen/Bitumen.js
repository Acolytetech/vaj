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

                    <h2 className="text-2xl font-bold mb-4">Bitumen</h2>
                    <p className="text-gray-700 mb-4">
                    Bitumen, which is a versatile substance formed from crude oil, is sometimes referred to as tar oil or asphalt. It is made up of complex hydrocarbons and may contain iron, calcium, sulfur, oxygen, and other components. The kind and source of the crude oil used to make bitumen determine its quality and usability. Because bitumen has adhesive and waterproofing qualities, it has historically been used to bond building materials and line the bottoms of ships. Bitumen is utilized in many different systems, parts, and constructions nowadays.

V10, V20, V30, and V40 features
The terms V10, V20, V30, and V40 usually relate to bitumen's viscosity grades, which specify its particular usage in various applications. These are a few typical applications for

                       <ul>
                        <h3>VARITIES:-</h3>
                        <li>V10</li>
                        <li>V20</li>
                        <li>V30</li>
                        <li>V40</li>
                       </ul>
                       
                       
                        
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Uses</h2>
                    <p className="text-gray-700">
                    Multiple systems, components, and structures are constructed and operated on using bitumen, including the following
                    Uses for Bitumen
The product may be used in many modern ways. It is widely employed in road paving and is primarily intended to feed industrial application. The majority of roads in the United States are composed of bitumen or bitumen mixed with aggregates, like concrete.
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
