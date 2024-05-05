import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("It should render Hello with the name when name is provided.", () => {
    render(<Greet name="shinnthant" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/shinnthant/i);
  });

  it("It should render login button  when name is not provided.", () => {
    render(<Greet name="" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
