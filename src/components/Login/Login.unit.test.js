import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnterLoginDetailsComponent from "./EnterLoginDetailsComponent";

describe("Testing for Both Input Elements in the EnterLoginDetailsComponent", () => {
  test("Check if both inputs elements, for Email and password rendered", () => {
    render(<EnterLoginDetailsComponent></EnterLoginDetailsComponent>);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toBeInTheDocument();
  });
  test("Check if both input elements can be typed into by the User", () => {
    render(<EnterLoginDetailsComponent></EnterLoginDetailsComponent>);
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    userEvent.clear(emailInput);
    userEvent.click(emailInput);
    userEvent.type(emailInput, "derin@gmail.com");
    expect(emailInput.innerText === "derin@gmail.com");
    userEvent.clear(passwordInput);
    userEvent.click(passwordInput);
    userEvent.type(passwordInput, "password1");
    expect(passwordInput.innerText === "password1");
  });
});
