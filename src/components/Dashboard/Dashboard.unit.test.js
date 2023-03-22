import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DashboardTableItem from "./DashboardTableItem";

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

describe("Tests for DashboardTableItem", () => {
  test("Check if the DashboardTableItem component renders correctly", () => {
    render(
      <div>
        {MockData.map((item, index) => {
          return (
            <DashboardTableItem
              DateJoined={item.DateJoined}
              Email={item.Email}
              Organization={item.Organization}
              PhoneNumber={item.PhoneNumber}
              Status={item.Status}
              Username={item.UserName}
              key={index}
            ></DashboardTableItem>
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
