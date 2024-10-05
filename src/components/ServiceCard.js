import React from 'react';

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="bg-white text-gray-900 p-6 h-rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a href={link} className="text-orange-500 hover:text-orange-600 font-semibold">Más información</a>
    </div>
  );
};

export default ServiceCard;
