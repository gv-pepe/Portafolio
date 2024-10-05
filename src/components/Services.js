import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    { title: 'Ecommerce', description: 'Creación de tiendas online...', link: '/ecommerce' },
    { title: 'Landing Page', description: 'Páginas para captación de leads...', link: '/landing' },
    { title: 'Portfolio', description: 'Muestra de tus proyectos...', link: '/portfolio' },
    { title: 'Ecommerce', description: 'Creación de tiendas online...', link: '/ecommerce' },
    { title: 'Landing Page', description: 'Páginas para captación de leads...', link: '/landing' },
    { title: 'Portfolio', description: 'Muestra de tus proyectos...', link: '/portfolio' },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-10">Servicios de Desarrollo Web</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
