import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import mainTheme from "../../styles/mainTheme";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("It should show 'Robots App' in a heading", () => {
      const expectedHeadingText = "Robots App";

      render(
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>,
      );

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
