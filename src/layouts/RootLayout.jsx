import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { useAuth } from "../contexts/AuthContext";

const RootLayout = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const isUserLoggedIn = user && localStorage.getItem('user');

    return (
        <div className="bg-[#f0f2f5] font-display min-h-screen flex flex-col">
            <header className="z-50 sticky top-0 w-full h-24 md:h-36 px-4 md:px-16 flex items-center justify-between bg-gradient-to-r from-[#587ad7] to-[#2c3030]">
                <img
                    src="LOGO.png"
                    className="h-full cursor-pointer"
                    alt=""
                    onClick={() => navigate("/")}
                />
                {isUserLoggedIn ? (
                    <button
                        onClick={() => navigate("/profile")}
                        className="bg-gray-100 p-1 rounded-lg border-[#587ad7] border-2 hover:bg-gray-300"
                    >
                        <div className="flex pr-3 items-center gap-2 transform hover:scale-90">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                alt="user"
                                className="w-10 h-10 rounded-full"
                            />
                            {user.name}
                        </div>
                    </button>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-gray-100 p-2 px-4 rounded-lg border-[#587ad7] border-2 hover:bg-gray-300 transform hover:scale-90"
                    >
                        Iniciar Sesión
                    </button>
                )}
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="text-white w-full h-auto md:h-20 px-4 md:px-16 py-4 flex flex-col md:flex-row items-center bg-[#2c3030] mt-auto">
                <p className="flex px-4 md:px-12 text-sm mb-4 md:mb-0">
                    2025 Runnify. All rights reserved.
                </p>
                <ul className="flex flex-wrap justify-center [&>li]:font-bold [&>li]:mx-4 md:[&>li]:mx-8 [&>li]:my-2">
                    <li>Adrián</li>
                    <li>Arturo García</li>
                    <li>Allae</li>
                    <li>David León</li>
                    <li>Pablo López</li>
                    <li>Rocio</li>
                </ul>
            </footer>
        </div>
    );
};

export default RootLayout;
