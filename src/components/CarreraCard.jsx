import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarreraCard = ({ carrera }) => {
    const navigate = useNavigate();

    return (
        <div
            className='cursor-pointer bg-white shadow-md hover:shadow-2xl rounded-[calc(1.5rem-1px)] p-3 sm:p-4 
                       w-full hover:bg-gray-100 flex flex-col'
            onClick={()=>navigate(`/details/${carrera.id}`)}
        >
            <div
                className="h-40 w-full rounded-xl bg-cover bg-center flex items-center justify-center relative mb-3"
                style={{
                    backgroundImage: `url(${carrera?.imagen || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flickr_cc_runner_wisconsin_u.jpg/1280px-Flickr_cc_runner_wisconsin_u.jpg"})`
                }}
            >
                <p className={`${carrera.status === "Abierta" ? "hidden" : "block" } absolute 
                    ${carrera.status === "Realizada" ? "bg-green-500 border-green-800" : "bg-red-500 border-red-800"} 
                    border-4 py-2 px-4 rounded-xl text-base sm:text-lg font-bold rotate-340`}>
                    {carrera.status.toUpperCase()}
                </p>
            </div>
            
            <div className="flex flex-col w-full">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    {carrera.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    {carrera.description}
                </p>
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span className={`text-xs sm:text-sm ${carrera.category === "Maratón" ? "text-orange-500" : "text-blue-500"}`}>
                        {carrera.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                        {carrera.entry_fee}€
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                        {carrera.available_slots} plazas
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                        {new Date(carrera.date).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CarreraCard;