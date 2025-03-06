import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import StraightenSharpIcon from '@mui/icons-material/StraightenSharp';
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import MapSharpIcon from '@mui/icons-material/MapSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import EuroSharpIcon from '@mui/icons-material/EuroSharp';
const API_URL = import.meta.env.VITE_API_RUNNING;
import Spinner from '../components/Spinner.jsx';


const CarreraDetails = () => {
    const { user } = useAuth();
    const [hovered, setHovered] = useState(false);
    const [carrera, setCarrera] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showMap, setShowMap] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchDetail();
    }, [id]);

    const fetchDetail = async () => {
        try {
            const response = await fetch(`${API_URL}/running/${id}`);
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

    const getMapUrl = (coordinates) => {
        const [lat, lng] = coordinates.split(',').map(coord => coord.trim());
        return `https://www.openstreetmap.org/export/embed.html?bbox=${Number(lng)-0.01},${Number(lat)-0.01},${Number(lng)+0.01},${Number(lat)+0.01}&layer=mapnik&marker=${lat},${lng}`;
    };

    const handleInscription = () => {
        // TODO: Handle inscription logic
        console.log("Inscripción procesada");
    };

    return (
        <div className="max-w-4xl h-96 mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl flex">
            <div className="bg-red-5d00 flex flex-col items-start justify-between w-1/2">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-4 cursor-pointer hover:shadow-xl rounded-full"
                >
                    <KeyboardBackspaceSharpIcon title="Fecha" style={{ fontSize: 35, color: 'black' }} />
                </button>

                {showMap ? (
                    <div className="relative w-full h-[calc(100%-48px)]">
                        <iframe
                            src={getMapUrl(carrera.coordinates)}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="rounded-lg"
                            title="Location Map"
                            style={{ height: '100%', maxHeight: '300px' }}
                        />
                        <button 
                            onClick={() => setShowMap(false)}
                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                        >
                            ✕
                        </button>
                    </div>
                ) : (
                    <img
                        src={carrera?.imagen || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flickr_cc_runner_wisconsin_u.jpg/1280px-Flickr_cc_runner_wisconsin_u.jpg"}
                        alt={carrera.name}
                        className="h-[calc(100%-48px)] w-full object-cover rounded-lg"
                    />
                )}
            </div>
            <div className="w-1/2 pl-8">
                <button className="flex items-center text-blue-500 hover:text-blue-700 mb-4">
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
                        <p
                            className="flex items-center cursor-pointer hover:text-blue-600 transition-colors"
                            onClick={() => setShowMap(!showMap)}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            >
                            <span className={`${showMap ? "rotate-0" : "rotate-360"} duration-1000`}>
                                {hovered ? (
                                    !showMap ? (
                                        <MapSharpIcon title="Ubicación" style={{ fontSize: 35, color: "black" }} />
                                    ) : (
                                        <LocationOnSharpIcon title="Ubicación" style={{ fontSize: 35, color: "black" }} />
                                    )
                                ) : (
                                    !showMap ? (
                                        <LocationOnSharpIcon title="Ubicación" style={{ fontSize: 35, color: "black" }} />
                                    ) : (
                                        <MapSharpIcon title="Ubicación" style={{ fontSize: 35, color: "black" }} />
                                    )
                                )}
                            </span>
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
                        <p className="flex items-center">
                            <PersonSharpIcon title="Ubicación" style={{ fontSize: 35, color: 'black' }} />
                            {carrera.available_slots}
                        </p>
                        <p className="flex items-center">
                            <EuroSharpIcon title="Ubicación" style={{ fontSize: 35, color: 'black' }} />
                            {carrera.entry_fee}
                        </p>
                        <p className="flex items-center gap-4">
                            <span
                                className={`py-1 px-2 rounded-2xl text-lg font-semibold text-black border-4 ${
                                    carrera.status === "Abierta" ? "bg-green-500 border-green-800" : "bg-red-500 border-red-800"
                                }`}
                            >
                                {carrera.status}
                            </span>
                            {user && carrera.status === "Abierta" && (
                                <button
                                    onClick={handleInscription}
                                    className="py-1 px-4 rounded-2xl text-lg font-semibold text-white 
                                        bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors duration-200"
                                >
                                    Inscribirse
                                </button>
                            )}
                            {!user && carrera.status === "Abierta" && (
                                <button
                                    onClick={() => navigate('/')}
                                    className="py-1 px-4 rounded-2xl text-lg font-semibold text-white 
                                        bg-gray-600 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                                >
                                    Iniciar sesión 
                                </button>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarreraDetails;
