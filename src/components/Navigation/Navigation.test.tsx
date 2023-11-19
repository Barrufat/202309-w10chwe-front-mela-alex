import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When rendered", () => {
    test("It should show 'Add New' inside a Link", () => {
      const expectedLinkText = "Add New";
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const linkElement = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(linkElement).toBeInTheDocument();
    });
  });
});
