import { render, screen } from "@testing-library/react";

import UserAccount from "../../src/components/UserAccount";

describe("User Account", () => {
  it("It should render username.", () => {
    const user = {
      id: 1,
      name: "shinn thant",
      isAdmin: true,
    };

    render(<UserAccount user={user} />);
    const username = screen.getByText(user.name);
    expect(username).toBeInTheDocument();
  });

  it("It should render edit button when user is a admin.", () => {
    const user = {
      id: 1,
      name: "shinn thant",
      isAdmin: true,
    };
    {
      render(<UserAccount user={user} />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(/edit/i);
    }
  });

  it("It should not render edit button when user is not a admin.", () => {
    const user = {
      id: 1,
      name: "shinn thant",
      isAdmin: false,
    };
    {
      render(<UserAccount user={user} />);

      const button = screen.queryByRole("button");

      expect(button).not.toBeInTheDocument();
    }
  });
});
