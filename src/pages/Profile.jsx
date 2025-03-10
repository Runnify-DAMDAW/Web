import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            localStorage.removeItem('user');
            navigate('/');
            window.location.reload(); 
            
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    if (!user) {
        return null;
    }

    return (
        <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img 
                        src={user?.image || "https://via.placeholder.com/150"} 
                        alt={user?.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-sm text-gray-500">Nombre</h2>
                        <p className="text-xl font-semibold">{user?.name}</p>
                    </div>
                    
                    <div>
                        <h2 className="text-sm text-gray-500">Email</h2>
                        <p className="text-lg">{user?.email}</p>
                    </div>
                    
                    <div>
                        <h2 className="text-sm text-gray-500">Edad</h2>
                        <p className="text-lg">{user?.age || "No especificada"}</p>
                    </div>
                    
                    <div>
                        <h2 className="text-sm text-gray-500">Sexo</h2>
                        <p className="text-lg">{user?.gender || "No especificado"}</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
};

export default Profile;
