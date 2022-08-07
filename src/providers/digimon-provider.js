import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const DigimonContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const DigimonProvider = ({ children }) => {
  const [DigimonState, setDigimonState] = useState({
    hasUser: false,
    loading: false,
    dados: undefined,
  });

  const getDigi = (name) => {
    setDigimonState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`name/${name}`)
      .then(({ data }) => {
        setDigimonState((prevState) => ({
          ...prevState,
          hasUser: true,
          dados: data,
        }));
      })
      .catch(({ data }) => {
        setDigimonState((prevState) => ({
          ...prevState,
          hasUser: false,
          dados: undefined,
        }));
      })
      .finally(() => {
        setDigimonState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };  

  const contextValue = {
      DigimonState,
      getDigi: useCallback((name) => getDigi(name), []),
  };

  return (
    <DigimonContext.Provider value={contextValue}>
      {children}
    </DigimonContext.Provider>
  );
};

export default DigimonProvider;
