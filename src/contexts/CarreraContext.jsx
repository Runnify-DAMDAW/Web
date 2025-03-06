import { createContext, useContext, useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_RUNNING;

const CarreraContext = createContext();

export const useCarreras = () => {
  const contex = useContext(CarreraContext);
  if (!contex) {
    throw new Error("useCarreras must be used within an CarreraProvider");
  }
  return contex;
};

export const CarreraProvider = ({ children }) => {
  const [carreras, setCarreras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(`${API_URL}/running`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCarreras(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CarreraContext.Provider value={{ carreras, loading, error }}>
      {children}
    </CarreraContext.Provider>
  );
};
