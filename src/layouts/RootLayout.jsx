import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#909590]">
      <header className="sticky top-0 w-full h-36 px-16 flex items-center bg-gradient-to-r from-[#537a5a] to-[#2c302e]">
      <img
        src="LOGO.png"
        className="h-full cursor-pointer"
        alt="Logo"
        onClick={() => navigate("/home")}/>
        {/* <h1 className='text-white flex px-12 text-4xl font-bold'>Runnify</h1> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default RootLayout;
