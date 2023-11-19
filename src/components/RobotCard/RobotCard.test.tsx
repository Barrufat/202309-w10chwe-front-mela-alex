import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import RobotCard from "./RobotCard";
import mainTheme from "../../styles/mainTheme";
import { robotItem } from "../../data/robot";

describe("Given a RobotCard", () => {
  describe("When it recieves RoboBunny", () => {
    test("It should show 'RoboBunny' in a heading", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <RobotCard Robot={robotItem} />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const normieHeadingElement = screen.getByRole("heading", {
        name: robotItem.name,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
