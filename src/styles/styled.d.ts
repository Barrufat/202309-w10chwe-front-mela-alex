import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      back: string;
      secondaryBack: string;
      mainText: string;
      backCard: string;
      secondaryText: string;
      offWhite: string;
      black: string;
    };
    typography: {
      mainFontFamily: string;
      regularFontFamily: string;
      mainSize: string;
      titleSize: string;
      secondaryTitleSize: string;
      regularSize: string;
    };
  }
}
