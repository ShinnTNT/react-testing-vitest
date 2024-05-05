import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";

import userEvent from "@testing-library/user-event";

describe("Teams And Conditions", () => {
  it("It should render correct text and initial state.", () => {
    render(<TermsAndConditions />);

    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
  });

  it("It should enable button when user checked.", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });
});
