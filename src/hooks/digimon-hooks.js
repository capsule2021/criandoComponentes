import { useContext } from "react";
import { DigimonContext } from "../providers/digimon-provider";

const useDigimon = () => {
  const { DigimonState, getDigi } = useContext(
    DigimonContext
  );

  return { DigimonState, getDigi };
};

export default useDigimon;
