import React, { useState } from "react";
import * as S from "./styled";
import useDigimon from "../../hooks/digimon-hooks";
import Digimons from "../../components/digimons";

const Header = () => {
  const { getDigi } = useDigimon();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetDigi = () => {
    return getDigi(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o nome do digimon..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetDigi}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
