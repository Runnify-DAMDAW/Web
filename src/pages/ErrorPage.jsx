import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-gray-800">
      <img 
        src="error.png" 
        alt="Error" 
        className="w-48 sm:w-72 md:w-96 h-auto mb-4 shadow-2xl rounded-lg border-4 border-gray-300
                   animate-[run_3s_ease-in-out_infinite]"
      />
      <p className="text-center text-lg sm:text-xl md:text-2xl font-bold px-4">
        Error: Estaba corriendo y me perdí
      </p>
      <Link 
        to="/home" 
        className="mt-4 px-4 py-2 bg-gray-800 text-white text-base sm:text-lg md:text-xl 
                   rounded-lg shadow-lg hover:bg-gray-900 transition transform hover:scale-110"
      >
        Volver a Inicio
      </Link>

      <style>
        {`
          @keyframes run {
            0% { transform: translateX(-20px) rotate(-5deg); }
            50% { transform: translateX(20px) rotate(5deg); }
            100% { transform: translateX(-20px) rotate(-5deg); }
          }
          @media (min-width: 640px) {
            @keyframes run {
              0% { transform: translateX(-35px) rotate(-5deg); }
              50% { transform: translateX(35px) rotate(5deg); }
              100% { transform: translateX(-35px) rotate(-5deg); }
            }
          }
          @media (min-width: 768px) {
            @keyframes run {
              0% { transform: translateX(-50px) rotate(-5deg); }
              50% { transform: translateX(50px) rotate(5deg); }
              100% { transform: translateX(-50px) rotate(-5deg); }
            }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
