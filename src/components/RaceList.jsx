import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import FilterCategoria from './FilterCategoria';
import FilterLocalizacion from './FilterLocalizacion';

const RaceList = () => {
  const [carreras, setCarreras] = useState([]);
  const [carrerasFiltradas, setCarrerasFiltradas] = useState([]);
  const [extended, setExtended] = useState(false);
  const [searchTermLocation, setSearchTermLocation] = useState('');

  useEffect(() => {
    const fetchCarreras = async () => {
      try {
        const response = await fetch('/carreras.json');
        if (!response.ok) {
          throw new Error('Error al cargar las carreras');
        }
        const data = await response.json();
        setCarreras(data.carreras);
        setCarrerasFiltradas(data.carreras);
      } catch (error) {
        console.error('Error loading races:', error);
      }
    };
    fetchCarreras();
  }, []);

  const handleFilterChange = (filteredCarreras) => {
    if (Array.isArray(filteredCarreras)) {
      setCarrerasFiltradas(filteredCarreras);
    }
  };

  const handleLocationChange = (value) => {
    const filtered = value
      ? carreras.filter(carrera => carrera.location.includes(value))
      : carreras;
    setCarrerasFiltradas(filtered);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center gap-4 mb-4 p-4 bg-gray-800 rounded-lg">
        <FilterLocalizacion 
          searchTerm={searchTermLocation}
          onSearchChange={handleLocationChange}
        />
        <Filter 
          onFilterChange={handleFilterChange} 
          carreras={carreras}
          extended={extended}
          setExtended={setExtended}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {carrerasFiltradas.map(carrera => (
          <div key={carrera.id} className="border p-4 rounded-lg shadow">
            <h3 className="font-bold">{carrera.name}</h3>
            <p>{carrera.location}</p>
            <p>Categoría: {carrera.category}</p>
            <p>Estado: {carrera.status}</p>
            <p>Cuota: ${carrera.entry_fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceList;