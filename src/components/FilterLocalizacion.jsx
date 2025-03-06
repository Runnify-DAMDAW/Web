import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useCarreras } from '../contexts/CarreraContext';

const FilterLocalizacion = ({ searchTerm, onSearchChange }) => {
  const { carreras } = useCarreras();
  const uniqueLocations = ["Todas", ...new Set(carreras?.map(carrera => carrera.location) || [])];

  return (
    <div className="relative inline-block text-left">
      <select
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {uniqueLocations.map((localizacion) => (
          <option key={localizacion} value={localizacion === "Todas" ? "" : localizacion}>
            {localizacion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterLocalizacion;