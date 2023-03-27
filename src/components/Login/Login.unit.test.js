import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnterLoginDetailsComponent from "./EnterLoginDetailsComponent";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("Testing for Elements in the EnterLoginDetailsComponent", () => {
  test("Check if both inputs elements, for Email and password rendered", () => {
    render(
      <BrowserRouter>
        <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toBeInTheDocument();
  });
  test("Check if both input elements can be typed into by the User", async () => {
    render(
      <BrowserRouter>
        <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    act(() => {
      userEvent.clear(emailInput);
    });
    userEvent.click(emailInput);
    act(() => {
      userEvent.type(emailInput, "derin@gmail.com");
    });
    expect(emailInput.innerText === "derin@gmail.com");
    act(() => {
      userEvent.clear(passwordInput);
    });
    userEvent.click(passwordInput);
    act(() => {
      userEvent.type(passwordInput, "password1");
    });
    expect(passwordInput.innerText === "password1");
  });

  test("Check if forgot password and log in buttons rendered", async () => {
    render(
      <BrowserRouter>
        <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
      </BrowserRouter>
    );
    const forgotPasswordButton = screen.getByText(/FORGOT PASSWORD?/i);
    const logInButton = screen.getByText(/LOG IN?/i);

    expect(forgotPasswordButton).toBeInTheDocument();

    expect(logInButton).toBeInTheDocument();
  });

  test("Check if toast renders the right Error alert response, given no Email is enterned", async () => {
    render(
      <BrowserRouter>
        <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
      </BrowserRouter>
    );
    const logInButton = screen.getByText(/LOG IN?/i);
    userEvent.click(logInButton);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const emailErrorMessage = await screen.findByRole("alert");

    expect(emailErrorMessage).toBeInTheDocument();
  });
  test("Check if toast renders the right Error alert response, given Email is enterned but no Password is given", async () => {
    render(
      <BrowserRouter>
        <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
      </BrowserRouter>
    );
    const logInButton = screen.getByText(/LOG IN?/i);

    const emailInput = screen.getByPlaceholderText("Email");
    act(() => {
      userEvent.clear(emailInput);
    });
    userEvent.click(emailInput);
    act(() => {
      userEvent.type(emailInput, "derin@gmail.com");
    });
    userEvent.click(logInButton);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const passwordErrorMessage = await screen.findByRole("alert");

    expect(passwordErrorMessage).toBeInTheDocument();
  });
});
