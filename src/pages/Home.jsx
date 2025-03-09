import React, { useEffect, useState } from "react";

import CarreraCard from "../components/CarreraCard";
import ApiService from "../utils/ApiService";
import Spinner from "../components/Spinner";
import FilterCategoria from "../components/FilterCategoria";
import Filter from "../components/Filter";
import { useCarreras } from "../contexts/CarreraContext";
import FilterStatus from "../components/FilterStatus";
import FilterLocalizacion from "../components/FilterLocalizacion";
import FilterFecha from "../components/FilterFecha";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
// Add to imports
import FilterCuota from "../components/FilterCuota";
import { useAuth } from "../contexts/AuthContext";
import FilterInscripciones from "../components/FilterInscripciones";

const Home = () => {
  const { user } = useAuth();
  const { carreras, loading, loadData } = useCarreras();
  const [searchTermInscripciones, setSearchTermInscripciones] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermCategoria, setSearchTermCategoria] = useState("");
  const [searchTermStatus, setSearchTermStatus] = useState("");
  const [searchTermLocation, setSearchTermLocation] = useState("");
  const [searchTermFecha, setSearchTermFecha] = useState("");
  const [searchTermCuota, setSearchTermCuota] = useState("");
  const [filteredCarreras, setFilteredCarreras] = useState([]);
  const [extended, setExtended] = useState(false);

  useEffect(() => {
    loadData();
  }, [searchTermInscripciones]);

  useEffect(() => {
    if (carreras) {
      let filtered = [...carreras];

      if (searchTermInscripciones && user) {
        filtered = filtered.filter((carrera) => {
          const isUserInscribed = carrera.runningParticipants.some(
            (participant) => participant.user.id === user.id
          );
          return isUserInscribed;
        });
      }

      filtered = filtered
        .filter((carrera) =>
          carrera.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
          (carrera) =>
            searchTermCategoria === "" ||
            carrera.category.toLowerCase() === searchTermCategoria.toLowerCase()
        )
        .filter(
          (carrera) =>
            searchTermStatus === "" ||
            carrera.status.toLowerCase() === searchTermStatus.toLowerCase()
        )
        .filter(
          (carrera) =>
            searchTermLocation === "" ||
            carrera.location
              .toLowerCase()
              .includes(searchTermLocation.toLowerCase())
        )
        .filter(
          (carrera) =>
            searchTermFecha === "" || carrera.date === searchTermFecha
        )
        .filter((carrera) => {
          if (searchTermCuota === "") return true;
          const fee = carrera.entry_fee;
          switch (searchTermCuota) {
            case "0":
              return fee === 0;
            case "<10":
              return fee < 10;
            case "10-20":
              return fee >= 10 && fee <= 20;
            case "20-30":
              return fee > 20 && fee <= 30;
            case ">30":
              return fee > 30;
            default:
              return true;
          }
        });

      setFilteredCarreras(filtered);
    }
  }, [
    carreras,
    searchTermInscripciones,
    user,
    searchTerm,
    searchTermCategoria,
    searchTermStatus,
    searchTermLocation,
    searchTermFecha,
    searchTermCuota,
  ]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div
        className={`[&>div>div>select]:appearance-none overflow-hidden transition-[max-height] duration-500 ease-in ${
          extended
            ? "max-h-[500px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        } flex flex-wrap justify-center gap-4 mb-4 mt-2 px-4 md:px-24`}
      >
        {/* Add FilterInscripciones component */}
        {user && (
          <div className="flex flex-col w-full sm:w-auto">
            <label className="mb-2 text-gray-800 text-left font-medium">
              Mis carreras:
            </label>
            <FilterInscripciones onFilterChange={setSearchTermInscripciones} />
          </div>
        )}
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 text-gray-800 text-left font-medium">
            Nombre:
          </label>
          <Filter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 text-gray-800 text-left font-medium">
            Categoría:
          </label>
          <FilterCategoria
            searchTerm={searchTermCategoria}
            onSearchChange={setSearchTermCategoria}
          />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 text-gray-800 text-left font-medium">
            Estado:
          </label>
          <FilterStatus
            searchTerm={searchTermStatus}
            onSearchChange={setSearchTermStatus}
          />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 text-gray-800 text-left font-medium">
            Localización:
          </label>
          <FilterLocalizacion
            searchTerm={searchTermLocation}
            onSearchChange={setSearchTermLocation}
          />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 text-gray-800 text-left font-medium">
            Fecha:
          </label>
          <FilterFecha
            searchTerm={searchTermFecha}
            onSearchChange={setSearchTermFecha}
          />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 text-gray-800 text-left font-medium">
            Cuota:
          </label>
          <FilterCuota
            searchTerm={searchTermCuota}
            onSearchChange={setSearchTermCuota}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => setExtended((prev) => !prev)}
          className={`bg-gray-500/50 border-2 border-gray-700/70 px-12 rounded-2xl cursor-pointer`}
        >
          <div
            className={`${extended ? "rotate-180" : "rotate-0"} duration-300`}
          >
            <ArrowDownwardSharpIcon
              title="Ubicación"
              style={{ fontSize: 35, color: "black" }}
            />
          </div>
        </button>
      </div>
      <div className="px-4 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {filteredCarreras.map((carrera) => (
            <CarreraCard carrera={carrera} key={carrera.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
