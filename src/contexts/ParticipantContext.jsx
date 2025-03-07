import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
const API_URL = import.meta.env.VITE_API_RUNNING;

const ParticipantContext = createContext();

export const ParticipantProvider = ({ children }) => {
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
    };

    const hideToast = () => {
        setToast({ show: false, message: '', type: '' });
    };

    const createParticipant = async (user, raceId) => {
        try {
            const token = localStorage.getItem('token');

            // Check if user is already registered
            const checkResponse = await fetch(`${API_URL}/running_participant`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const participants = await checkResponse.json();
            const isAlreadyRegistered = participants.some(
                participant => participant.user.id === user.id && participant.running.id === raceId
            );

            if (isAlreadyRegistered) {
                showToast('Ya estás inscrito en esta carrera', 'error');
                return null;
            }

            // Create new participant
            const participantData = {
                running: raceId,
                user: user.id,
                banned: false,
                dorsal: Math.floor(Math.random() * 1000) + 1
            };

            const response = await fetch(`${API_URL}/running_participant/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(participantData)
            });

            const data = await response.json();
            
            if (!response.ok) {
                showToast(data.detail || 'Error al crear participante', 'error');
                return null;
            }

           
            

            showToast('¡Inscripción realizada con éxito!', 'success');
            return data;
        } catch (error) {
            showToast('Error al realizar la inscripción', error);
            return null;
        }
    };

    const checkIsRegistered = async (user, raceId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/running_participant`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const participants = await response.json();
            return participants.some(
                participant => participant.user.id === user.id && participant.running.id === raceId
            );
        } catch (error) {
            return false;
        }
    };

    const unsubscribeFromRace = async (user, raceId) => {
        try {
            const token = localStorage.getItem('token');
            
            // First get the participant ID
            const participantsResponse = await fetch(`${API_URL}/running_participant`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const participants = await participantsResponse.json();
            const participant = participants.find(
                p => p.user.id === user.id && p.running.id === raceId
            );

            if (!participant) {
                throw new Error('No se encontró la inscripción');
            }

            // Delete using participant ID
            const response = await fetch(`${API_URL}/running_participant/${participant.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al cancelar la inscripción');
            }

            
           

            showToast('Inscripción cancelada con éxito', 'success');
            return true;
        } catch (error) {
            showToast('Error al cancelar la inscripción', 'error');
            return false;
        }
    };

    return (
        <ParticipantContext.Provider value={{ 
            createParticipant, 
            checkIsRegistered,
            unsubscribeFromRace 
        }}>
            {children}
            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={hideToast}
                />
            )}
        </ParticipantContext.Provider>
    );
};

export const useParticipant = () => {
    const context = useContext(ParticipantContext);
    if (!context) {
        throw new Error("useParticipant must be used within a ParticipantProvider");
    }
    return context;
};