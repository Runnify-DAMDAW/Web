import React from 'react'
import CarreraCard from '../components/CarreraCard';

var carrerasRunning = [
	{
		"id": 1,
		"name": "Carrera 1",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 2,
		"name": "Carrera 2",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 3,
		"name": "Carrera 3",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Cerrada",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 4,
		"name": "Carrera 4",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Sprint",
		"imagen": ""
	},
	{
		"id": 5,
		"name": "Carrera 5",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Cerrada",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 6,
		"name": "Carrera 6",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 7,
		"name": "Carrera 7",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 8,
		"name": "Carrera 8",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 9,
		"name": "Carrera 9",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 10,
		"name": "Carrera 10",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 11,
		"name": "Carrera 11",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 12,
		"name": "Carrera 12",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 13,
		"name": "Carrera 13",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
	{
		"id": 14,
		"name": "Carrera 14",
		"description": "Descripción de la carrera",
		"date": "",
		"distance_km": 42.195,
		"location": "Granada, España",
		"coordinates": "37.1773, -3.5986",
		"entry_fee": 30.00,
		"available_slots": 5000,
		"status": "Abierta",
		"category": "Maratón",
		"imagen": ""
	},
]

const naranja = "Descripción de la";
const azul = "#006BFF";


const Home = () => {
	return (
		<div className='flex items-center self-center px-24'>
			<div className='flex flex-wrap justify-start items-start my-8'>
				{carrerasRunning.map( (carrera,index) => (
					<CarreraCard carrera={carrera} key={index}/>
				))}
			</div>
		</div>
	)
}

export default Home