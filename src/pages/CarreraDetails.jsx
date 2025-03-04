import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const CarreraDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const carrera = location.state?.carrera; 

  if (!carrera) {
    return <p className="text-red-500">Carrera no encontrada</p>;
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
      <button
        onClick={() => navigate(-1)} 
        className="mb-4 text-blue-500 hover:text-blue-700"
      >
      &larr; Volver
      </button>
      <h1 className="text-3xl font-bold mb-4">{carrera.name}</h1>
      <p className="text-gray-700">{carrera.description}</p>
      <p><strong>Distancia:</strong> {carrera.distance_km} km</p>
      <p><strong>Ubicación:</strong> {carrera.location}</p>
      <p className={`text-sm font-semibold ${carrera.status === "Abierta" ? "text-green-500" : "text-red-500"}`}>
        Estado: {carrera.status}
      </p>
      <p className="text-orange-500 font-semibold">{carrera.category}</p>
    </div>
  );
};

export default CarreraDetails;
