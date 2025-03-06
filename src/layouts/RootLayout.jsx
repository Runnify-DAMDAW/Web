import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Filter from '../components/Filter';

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#909590]">
      <header className="z-50 sticky top-0 w-full h-36 px-16 flex items-center bg-gradient-to-r from-[#87ad65] to-[#2c302e]">
        <Filter />
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

      <footer className="text-white w-full h-20 px-16 flex items-center bg-gradient-to-r from-[#2c302e] to-[#87ad65]">
        <p className="flex px-12 text-sm">2025 Runnify. All rights reserved.</p>
        <ul className="flex [&>li]:font-bold [&>li]:mx-8">
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
