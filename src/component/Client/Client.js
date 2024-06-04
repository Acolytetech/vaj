import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Client.css';

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
        <p className="text-sm md:text-base lg:text-lg text-white mb-4 py-8 font-medium leading-relaxed p-5">
          Our worldwide presence ensures timeliness, cost efficiency and compliance adherence required to ensure your timelines are met. Serving with experience and expertise in multiple industries, as one of the World's leading corporations! You are helping to lead the charge; we can help you build on your past successes and prepare for your great future.
        </p>
      </div>
    </div>
  );
}

export default Client;
