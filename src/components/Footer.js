import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-4">Servicios</h3>
          <ul>
            <li>Desarrollo Web</li>
            <li>Diseño UX/UI</li>
            <li>Aplicaciones Móviles</li>
            <li>Consultoría IT</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Recursos</h3>
          <ul>
            <li>Blog</li>
            <li>Documentación</li>
            <li>FAQ</li>
            <li>Soporte</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Conecta</h3>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-linkedin"></i></li>
            <li><i className="fab fa-github"></i></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 José Luis Carbajal Casarrubias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
