import React, { useEffect, useState } from 'react'

import CarreraCard from '../components/CarreraCard';
import ApiService from '../utils/ApiService';
import Spinner from '../components/Spinner';
import FilterCategoria from '../components/FilterCategoria';
import Filter from '../components/Filter';
import { useCarreras } from '../contexts/CarreraContext';
import FilterStatus from '../components/FilterStatus';

const Home = () => {
  const { carreras, loading } = useCarreras();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermCategoria, setSearchTermCategoria] = useState('');
  const [searchTermStatus, setSearchTermStatus] = useState('');
  const [filteredCarreras, setFilteredCarreras] = useState([]);

  useEffect(() => {
    if (carreras) {
      const filtered = carreras
      .filter(carrera =>
        carrera.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(carrera =>
        searchTermCategoria === "" || carrera.category.toLowerCase() === searchTermCategoria.toLowerCase()
      )
      .filter(carrera =>
        searchTermStatus === "" || carrera.status.toLowerCase() === searchTermStatus.toLowerCase()
      );

      setFilteredCarreras(filtered);
    }
  }, [searchTerm, searchTermCategoria, searchTermStatus, carreras]);
  
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className='flex flew-wrap justify-center mb-4 mt-2 [&>div]:mx-2'>
        <Filter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <FilterCategoria searchTerm={searchTermCategoria} onSearchChange={setSearchTermCategoria} />
        <FilterStatus searchTerm={searchTermStatus} onSearchChange={setSearchTermStatus} />
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