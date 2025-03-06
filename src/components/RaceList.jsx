import React, { useState, useEffect } from 'react';
import Filter from './Filter';

const RaceList = () => {
  const [carreras, setCarreras] = useState([]);
  const [carrerasFiltradas, setCarrerasFiltradas] = useState([]);
  const [extended, setExtended] = useState(false);

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

  return (
    <div className="container mx-auto px-4">
      <Filter 
        onFilterChange={handleFilterChange} 
        carreras={carreras}
        extended={extended}
        setExtended={setExtended}
      />
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