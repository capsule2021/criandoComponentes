import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import DigimonProvider from "./providers/digimon-provider";

const Providers = () => {
  return (
    <main>
      <DigimonProvider>
        <ResetCSS />
        <App />
      </DigimonProvider>
    </main>
  );
};

export default Providers;
