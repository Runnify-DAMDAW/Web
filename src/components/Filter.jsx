import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-96">
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-3 text-white-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar carrera..."
          className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/30 rounded-full
                     focus:outline-none focus:border-white/50 text-white placeholder-white/50
                     transition-all duration-300 hover:border-white/40"
        />
      </div>
    </div>
  );
};

export default Filter;