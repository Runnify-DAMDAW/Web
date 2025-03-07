import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarreraCard = ({ carrera }) => {
    const navigate = useNavigate();

    return (
        <div
            className='cursor-pointer bg-white shadow-md hover:shadow-2xl rounded-[calc(1.5rem-1px)] p-3 sm:p-4 m-2 sm:m-4 
                       w-full sm:w-[45%] lg:w-[30%] hover:bg-gray-100 flex justify-between items-center'
            onClick={()=>navigate(`/details/${carrera.id}`)}
        >
            <div className="flex flex-col w-[65%] sm:w-[60%]">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[95%]">
                    {carrera.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[95%]">
                    {carrera.description}
                </p>
                <div className="flex items-center gap-1 sm:gap-2">
                    <span className={`text-xs sm:text-sm ${carrera.status === "Abierta" ? "text-green-500" : "text-red-500"}`}>
                        {carrera.status}
                    </span>
                    <span className={`text-xs sm:text-sm ${carrera.category === "Maratón" ? "text-orange-500" : "text-blue-500"}`}>
                        {carrera.category}
                    </span>
                </div>
            </div>
            <div
                className="h-20 w-32 rounded-xl bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${carrera?.imagen || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flickr_cc_runner_wisconsin_u.jpg/1280px-Flickr_cc_runner_wisconsin_u.jpg"})`
                }}
            >
                <p className={`${carrera.status === "Abierta" ? "hidden" : "block" } absolute bg-red-500 border-4 border-red-800 py-1 px-2 rounded-xl text-xs sm:text-sm font-bold rotate-340`}>
                    {carrera.status.toUpperCase()}
                </p>
            </div>
        </div>
    );
};

export default CarreraCard;


/*
Maratón
Media maratón
10km
Relevos
*/