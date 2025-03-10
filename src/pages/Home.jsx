import React, { useEffect, useState } from 'react'

import CarreraCard from '../components/CarreraCard';
import ApiService from '../utils/ApiService';
import Spinner from '../components/Spinner';
import FilterCategoria from '../components/FilterCategoria';
import Filter from '../components/Filter';
import { useCarreras } from '../contexts/CarreraContext';
import FilterStatus from '../components/FilterStatus';
import FilterLocalizacion from '../components/FilterLocalizacion';
import FilterFecha from '../components/FilterFecha';
// Add to imports
import FilterCuota from '../components/FilterCuota';

const Home = () => {
  const { carreras, loading } = useCarreras();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermCategoria, setSearchTermCategoria] = useState('');
  const [searchTermStatus, setSearchTermStatus] = useState('');
  const [searchTermLocation, setSearchTermLocation] = useState('');
  const [searchTermFecha, setSearchTermFecha] = useState('');
  const [searchTermCuota, setSearchTermCuota] = useState('');
  const [filteredCarreras, setFilteredCarreras] = useState([]);
  useEffect(() => {
    if (carreras) {
      const filtered = carreras
      .filter(carrera =>
        carrera.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(carrera =>
        searchTermCategoria === "" || carrera.category.toLowerCase() === searchTermCategoria.toLowerCase()
      )
      .filter(carrera =>
        searchTermStatus === "" || carrera.status.toLowerCase() === searchTermStatus.toLowerCase()
      )
      .filter(carrera =>
        searchTermLocation === "" || carrera.location.toLowerCase().includes(searchTermLocation.toLowerCase())
      )
      .filter(carrera =>
        searchTermFecha === "" || carrera.date === searchTermFecha
      )
      .filter(carrera => {
        if (searchTermCuota === "") return true;
        const fee = carrera.entry_fee;
        switch(searchTermCuota) {
          case "0": return fee === 0;
          case "<10": return fee < 10;
          case "10-20": return fee >= 10 && fee <= 20;
          case "20-30": return fee > 20 && fee <= 30;
          case ">30": return fee > 30;
          default: return true;
        }
      });

      setFilteredCarreras(filtered);
    }
  }, [searchTerm, searchTermCategoria, searchTermStatus, searchTermLocation, searchTermFecha, searchTermCuota, carreras]);

  return (
    <div>
      <div className='flex flew-wrap justify-center mb-4 mt-2 [&>div]:mx-2'>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800 text-left font-medium">Nombre</label>
          <Filter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800 text-left font-medium">Categoría</label>
          <FilterCategoria searchTerm={searchTermCategoria} onSearchChange={setSearchTermCategoria} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800 text-left font-medium">Estado</label>
          <FilterStatus searchTerm={searchTermStatus} onSearchChange={setSearchTermStatus} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800 text-left font-medium">Localización</label>
          <FilterLocalizacion searchTerm={searchTermLocation} onSearchChange={setSearchTermLocation} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800 text-left font-medium">Fecha</label>
          <FilterFecha searchTerm={searchTermFecha} onSearchChange={setSearchTermFecha} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-gray-800 text-left font-medium">Cuota</label>
          <FilterCuota searchTerm={searchTermCuota} onSearchChange={setSearchTermCuota} />
        </div>
      </div>
      <div className='flex items-center self-center px-24'>
        <div className='flex flex-wrap justify-start items-start my-8 w-full'>
          {filteredCarreras.map((carrera) => (
            <CarreraCard carrera={carrera} key={carrera.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;