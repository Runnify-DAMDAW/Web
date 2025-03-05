import { createContext, useContext, useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_CARRERAS_URL;

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
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        console.error("error en", response);
        setError(error);
      }
      const data = await response.json();
      setCarreras(data);
    } catch (error) {
      console.error(error);
      setError(error);
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
