import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import StraightenSharpIcon from '@mui/icons-material/StraightenSharp';
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
const API_URL = import.meta.env.VITE_CARRERAS_URL;
import Spinner from '../components/Spinner.jsx';
//import { MapPin, Calendar, Tag, ArrowLeft, Flag } from "lucide-react";


const CarreraDetails = () => {
    const [carrera, setCarrera] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchDetail();
    }, [id]);

    const fetchDetail = async () => {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) {
                throw new Error('No se pudo obtener los detalles de la carrera');
            }
            const data = await response.json();
            setCarrera(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    if (!carrera) {
        return <div className="text-center mt-10">No se encontró la carrera</div>;
    }

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
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{carrera.name}</h1>
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
