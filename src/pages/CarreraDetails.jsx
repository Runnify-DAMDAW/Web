import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import StraightenSharpIcon from '@mui/icons-material/StraightenSharp';
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
//import { MapPin, Calendar, Tag, ArrowLeft, Flag } from "lucide-react";

const carrera = {
id: 1,
name: "Carrera 1",
description: "Descripción de la carrera",
date: "06/04/2025",
distance_km: 42.195,
location: "Granada, España",
coordinates: "37.1773, -3.5986",
entry_fee: 30.0,
available_slots: 5000,
status: "Cerrada",
category: "Maratón",
};

const CarreraDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl h-96 mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl flex">
            <div className="bg-red-5d00 flex flex-col items-start justify-between w-1/2">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-500 hover:text-blue-700 mb-4 cursor-pointer hover:shadow-xl rounded-full"
                >
                    <KeyboardBackspaceSharpIcon title="Fecha" style={{ fontSize: 35, color: 'black' }} />
                </button>

                <img
                    src={carrera?.imagen || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flickr_cc_runner_wisconsin_u.jpg/1280px-Flickr_cc_runner_wisconsin_u.jpg"}
                    alt={carrera.name}
                    className="h-full object-cover rounded-lg mb-4"
                    />
            </div>
            <div className="w-1/2 pl-8">
                <button
                    className="flex items-center text-blue-500 hover:text-blue-700 mb-4"
                    >
                    <KeyboardBackspaceSharpIcon title="Fecha" style={{ fontSize: 35, color: 'white' }} />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-[#93032E] mb-2">{carrera.name}</h1>
                    <p className="text-gray-600 mb-4">{carrera.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-gray-700 [&>p>*]:mx-5">
                        <p className="flex items-center">
                            <CalendarMonthSharpIcon title="Fecha" style={{ fontSize: 35, color: 'black' }} />
                            {carrera.date}
                        </p>
                        <p className="flex items-center">
                            <LocationOnSharpIcon title="Ubicación" style={{ fontSize: 35, color: 'black' }} />
                            {carrera.location}
                        </p>
                        <p className="flex items-center">
                            <StraightenSharpIcon title="Ubicación" style={{ fontSize: 35, color: 'black' }} />
                            {carrera.distance_km} km
                        </p>
                        <p className="flex items-center">
                            <DirectionsRunSharpIcon title="Ubicación" style={{ fontSize: 35, color: 'black' }} />
                            {carrera.category}
                        </p>
                        <p className="mt-8">
                            <span
                            className={`py-1 px-2 rounded-2xl text-lg font-semibold text-black border-4 ${
                                carrera.status === "Abierta" ? "bg-green-500 border-green-800" : "bg-red-500 border-red-800"
                                }`}
                            >
                                {carrera.status}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarreraDetails;
