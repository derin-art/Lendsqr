import React from "react";
import { FilterFunction } from "./Functions/FilterFunctions";
import MockUserDataArray from "../../../MockData/MockUserDataArray";

describe("Tests to check if FilterFunction works properly", () => {
  test("", () => {
    const testUserNameText = "Haylee19";
    const filteredArray = FilterFunction(
      testUserNameText,
      "",
      "",
      "",
      "",
      "",
      MockUserDataArray.splice(0, 30)
    );
    console.log(filteredArray);
    if (filteredArray.length > 0) {
      expect(
        filteredArray.every((item) => item.userName.includes(testUserNameText))
      );
    }
  });
});
