import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const FilterInscripciones = ({ onFilterChange }) => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="relative inline-block text-left">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={(e) => onFilterChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-800">Mis Inscripciones</span>
      </label>
    </div>
  );
};

export default FilterInscripciones;