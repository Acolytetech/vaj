import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopProduct.css';

const TopProduct = () => {
  const [currentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, [currentIndex]);

  return (
    <div className="fixed-bg">
      <div className="content-container" data-aos="fade-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-relaxed p-5" data-aos="fade-right">
          About Vajravel Traders Private Limited
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-black mb-4 py-8 font-medium leading-relaxed p-5" data-aos="fade-left">
          Founded in 2020, Vajravel Traders Private Limited has quickly become a trusted supplier of high-quality petrochemical oil products, chemicals, coal, and solvents. With three years of dedicated service, we have built a strong reputation for reliability and excellence, catering to a wide range of industrial customers across South India, including Tamil Nadu, Kerala, Karnataka, Telangana, and Andhra Pradesh.
        </p>
        <div className="flex flex-col md:flex-row justify-between p-5" data-aos="fade-right">
          <div className="md:w-1/2 p-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-relaxed" data-aos="fade-right">Product Range</h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Our extensive product portfolio includes bitumen, CA solvent, furnace oil, fuel oil, light diesel oil (LDO), mineral turpentine oil (MTO), rubber processing oil, mixed hydrocarbon oil, toluene oil, tyre oil, paraffin oil, and mineral oil. These products are essential for various industrial applications, ensuring that our clients receive the best quality materials to support their operations.
            </p>
          </div>
          <div className="md:w-1/2 p-5">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-relaxed" data-aos="fade-right">Our Commitment</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              At Vajravel Traders Private Limited, we prioritize customer satisfaction through our commitment to quality, competitive pricing, and timely delivery. Our efficient supply chain management and stringent quality control measures ensure that our customers receive their orders on time, every time, maintaining high standards of service and product reliability.
            </p>
          </div>
        </div>
        {/* <div className="p-5">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-relaxed" data-aos="fade-right">Building Trust</h4>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            Over the years, we have cultivated strong relationships with our clients by understanding their unique needs and providing tailored solutions. Our focus on quality, cost-effectiveness, and time management has earned us the trust of numerous industrial customers, making us a preferred partner in the region. Choose Vajravel Traders Private Limited for your petrochemical and chemical product needs and experience the difference that quality and commitment can make.
          </p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TopProduct;
