import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Client.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Client() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="client">
      <div className="client-container" data-aos="fade-right">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-relaxed p-5 text-white">
          Serving Impressive List Of Long Term Clients!
        </h1>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={5000}
          className="carousel-container"
        >
          <div className="carousel-slide">
            <p className="text-sm md:text-base lg:text-lg text-white mb-4 py-8 font-medium leading-relaxed p-5">
              Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met.
            </p>
          </div>
          <div className="carousel-slide">
            <p className="text-sm md:text-base lg:text-lg text-white mb-4 py-8 font-medium leading-relaxed p-5">
              Serving with experience and expertise in multiple industries, as one of the World's leading corporations!
            </p>
          </div>
          <div className="carousel-slide">
            <p className="text-sm md:text-base lg:text-lg text-white mb-4 py-8 font-medium leading-relaxed p-5">
              You are helping to lead the charge; we can help you build on your past successes and prepare for your great future.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Client;
