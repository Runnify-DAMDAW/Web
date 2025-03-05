import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const carrera = {
	id: 1,
	name: "Carrera 1",
	description: "Descripción de la carrera",
	date: "06/04/2025",
	distance_km: 42.195,
	location: "Granada, España",
	coordinates: "37.1773, -3.5986",
	entry_fee: 30.00,
	available_slots: 5000,
	status: "Abierta",
	category: "Maratón",
	imagen: ""
}

const CarreraDetails = () => {
<<<<<<< HEAD
  const location = useLocation();
  const navigate = useNavigate();
  const carrera = location.state?.carrera; 
=======
	return (
		<div className='h-screen px-10 py-5 flex [&>div]:mx-6 [&>div]:w-1/2'>
			<div className='bg-red-5000'>
				<h1 className='font-bold text-6xl'>{carrera.name}</h1>
				<p className=''>
					{carrera.description}
				</p>
				<p className='my-6'>
					<span className={`text-lg px-2 py-1 rounded-xl border-4 ${carrera.status === "Abierta"? "bg-green-500 border-green-700" : "bg-red-500 border-red-700"}`}>
						{carrera.status}
					</span>
				</p>
			</div>
			<div className='bg-green-5000 flex justify-between'>
				<p className='text-xl'>{carrera.date}</p>
				<p className='text-xl'>{carrera.location}</p>
				<p className='ml-6 text-xl'>{carrera.distance_km} km</p>
			</div>
		</div>
	)
}
>>>>>>> origin/Arturo

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
