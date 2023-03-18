import { render, screen } from "@testing-library/react";
import EnterLoginDetailsComponent from "./EnterLoginDetailsComponent";

describe("Testing for Both Input Elements in the EnterLoginDetailsComponent", () => {
  test("Check if both inputs elements, for Email and password rendered", () => {
    render(<EnterLoginDetailsComponent></EnterLoginDetailsComponent>);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toBeInTheDocument();
  });
});
