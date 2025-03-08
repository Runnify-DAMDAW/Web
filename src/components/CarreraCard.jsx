import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarreraCard = ({ carrera }) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className="cursor-pointer bg-white shadow-md hover:shadow-2xl rounded-[calc(1.5rem-1px)] p-3 sm:p-4 
                       w-full hover:bg-gray-100 flex flex-col relative"
            onClick={() => navigate(`/details/${carrera.id}`)}
        >
            <div
                className="h-40 w-full rounded-xl bg-cover bg-center flex items-center justify-center relative mb-3 overflow-hidden"
                style={{
                    backgroundImage: `url(${
                        carrera?.imagen ||
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flickr_cc_runner_wisconsin_u.jpg/1280px-Flickr_cc_runner_wisconsin_u.jpg"
                    })`,
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {/* Persiana Azul con Descripción */}
                <div
                    className={`absolute left-0 bottom-0 w-full h-full bg-[#587AD7]/60 text-white p-3 flex items-center justify-center text-center
                    transition-transform duration-500 ease-in-out ${
                        hover
                            ? "translate-y-0 opacity-90"
                            : "translate-y-full opacity-0"
                    }`}
                >
                    <p className="text-sm sm:text-base font-bold">
                        {carrera.description}
                    </p>
                </div>

                {/* Estado de la carrera */}
                {carrera.status !== "Abierta" && (
                    <p
                        className={`absolute top-2 right-2 px-3 py-1 rounded-lg text-xs sm:text-sm font-bold text-white
                        ${
                            carrera.status === "Cerrada"
                                ? "bg-rose-500"
                                : "bg-emerald-500"
                        }`}
                    >
                        {carrera.status.toUpperCase()}
                    </p>
                )}
            </div>

            <div className="flex flex-col w-full">
                <h2 className="text-[#93032E] text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    {carrera.name}
                </h2>
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <p className="flex justify-between w-full">
                        <span
                            className={`text-xs sm:text-sm font-bold ${
                                carrera.category === "Maratón"
                                    ? "text-orange-500"
                                    : carrera.category === "Sprint"
                                    ? "text-blue-500"
                                    : carrera.category ===
                                      "Carrera de obstáculos"
                                    ? "text-green-500"
                                    : carrera.category === "Relevos"
                                    ? "text-fuchsia-500"
                                    : ""
                            }`}
                        >
                            {carrera.category}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-600">
                            {carrera.available_slots} plazas
                        </span>
                    </p>
                    <p className="flex justify-between w-full">
                        <span className="text-xs sm:text-sm text-gray-600">
                            {carrera.entry_fee}€
                        </span>
                        <span className="text-xs sm:text-sm text-gray-600">
                            {new Date(carrera.date).toLocaleDateString(
                                "es-ES",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarreraCard;
