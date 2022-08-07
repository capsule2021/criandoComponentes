import React from "react";
import useDigimon from "../../hooks/digimon-hooks";
import * as S from "./styled";

const Profile = () => {
  const { DigimonState } = useDigimon();
  
  return (
    <S.Wrapper>
      <S.WrapperImage src={DigimonState.dados[0]['img']} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
          <h1>{DigimonState.dados[0]['name']} </h1>
          <S.WrapperUserGeneric>
            <h3>Level:  {DigimonState.dados[0]['level']}</h3>
          </S.WrapperUserGeneric>
        </div>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
