import React from 'react'
import { useNavigate } from 'react-router-dom'

const navegar = (id) => {

}

const CarreraCard = ({carrera}) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4 m-4 w-1/4 hover:bg-gray-100" onClick={()=>navigate(`/details/${carrera.id}`)}>
            <h2 className="text-2xl font-bold mb-2">{carrera.name}</h2>
            <p className="text-gray-600 mb-2">{carrera.description}</p>
            <div className="flex items-center gap-2">
                <span className={`text-sm text-gray-500 ${carrera.status === "Abierta"? "text-green-500" : "text-red-500"}`}>
                    {carrera.status}
                </span>
                <span className={`text-sm text-gray-500 ${carrera.category === "Maratón"? "text-orange-500" : "text-blue-500"}`}>
                    {carrera.category}
                </span>
            </div>
        </div>
    )
}

export default CarreraCard