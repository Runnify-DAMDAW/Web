import React from 'react'
import { useEffect, useState } from "react";
import CarreraCard from '../components/CarreraCard';
import ApiService from '../utils/ApiService';
import Spinner from '../components/Spinner';
import { useCarreras } from '../contexts/CarreraContext';

const Home = () => {
	
	const { carreras, loading } = useCarreras();

	if(loading){
		return <Spinner />;
	}

	return (
		<div className='flex items-center self-center px-24'>
			<div className='flex flex-wrap justify-start items-start my-8'>
				{carreras.map( (carrera) => (
					<CarreraCard carrera={carrera} key={carrera.id}/>
				))}
			</div>
		</div>
	)
}

export default Home