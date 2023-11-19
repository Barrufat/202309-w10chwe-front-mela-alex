import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  flex-shrink: 0;
  background: none;
  cursor: pointer;
  margin-top: 10px;
  font-size: large;
  background-color: ${({ theme }) => theme.colors.mainText};
  color: ${({ theme }) => theme.colors.offWhite};
`;

export default ButtonStyled;
