import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarreraCard = ({ carrera }) => {
    const navigate = useNavigate();

    return (
        <div
            className='bg-white shadow-md rounded-lg p-4 m-4 w-[30%] hover:bg-gray-100 flex justify-between items-center'
            onClick={() => navigate(`/details/${carrera.id}`, { state: { carrera } })}
        >
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{carrera.name}</h2>
                <p className="text-gray-600 mb-2">{carrera.description}</p>
                <div className="flex items-center gap-2">
                    <span className={`text-sm ${carrera.status === "Abierta" ? "text-green-500" : "text-red-500"}`}>
                        {carrera.status}
                    </span>
                    <span className={`text-sm ${carrera.category === "Maratón" ? "text-orange-500" : "text-blue-500"}`}>
                        {carrera.category}
                    </span>
                </div>
            </div>
            <div className='h-20 mr-8'>
                <img src="vite.svg" className='h-full w-auto mx-auto' alt={carrera.name} />
            </div>
        </div>
    );
};

export default CarreraCard;