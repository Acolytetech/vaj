import React from 'react';

// import { South } from '@mui/icons-material';
import southafricancoal from'../../../image/innerImage/South Africa Coal.jpg'

const Southcoal= () => {
  return (
    <div className="container mx-auto p-4">
      <img src={southafricancoal} alt='sothafricancoal' style={{width:'100%',height:'300px'}} />
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="md:w-2/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">South African Coal: Powering Industries and Economies</h2>
          <p className="text-gray-700 mb-4">
          
          
          South Africa is endowed with abundant coal resources, making it one of the world's leading coal producers and exporters. The country's coal deposits are found predominantly in the Highveld and Witbank coalfields in Mpumalanga province, as well as in the Waterberg basin in Limpopo province. South African coal is known for its high quality, with low sulfur and ash content, making it attractive for various industrial applications.

The coal industry plays a crucial role in South Africa's economy, contributing significantly to energy security, job creation, and export revenues. Coal-fired power generation remains a cornerstone of the country's energy mix, providing a reliable source of electricity for both domestic consumption and export to neighboring countries.
          </p>
          <h2 className="text-2xl font-bold mb-4"> USES</h2>
          <p className="text-gray-700">
         
         . Electricity Generation
.Steel and Iron Production
.Chemical Industries
.Domestic and Industrial Heating
.Coal-to-Liquid (CTL) Conversion
.Coal Mining and Employment
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        
        {/* <div className="w-1/2 p-2">
          <img
            src={miniral2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div> */}
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

export default Southcoal;
