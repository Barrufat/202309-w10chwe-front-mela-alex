import styled from "styled-components";

const RobotsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  color: white;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.backCard};
  box-shadow: 10px 10px 10px #0005;
  padding: 25px;
  border-radius: 15px;
  margin-top: 20px;

  .form {
    &__label {
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    }

    &__description {
      height: 250px;
      padding: 15px;
      border: none;
      border-radius: 5px;
    }
  }
`;
export default RobotsFormStyled;
