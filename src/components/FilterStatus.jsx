import React from 'react';

const FilterStatus = ({ searchTerm, onSearchChange }) => {
  const statusOptions = ["Todas", "Abierta", "Cerrada", "Cancelada"];

  return (
    <div className="relative inline-block text-left">
      <select
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {statusOptions.map((status) => (
          <option key={status} value={status === "Todas" ? "" : status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterStatus;
