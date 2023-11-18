import { render, screen } from "@testing-library/react";

import RobotsList from "./RobotsList";
import { robotItems } from "../../data/robot";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a RobotsList component", () => {
  describe("When it recieves a list of Robots", () => {
    test("it should show 'BytePanda", () => {
      const expectedHeadingTitle = "BytePanda";
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <RobotsList Robots={robotItems} />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const RobotHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(RobotHeadingElement).toBeInTheDocument();
    });
  });
});
