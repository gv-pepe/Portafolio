import React from 'react';

const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: 'url(https://img.freepik.com/fotos-premium/hermosos-paisajes-lagos-hermosos-paisajos-lagos_1234738-411657.jpg)' }}>
      
      {/* Overlay para oscurecer y difuminar */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">JOSÉ LUIS CARBAJAL CASARRUBIAS</h1>
        <h2 className="text-4xl font-semibold text-orange-500 mb-4">Desarrollador Full Stack</h2>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nescient illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="space-x-4">
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded hover:bg-gray-200 hover:text-gray-900">
            Button
          </button>
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded hover:bg-gray-200 hover:text-gray-900">
            Button
          </button>
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded hover:bg-gray-200 hover:text-gray-900">
            Button
          </button>
          <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
            Button
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
