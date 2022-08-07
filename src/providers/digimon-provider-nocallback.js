import React, { useEffect, useState } from "react";
import api from "../services/api";
import * as S from "../components/digimons/styled";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
  if (typeof(user) !== 'undefined' && user != null){
    return (
      <div className="App">
        {user.map(item => {
            return (
              <S.Wrapper key={item.name}>
                <S.WrapperImage src={item.img} alt={item.name} />
                <S.WrapperInfoUser>
                  <div>
                    <h1>{item.name}</h1>
                    <S.WrapperUserGeneric>
                      <h3>Level: {item.level}</h3>
                    </S.WrapperUserGeneric>
                  </div>
                </S.WrapperInfoUser>
              </S.Wrapper>
            )
        })}
      </div>
    );
  } else {
    return ('Loading')
  }
}