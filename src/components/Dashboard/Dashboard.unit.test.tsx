import React from "react";
import { render, screen } from "@testing-library/react";
import MockUserDataArray from "../../MockData/MockUserDataArray";
import { TurnsAFlatArrayIntoNestedArrays } from "./Functions/TurnsAFlatArrayIntoNestedArrays";
import { DashboardTableItemType } from "../Dashboard/Types/DashboardTableItemType";

describe("Test for functions in Dashboard/Function Folder", () => {
  test("Check if TurnsAFlatArrayIntoNestedArrays works and returns a Nested Array", () => {
    const testArray = [...MockUserDataArray.splice(0, 10)];
    const nestedArray = TurnsAFlatArrayIntoNestedArrays(
      2,
      MockUserDataArray.splice(0, 10)
    );

    expect(nestedArray.length === 5);
  });
});
