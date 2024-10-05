import React from 'react';

const Contacto = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Contacto</h2>
      <p className="text-gray-600 mb-6">
        Envíanos tu mensaje y nos pondremos en contacto contigo lo antes posible.
      </p>
      <form className="w-full max-w-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 bg-gray-800 text-white rounded" />
          <input type="email" placeholder="tu@email.com" className="w-full p-3 bg-gray-800 text-white rounded" />

        </div>
        <textarea
          placeholder="¿En qué podemos ayudarte?"
          className="w-full p-3 bg-gray-800 text-white rounded mt-4"
          rows="5"
        ></textarea>
        <button type="submit" className="w-full mt-6 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
          <span role="img" aria-label="Enviar">✉️</span> Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
