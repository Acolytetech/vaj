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

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
      info: 'John has over 20 years of experience in the industry.'
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://via.placeholder.com/150',
      info: 'Jane is an expert in technology and innovation.'
    },
    {
      name: 'Bob Johnson',
      position: 'CFO',
      image: 'https://via.placeholder.com/150',
      info: 'Bob has a strong background in finance and operations.'
    }
  ];

  return (
    <div className="client">
      <div className="client-container" data-aos="fade-right">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-relaxed p-5 text-white">
          Meet Our Team!
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
          {teamMembers.map((member, index) => (
            <div className="carousel-slide" key={index}>
              <img src={member.image} alt={`${member.name}`} className="team-image"/>
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-4">{member.name}</h2>
              <h3 className="text-md md:text-lg lg:text-xl text-white font-medium mb-2">{member.position}</h3>
              <p className="text-sm md:text-base lg:text-lg text-white mb-4 font-medium leading-relaxed p-5">
                {member.info}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Client;
