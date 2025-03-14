import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarreraCard = ({ carrera }) => {
    const navigate = useNavigate();

    return (
        <div
            className='cursor-pointer bg-white shadow-md hover:shadow-2xl rounded-[calc(1.5rem-1px)] p-4 m-4 max-h-36 w-[30%] hover:bg-gray-100 flex justify-between items-center'
            onClick={()=>navigate(`/details/${carrera.id}`)}
            >
            <div className="flex flex-col w-[60%]">
            <h2 className="text-2xl font-bold mb-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[90%]">
                {carrera.name}
            </h2>
            <p className="text-gray-600 mb-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[90%]">
                {carrera.description}
            </p>
                <div className="flex items-center gap-2">
                    <span className={`text-sm ${carrera.status === "Abierta" ? "text-green-500" : "text-red-500"}`}>
                        {carrera.status}
                    </span>
                    <span className={`text-sm ${carrera.category === "Maratón" ? "text-orange-500" : "text-blue-500"}`}>
                        {carrera.category}
                    </span>
                </div>
            </div>
            <div
                className="h-20 w-32 mr-8 rounded-xl bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${carrera?.imagen || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flickr_cc_runner_wisconsin_u.jpg/1280px-Flickr_cc_runner_wisconsin_u.jpg"})`
                }}
            >
                <p className={`${carrera.status === "Abierta" ? "hidden" : "block" } bg-red-500 border-4 border-red-800 py-1 px-2 rounded-xl text-sm font-bold rotate-340`}>{carrera.status.toUpperCase()}</p>
            </div>
        </div>
    );
};

export default CarreraCard;