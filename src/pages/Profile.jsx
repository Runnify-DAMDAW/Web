import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
    const { user } = useAuth();

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
        </div>
    );
};

export default Profile;
