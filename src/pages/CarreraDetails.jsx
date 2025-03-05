import React from 'react'

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

export default CarreraDetails