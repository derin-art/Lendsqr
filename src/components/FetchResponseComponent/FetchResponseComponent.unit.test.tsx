import React from "react";
import FetchResponseComponent from "./FetchResponseComponent";
import { render, screen } from "@testing-library/react";

describe("Tests for the FetchResponseComponent", () => {
  const goodResponse = <div placeholder="goodResponse"></div>;

  test("Test to check if the FetchResponseComponent Renders the right response given a isGoodResponseState prop is true", () => {
    render(
      <FetchResponseComponent
        goodResponse={goodResponse}
        isErrorState={false}
        isGoodResponseState={true}
        isLoadingState={false}
        key={"1"}
      ></FetchResponseComponent>
    );

    console.log(screen.debug());
    const goodResponseElement = screen.getByPlaceholderText("goodResponse");
    expect(goodResponseElement).toBeInTheDocument();
  });
  test("Test to check if the FetchResponseComponent Renders the right response given a isLoadingState prop is true", () => {
    render(
      <FetchResponseComponent
        goodResponse={goodResponse}
        isErrorState={false}
        isGoodResponseState={false}
        isLoadingState={true}
        key={"1"}
      ></FetchResponseComponent>
    );

    const loadingSpinner = screen.getByPlaceholderText("loadingElement");
    expect(loadingSpinner).toBeInTheDocument();
  });
  test("Test to check if the FetchResponseComponent Renders the right response given a isErrorState prop is true", () => {
    render(
      <FetchResponseComponent
        goodResponse={goodResponse}
        isErrorState={true}
        isGoodResponseState={false}
        isLoadingState={false}
        key={"1"}
      ></FetchResponseComponent>
    );

    const errorResponse = screen.getByPlaceholderText("errorResponse");
    expect(errorResponse).toBeInTheDocument();
  });
});
