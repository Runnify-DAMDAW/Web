import React from 'react';

const FilterCategoria = ({ searchTerm, onSearchChange }) => {
  const categorias = ["Todas", "Maratón", "Sprint", "Carrera de obstáculos", "Trail Running"];

  return (
    <div className="relative w-96">
      <select
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-4 pr-4 py-2.5 bg-white/10 border border-white/30 rounded-full
                   focus:outline-none focus:border-white/50 text-white placeholder-white/50
                   transition-all duration-300 hover:border-white/40 appearance-none"
      >
        {categorias.map((categoria) => (
          <option className='text-black' key={categoria} value={categoria === "Todas" ? "" : categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategoria;
