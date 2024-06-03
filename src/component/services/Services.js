import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import icon1 from '../../image/icon1.jpg';
import icon2 from '../../image/icon2.jpg';
import icon3 from '../../image/icon3.jpg';
import icon4 from '../../image/icon4.jpg';
import icon5 from '../../image/icon5.jpg';
import icon6 from '../../image/icon6.jpg';
import icon7 from '../../image/icon8.jpg';
import icon8 from '../../image/icon9.jpg';

const services = [
  { icon: icon1, title: 'Awesome Employees', description: 'Our employees are highly skilled and dedicated to providing top-notch services.' },
  { icon: icon2, title: 'Maximum Power', description: 'We ensure maximum power efficiency in all our operations.' },
  { icon: icon3, title: 'Oil Resources', description: 'We manage and optimize oil resources efficiently and sustainably.' },
  { icon: icon4, title: 'Continuous Development', description: 'We are committed to continuous development and innovation.' },
  { icon: icon5, title: 'Chemical Analysis', description: 'Our chemical analysis processes are precise and reliable.' },
  { icon: icon6, title: 'We Fight Pollution', description: 'We actively engage in initiatives to fight pollution.' },
  { icon: icon7, title: 'We Think About The Consumer', description: 'Our consumer-centric approach ensures satisfaction and quality.' },
  { icon: icon8, title: 'We Care About Environment', description: 'Environmental care is at the core of our operations.' },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration as needed
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-item text-center bg-white p-6 rounded-lg transition-shadow duration-300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 h-16 w-16" />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
