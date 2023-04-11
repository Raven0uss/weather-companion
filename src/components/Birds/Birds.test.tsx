import { render } from "@testing-library/react";
import Birds from "./";

describe("Birds", () => {
  test("renders the component without crashing", () => {
    const { getByTestId } = render(<Birds />);
    expect(getByTestId("birds")).toBeInTheDocument();
  });

  test("renders four birds", () => {
    const { getAllByTestId } = render(<Birds />);
    expect(getAllByTestId(/^bird-\d$/)).toHaveLength(4);
  });
});
