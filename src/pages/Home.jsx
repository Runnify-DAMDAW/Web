import React, { useEffect, useState } from 'react'

import CarreraCard from '../components/CarreraCard';
import ApiService from '../utils/ApiService';
import Spinner from '../components/Spinner';
import Filter from '../components/Filter';
import { useCarreras } from '../contexts/CarreraContext';

const Home = () => {
  const { carreras, loading } = useCarreras();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCarreras, setFilteredCarreras] = useState([]);

  useEffect(() => {
    if (carreras) {
      const filtered = carreras.filter(carrera =>
        carrera.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCarreras(filtered);
    }
  }, [searchTerm, carreras]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className='flex justify-center mb-4 mt-2'>
        <Filter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <div className='flex items-center self-center px-24'>
        <div className='flex flex-wrap justify-start items-start my-8 w-full'>
          {filteredCarreras.map((carrera) => (
            <CarreraCard carrera={carrera} key={carrera.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;