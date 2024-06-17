import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Client.css';
import owner from '../../image/owner.jpeg';

function Client() {
  useEffect(() => {
    AOS.init();
  }, []);

  const teamMembers = [
    {
      name: 'John Doe', // Correct the name here
      position: 'CEO',
      image: owner, // Use the imported owner image
    }
  ];

  return (
    <div className="client">
      <div className="client-container" data-aos="fade-right">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-relaxed p-5 text-white">
          Meet Our Team!
        </h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={`${member.name}`} className="team-image w-6/12 m-auto" />
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-4">{member.name}</h2>
              <h3 className="text-md md:text-lg lg:text-xl text-white font-medium mb-2">{member.position}</h3>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
