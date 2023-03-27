import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserPageTableItem from "./UsersPageTableItem";

const MockData = [
  {
    DateJoined: "12/12/22",
    Email: "owoade@gmail.com",
    Organization: "unicef",
    PhoneNumber: "0812727272",
    Status: "active",
    UserName: "Derin",
  },
];

describe("Tests for UserPageTableItem", () => {
  test("Check if the UserPageTableItem component renders correctly", () => {
    render(
      <div>
        {MockData.map((item, index) => {
          return (
            <UserPageTableItem
              DateJoined={item.DateJoined}
              Email={item.Email}
              Organization={item.Organization}
              PhoneNumber={item.PhoneNumber}
              Status={item.Status}
              Username={item.UserName}
              key={index}
            ></UserPageTableItem>
          );
        })}
      </div>
    );

    Object.entries(MockData[0]).forEach((item) => {
      const DashboardTableItemElement = screen.getByText(item[1]);
      expect(DashboardTableItemElement).toBeInTheDocument();
    });
  });
});
