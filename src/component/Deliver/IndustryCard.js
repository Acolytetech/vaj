import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const IndustryCard = ({ industry }) => {
  const { title, image, description } = industry;

  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: '#ADD8E6' }}
      transition={{ duration: 0.2 }}
      className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto"
    >
      <img src={image} alt={title} className="w-32 h-32 mx-auto mb-4" />
      <h2 className="text-base font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default IndustryCard;
