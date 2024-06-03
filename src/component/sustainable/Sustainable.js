// src/Carousel.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { IonIcon } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

const Sustainable = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
      title: 'Lossless Youths',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      link: '#',
    },
    {
      id: 2,
      image: 'https://i.redd.it/tc0aqpv92pn21.jpg',
      title: 'Estrange Bond',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      link: '#',
    },
    {
      id: 3,
      image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
      title: 'The Gate Keeper',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      link: '#',
    },
    {
      id: 4,
      image: 'https://images7.alphacoders.com/878/878663.jpg',
      title: 'Last Trace Of Us',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      link: '#',
    },
    {
      id: 5,
      image: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
      title: 'Urban Decay',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      link: '#',
    },
    {
      id: 6,
      image: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
      title: 'The Migration',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      link: '#',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl h-96 bg-white shadow-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${cards[currentIndex].image})` }}
        ></div>
        <ul className="relative h-full">
          {cards.map((card, index) => (
            <li
              key={card.id}
              className={`absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-white text-center p-8">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="mt-4">{card.description}</p>
                <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black">
                  Read More
                </button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <IonIcon
            className="btn prev bg-white text-black rounded-full p-3 cursor-pointer hover:bg-gray-200"
            icon={arrowBackOutline}
            onClick={handlePrev}
          />
          <IonIcon
            className="btn next bg-white text-black rounded-full p-3 cursor-pointer hover:bg-gray-200"
            icon={arrowForwardOutline}
            onClick={handleNext}
          />
        </nav>
      </div>
    </main>
  );
};

export default Sustainable;
