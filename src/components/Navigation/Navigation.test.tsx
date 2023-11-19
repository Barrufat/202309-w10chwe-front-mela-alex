import { render, screen } from "@testing-library/react";

import RobotsPage from "../../pages/RobotsPage/RobotsPage";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a RobotsPage", () => {
  describe("When recieves a list of Robots", () => {
    test("It should show 'BytePanda' in a heading", () => {
      const expectedHeadingText = "BytePanda";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <RobotsPage />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
