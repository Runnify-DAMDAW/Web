import React from 'react';

const Filter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative inline-block text-left">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Buscar por nombre..."
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
    </div>
  );
};

export default Filter;