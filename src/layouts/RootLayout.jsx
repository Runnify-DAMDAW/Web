import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f0f2f5]">
      <header className="z-50 sticky top-0 w-full h-24 md:h-36 px-4 md:px-16 flex items-center bg-gradient-to-r from-[#587ad7] to-[#2c302e]">
        <img
          src="LOGO.png"
          className="h-full cursor-pointer"
          alt=""
          onClick={() => navigate("/home")}
        />
      </header>

      <main className="min-h-[27rem]">
        <Outlet />
      </main>

      <footer className="text-white w-full h-auto md:h-20 px-4 md:px-16 py-4 flex flex-col md:flex-row items-center bg-[#3c403e]">
        <p className="flex px-4 md:px-12 text-sm mb-4 md:mb-0">2025 Runnify. All rights reserved.</p>
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
