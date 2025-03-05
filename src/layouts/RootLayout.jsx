import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const RootLayout = () => {
  const [extended, setExtended] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    name: "",
    location: "",
    date: "",
    category: "",
    status: "",
    fee: "",
    enrolled: false,
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleFilter = (filter) => {
    setActiveFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((item) => item !== filter); // Eliminar si ya está activado
      } else {
        return [...prev, filter]; // Añadir si no está activado
      }
    });
  };

  const removeFilter = (filter) => {
    setActiveFilters((prev) => prev.filter((item) => item !== filter)); // Eliminar el filtro
  };

  return (
    <div className="bg-[#909590]">

      <header className="z-50 sticky top-0 w-full h-36 px-16 flex items-center bg-gradient-to-r from-[#87ad65] to-[#2c302e]">
        <button onClick={() => setExtended((prev) => !prev)} className="cursor-pointer">
          <MenuSharpIcon title="Fecha" style={{ fontSize: 35, color: 'white' }} />
        </button>

        <div className={`${extended ? "w-[20%] ease-out" : "w-0 opacity-0 ease-in [&>button]:hidden"} sticky top-0 duration-500 flex flex-wrap
		[&>button]:w-1/2 [&>button]:bg-white [&>button]:border-gray-500 [&>button]:border-2
		`}>
          <button className={`${activeFilters.includes("Nombre") ? "hidden" : "block"}`} onClick={() => toggleFilter('Nombre')}>Nombre</button>
          <button className={`${activeFilters.includes("Localización") ? "hidden" : "block"}`} onClick={() => toggleFilter('Localización')}>Localización</button>
          <button className={`${activeFilters.includes("Fecha") ? "hidden" : "block"}`} onClick={() => toggleFilter('Fecha')}>Fecha</button>
          <button className={`${activeFilters.includes("Categoría") ? "hidden" : "block"}`} onClick={() => toggleFilter('Categoría')}>Categoría</button>
          <button className={`${activeFilters.includes("Status") ? "hidden" : "block"}`} onClick={() => toggleFilter('Status')}>Status</button>
          <button className={`${activeFilters.includes("Cuota") ? "hidden" : "block"}`} onClick={() => toggleFilter('Cuota')}>Cuota</button>
          <button className={`${activeFilters.includes("Inscrito") ? "hidden" : "block"}`} onClick={() => toggleFilter('Inscrito')}>Inscrito</button>
        </div>

		{activeFilters.includes("Nombre") && (
        <div className="p-4">
          <input
            type="text"
            name="name"
            placeholder="Buscar por nombre"
            value={filters.name}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          />
		  <button
			onClick={() => removeFilter("Nombre")}
			className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
			>
			X
			</button>
        </div>
      )}
      {activeFilters.includes("Localización") && (
        <div className="p-4">
          <input
            type="text"
            name="location"
            placeholder="Buscar por localización"
            value={filters.location}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          />
		  <button
			onClick={() => removeFilter("Localización")}
			className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
			>
			X
			</button>
        </div>
      )}
      {activeFilters.includes("Fecha") && (
        <div className="p-4">
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          /><button
		  onClick={() => removeFilter("Fecha")}
		  className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
		  >
		  X
		  </button>
        </div>
      )}
      {activeFilters.includes("Categoría") && (
        <div className="p-4">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Categoría</option>
            <option value="Maratón">Maratón</option>
            <option value="5K">5K</option>
            <option value="Ultra">Ultra</option>
            <option value="Trail">Trail</option>
          </select>
		  <button
			onClick={() => removeFilter("Categoría")}
			className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
			>
			X
			</button>
        </div>
      )}
      {activeFilters.includes("Status") && (
        <div className="p-4">
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Status</option>
            <option value="Abierta">Abierta</option>
            <option value="Cerrada">Cerrada</option>
            <option value="Cancelada">Cancelada</option>
          </select>
		  <button
			onClick={() => removeFilter("Status")}
			className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
			>
			X
			</button>
        </div>
      )}
      {activeFilters.includes("Cuota") && (
        <div className="p-4">
          <select
            name="fee"
            value={filters.fee}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar Cuota</option>
            <option value="gratis">Gratis</option>
            <option value=">10">Mayor a 10</option>
            <option value="10-20">De 10 a 20</option>
            <option value="20-30">De 20 a 30</option>
            <option value="<30">Menor a 30</option>
          </select><button
			onClick={() => removeFilter("Cuota")}
			className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
			>
			X
			</button>
        </div>
      )}
      {activeFilters.includes("Inscrito") && (
        <div className="p-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="enrolled"
              checked={filters.enrolled}
              onChange={handleFilterChange}
            />
            Inscrito
          </label><button
			onClick={() => removeFilter("Inscrito")}
			className="ml-2 bg-red-500 text-white px-2 py-1 rounded-xl"
			>
			X
			</button>
        </div>
      )}


        {/* Logo */}
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
