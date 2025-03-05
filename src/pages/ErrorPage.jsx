import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-2xl font-bold">
      {/* Imagen con animación de movimiento de izquierda a derecha */}
      <img 
        src="error.png" 
        alt="Error" 
        className="w-96 h-auto mb-4 shadow-2xl rounded-lg border-4 border-gray-300
                   animate-[run_3s_ease-in-out_infinite]"
      />
      <p className="text-center">Error: Estaba corriendo y me perdí</p>
      <Link 
        to="/home" 
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition transform hover:scale-110"
      >
        Volver a Inicio
      </Link>

      {/* Definimos la animación personalizada en Tailwind */}
      <style>
        {`
          @keyframes run {
            0% { transform: translateX(-50px) rotate(-5deg); }
            50% { transform: translateX(50px) rotate(5deg); }
            100% { transform: translateX(-50px) rotate(-5deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
