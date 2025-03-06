import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Filter from '../components/Filter';

const RootLayout = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
<<<<<<< HEAD

  return (
    <div className="bg-[#909590]">
=======
  const [extended, setExtended] = useState(false);
=======
  const [extended, setExtended] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const navigate = useNavigate();
>>>>>>> origin/Rocio

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

  return (
    <div className="bg-[#909590]">
      <header className="z-50 sticky top-0 w-full h-36 px-16 flex items-center bg-gradient-to-r from-[#87ad65] to-[#2c302e]">
        <button onClick={() => setExtended(prev => !prev)} className="cursor-pointer">
          <MenuSharpIcon title="Fecha" style={{ fontSize: 35, color: 'white' }} />
        </button>
        
        {/* Filtros de búsqueda */}
        <div className={`${extended ? "w-full ease-out" : "w-0 opacity-0 ease-in"} duration-1000`}>
            <input
              type="text"
              name="name"
              placeholder="Buscar por nombre"
              value={filters.name}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded w-1/6 sm:w-1/6"
            />
            <input
              type="text"
              name="location"
              placeholder="Buscar por localización"
              value={filters.location}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded w-1/6 sm:w-1/6"
            />
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded w-1/6 sm:w-1/6"
            />
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded w-1/6 sm:w-1/6"
            >
              <option value="">Seleccionar Categoría</option>
              <option value="Maratón">Maratón</option>
              <option value="5K">5K</option>
              <option value="Ultra">Ultra</option>
              <option value="Trail">Trail</option>
            </select>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded w-1/6 sm:w-1/6"
            >
              <option value="">Seleccionar Status</option>
              <option value="Abierta">Abierta</option>
              <option value="Cerrada">Cerrada</option>
              <option value="Cancelada">Cancelada</option>
            </select>
            <select
              name="fee"
              value={filters.fee}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded w-1/6 sm:w-1/6"
            >
              <option value="">Seleccionar Cuota</option>
              <option value="gratis">Gratis</option>
              <option value=">10">Mayor a 10</option>
              <option value="10-20">De 10 a 20</option>
              <option value="20-30">De 20 a 30</option>
              <option value="<30">Menor a 30</option>
            </select>
            <label className="flex items-center gap-2 w-1/6 sm:w-1/6">
              <input
                type="checkbox"
                name="enrolled"
                checked={filters.enrolled}
                onChange={handleFilterChange}
              />
              Inscrito
            </label>
        </div>
>>>>>>> origin/Rocio

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
