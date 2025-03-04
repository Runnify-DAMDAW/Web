import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-2xl font-bold">
      <img src="error.png" alt="Error" className="w-64 h-auto mb-4" />
      <p>Error: Página no encontrada</p>
      <Link to="/home" className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
        Volver a Inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
