import ReactDOM from "react-dom";
import App from "./pages/App";
import GlobalStyled from "./styles/global.styled";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");

    const input = (
      <>
        <GlobalStyled />
        <App />
      </>
    );
    ReactDOM.render(input, div);
    document.getElementById = jest
      .fn()
      .mockImplementation((id: string) => (id === "root" ? div : null));
    expect(ReactDOM.render).toHaveBeenCalledWith(input, div);
  });
});
