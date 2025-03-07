import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#909590]">

      <header className="sticky top-0 w-full h-36 px-16 flex items-center bg-gradient-to-r from-[#87ad65] via-[#2c302e] to-[#2c302e]">


        <img src="LOGO.png" className="h-full" alt="" onClick={()=>navigate("/home")}/>
        {/* <h1 className='text-white flex px-12 text-4xl font-bold'>Runnify</h1> */}
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
