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
import { useParticipant } from "../contexts/ParticipantContext";


const CarreraDetails = () => {
    const { user } = useAuth();
    const { createParticipant, checkIsRegistered, unsubscribeFromRace } = useParticipant();
    const [isRegistered, setIsRegistered] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [carrera, setCarrera] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showMap, setShowMap] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
// Add new state for loading button
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInscription = async () => {
        setIsProcessing(true);
        try {
            if (isRegistered) {
                const success = await unsubscribeFromRace(user, carrera.id);
                if (success) {
                    setIsRegistered(false);
                    await fetchDetail();
                }
            } else {
                const result = await createParticipant(user, carrera.id);
                if (result) {
                    setIsRegistered(true);
                    await fetchDetail();
                }
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            await fetchDetail();
            if (user && carrera) {
                await checkRegistrationStatus();
            }
        };
        loadData();
    }, [id, user, carrera, isRegistered]);

    const checkRegistrationStatus = async () => {
        if (user) {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${API_URL}/running_participant`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const participants = await response.json();
                const isRegisteredInRace = participants.some(
                    participant => participant.user.id === user.id && participant.running.id === carrera.id
                );
                setIsRegistered(isRegisteredInRace);
            } catch (error) {
                console.error('Error checking registration:', error);
            }
        }
    };
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
    // Remove the separate button render section that was causing the error
    // and move it into the main return statement
    
    return (
        <div className="max-w-4xl mx-auto my-4 md:my-10 p-4 md:p-6 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col items-start justify-between">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-4 cursor-pointer hover:shadow-xl rounded-full md:block"
                >
                    <KeyboardBackspaceSharpIcon style={{ fontSize: 35, color: 'black' }} />
                </button>

                {showMap ? (
                    <div className="relative w-full h-[300px] md:h-[calc(100%-48px)]">
                        <iframe
                            src={getMapUrl(carrera.coordinates)}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="rounded-lg"
                            title="Location Map"
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
                        className="w-full h-[300px] md:h-[calc(100%-48px)] object-cover rounded-lg"
                    />
                )}
            </div>
            <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-4 cursor-pointer hover:shadow-xl rounded-full md:hidden"
                >
                    <KeyboardBackspaceSharpIcon style={{ fontSize: 35, color: 'black' }} />
                </button>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#93032E] mb-2">{carrera.name}</h1>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{carrera.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 [&>p>*]:mx-2 md:[&>p>*]:mx-5 text-sm md:text-base">
                        <p className="flex items-center">
                            <CalendarMonthSharpIcon style={{ fontSize: 30, color: 'black' }} />
                            {new Date(carrera.date).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'numeric',
                                year: 'numeric'
                            })} {new Date(carrera.date).toLocaleTimeString('es-ES', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}h
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
                                    carrera?.status === "Abierta" ? "bg-green-500 border-green-800" : "bg-red-500 border-red-800"
                                }`}
                            >
                                {carrera?.status}
                            </span>
                            {isRegistered ? (
                                <button
                                    onClick={handleInscription}
                                    disabled={isProcessing}
                                    className="py-1 px-4 rounded-2xl text-base md:text-lg font-semibold text-white 
                                        bg-red-600 hover:bg-red-700 cursor-pointer transition-colors duration-200 
                                        flex items-center justify-center min-w-[180px] h-[38px]"
                                >
                                    {isProcessing ? (
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : " Desinscribirse"}
                                </button>
                            ) : (
                                user && carrera?.status === "Abierta" && (
                                    <button
                                        onClick={handleInscription}
                                        disabled={isProcessing}
                                        className="py-1 px-4 rounded-2xl text-base md:text-lg font-semibold text-white 
                                            bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors duration-200
                                            flex items-center justify-center min-w-[180px] h-[38px]"
                                    >
                                        {isProcessing ? (
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : "Inscribirse"}
                                    </button>
                                )
                            )}
                            {!user && carrera?.status === "Abierta" && (
                                <button
                                    onClick={() => navigate('/login')}
                                    className="py-1 px-4 rounded-2xl text-base md:text-lg font-semibold text-white 
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
