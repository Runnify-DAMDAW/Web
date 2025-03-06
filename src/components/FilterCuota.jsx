import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useCarreras } from '../contexts/CarreraContext';

const FilterCuota = ({ searchTerm, onSearchChange }) => {
  const { carreras } = useCarreras();
  
  const cuotaRanges = [
    { label: "Todas", value: "" },
    { label: "Gratis", value: "0" },
    { label: "Menos de 10€", value: "<10" },
    { label: "10€ - 20€", value: "10-20" },
    { label: "20€ - 30€", value: "20-30" },
    { label: "Más de 30€", value: ">30" }
  ];
  
  return (
    <div className="relative inline-block text-left">
      <select
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {cuotaRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCuota;