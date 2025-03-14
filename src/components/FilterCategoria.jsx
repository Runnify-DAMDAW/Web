import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const FilterCategoria = ({ searchTerm, onSearchChange }) => {
  const categorias = ["Todas", "Maratón", "Sprint", "Carrera de obstáculos", "Relevos"];

  return (
    <div className="relative inline-block text-left">
      <select
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria === "Todas" ? "" : categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategoria;
