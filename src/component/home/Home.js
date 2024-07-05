import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Image1 from '../../image/oil web banner 4.jpg';
import Image2 from '../../image/oil web banner 2.jpg';
import Image3 from '../../image/oil web banner 1.jpg';
import Image4 from '../../image/oil web banner 3.jpg';
import './Home.css'; // Import custom CSS file
import { Navbar } from 'react-bootstrap';

const images = [
  { src: Image1, alt: 'Image 4', caption: 'Advanced Petroleum & Biofuel Insights', paragraph: 'Harnessing cutting-edge technology and sustainable practices to revolutionize energy extraction.' },
  { src: Image2, alt: 'Image 2', caption: 'Biofuel & Diesel Market Strategies', paragraph: 'Innovative methods ensuring efficient resource management with minimal environmental impact.' },
  { src: Image3, alt: 'Image 3', caption: 'Petroleum & Biofuel Trade Experts', paragraph: 'Committed to innovation and community stewardship, paving the way for a greener future.' },
  { src: Image4, alt: 'Image 1', caption: 'Biofuel & Diesel Energy Solutions', paragraph: 'Powering progress globally while safeguarding our planet for generations to come.' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS when currentIndex changes
  }, [currentIndex]);

  return (
    <div className="relative carousel-container">
    
      {images.map((image, index) => (
        <React.Fragment key={index}>
          {currentIndex === index && (
            <div className="relative carousel-image-container active">
              <img src={image.src} alt={image.alt} className="carousel-image" />
              <div className="absolute top-4 left-4 p-20 text-white px-2 py-1 rounded carousel-caption mt-24">
                <h1 className="text-10xl  sm:text-2xl md:text-xl lg:text-6xl font-semibold p-12 image-capton" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  {image.caption}
                  <p className="text-lg sm:text-xl md:text-xl lg:text-lg font-medium mt-8 image-description" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  {image.paragraph}
                </p>
                </h1>
                

               
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Carousel;
