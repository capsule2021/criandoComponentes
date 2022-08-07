import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Digimons from "./components/digimons";
import useDigimon from "./hooks/digimon-hooks";

const App = () => {
  const { DigimonState } = useDigimon();
  return (
    <Layout>
      {DigimonState.hasUser ? (
        <>
          {DigimonState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
            </>
          )}
        </>
      ) : (
        <Digimons />
      )}
    </Layout>
  );
};

export default App;
