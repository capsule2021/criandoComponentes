import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	width: 250px;
	border-radius: 25px;
	justify-content: center;
	align-items: center;
	align-content: center;
  padding: 2em;
  margin-bottom: 1em;
  margin: 1em;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;


  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
