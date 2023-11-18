import { render, screen } from "@testing-library/react";
import RobotsPage from "../../pages/robotsPage/robotsPage";

describe("Given a RobotsPage", () => {
  describe("When recieves a list of Robots", () => {
    test("It should show 'Robots Page' in a heading", () => {
      const expectedHeadingText = "Robots Page";

      render(<RobotsPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
