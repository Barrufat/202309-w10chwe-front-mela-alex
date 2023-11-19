import { render, screen } from "@testing-library/react";
import RobotsForm from "./RobotsForm";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a RobotsForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it's rendered' ", () => {
    test("It should show 'Create new Robot' in a heading", async () => {
      const expectedButtonText = "Create a new Robot";

      render(<RobotsForm submitAction={actionOnClick} />);

      const formButtonElement = screen.getByRole("heading", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });
  });
});
