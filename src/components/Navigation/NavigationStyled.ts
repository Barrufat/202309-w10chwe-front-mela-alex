import styled from "styled-components";

const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.secondaryBack};
  color: ${({ theme }) => theme.colors.offWhite};

  .active {
    color: ${({ theme }) => theme.colors.mainText};
  }

  .navigation {
    &__title-box {
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    &__main-logo {
    }

    &__box {
      padding: 20px;
      width: 100%;
      z-index: 3;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default NavigationStyled;
