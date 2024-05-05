import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("User List", () => {
  it("it should render no users when users is emplty.", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("it should render user list when users is not empty.", () => {
    const users: User[] = [
      {
        id: 1,
        name: "shinn thant",
        isAdmin: true,
      },
      {
        id: 2,
        name: "kaung khant",
        isAdmin: false,
      },
      {
        id: 3,
        name: "kyaw thant",
        isAdmin: false,
      },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
