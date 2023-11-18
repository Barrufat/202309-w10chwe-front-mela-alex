import styled from "styled-components";

export const RobotCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  width: 250px;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.backCard};
  box-shadow: 10px 10px 10px #0005;
  padding: 25px;
  border-radius: 15px;

  .robot {
    &-title {
      font-weight: 100;
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      color: ${({ theme }) => theme.colors.offWhite};
    }

    &__image-box {
      display: flex;
    }

    &__image {
      border-radius: 20px;
      width: 200px;
      height: 200px;
    }

    &__data {
      font-weight: 100;
      font-size: 20px;
    }
  }
`;

export default RobotCardStyled;
