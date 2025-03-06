import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useCarreras } from '../contexts/CarreraContext';

const FilterFecha = ({ searchTerm, onSearchChange }) => {
  const { carreras } = useCarreras();
  const uniqueDates = ["Todas", ...new Set(carreras?.map(carrera => carrera.date) || [])]
    .filter(date => date)
    .sort((a, b) => a === "Todas" ? -1 : b === "Todas" ? 1 : new Date(a) - new Date(b));

  return (
    <div className="relative inline-block text-left">
      <select
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {uniqueDates.map((fecha) => (
          <option key={fecha} value={fecha === "Todas" ? "" : fecha}>
            {fecha === "Todas" ? fecha : new Date(fecha).toLocaleDateString()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterFecha;