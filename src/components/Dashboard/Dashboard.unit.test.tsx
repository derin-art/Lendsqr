import React from "react";
import { render, screen } from "@testing-library/react";
import { TurnsAFlatArrayIntoNestedArrays } from "./Functions/TurnsAFlatArrayIntoNestedArrays";

describe("Test for functions in Dashboard/Function Folder", () => {
  test("Check if TurnsAFlatArrayIntoNestedArrays works and returns a Nested Array", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const nestedArray = TurnsAFlatArrayIntoNestedArrays(2, testArray);

    expect(nestedArray.length === 5);
  });
});
