import { render, screen } from "@testing-library/react";
import RobotsForm from "./RobotsForm";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a RobotsForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it's rendered' ", () => {
    test("It should show 'Create new Robot' in a heading", async () => {
      const expectedButtonText = "Create a new Robot";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <RobotsForm submitAction={actionOnClick} />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const formButtonElement = screen.getByRole("heading", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });
  });
});
