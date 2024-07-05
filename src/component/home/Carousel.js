import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Carousel.css';
import Image1 from '../../image/oil web banner 4.jpg';
import Image2 from '../../image/oil web banner 2.jpg';
import Image3 from '../../image/oil web banner 1.jpg';
import Image4 from '../../image/oil web banner 3.jpg';

const images = [
  { src: Image1, alt: 'Image 4', caption: 'Industrial Resource & Oil Exploration', paragraph: 'Harnessing cutting-edge technology and sustainable practices to revolutionize energy extraction.' },
  { src: Image2, alt: 'Image 2', caption: 'Industrial Resource & Oil Exploration', paragraph: 'Innovative methods ensuring efficient resource management with minimal environmental impact.' },
  { src: Image3, alt: 'Image 3', caption: 'Industrial Resource & Oil Exploration', paragraph: 'Committed to innovation and community stewardship, paving the way for a greener future.' },
  { src: Image4, alt: 'Image 1', caption: 'Industrial Resource & Oil Exploration', paragraph: 'Powering progress globally while safeguarding our planet for generations to come.' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    AOS.init();
  }, []);

  const prevImage = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative carousel-container">
      {images.map((image, index) => (
        <div key={index} className={`relative carousel-image-container ${currentIndex === index ? 'active' : ''}`}>
          <img src={image.src} alt={image.alt} className="carousel-image" />
          <div className={`absolute top-4 left-4 p-20 text-white px-2 py-1 rounded carousel-caption ${currentIndex === index ? 'active' : ''}`} data-aos="fade-up">
<<<<<<< HEAD
            {/* <h1 className="text-10xl zsm:text-xl md:text-xl lg:text-8xl font-semibold p-12" style={{marginLeft:'-20px'}}>
              {image.caption}
            </h1> */}
=======
            <h1 className="text-4xl sm:text-xl md:text-xl lg:text-8xl font-semibold p-12" style={{marginLeft:'-20px'}}>
              {image.caption}
            </h1>
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
          </div>
        </div>
      ))}
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2">Previous</button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2">Next</button>
    </div>
  );
};

export default Carousel;
