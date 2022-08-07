import React from "react";
import useDigimons from "../../providers/digimon-provider-nocallback";
import * as S from "./styled";

const Profile = () => {
  const DigimonsState = useDigimons();
  return (DigimonsState);
};

export default Profile;
