import React from "react";
import { FilterFunction } from "./Functions/FilterFunctions";
import MockUserDataArray from "../../../MockData/MockUserDataArray";
import { format, isEqual } from "date-fns";

describe("Tests to check if FilterFunction works properly", () => {
  test("Test if functions filters by UserName properly", () => {
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

    if (filteredArray.length > 0) {
      expect(
        filteredArray.every((item) => item.userName.includes(testUserNameText))
      );
    }
  });
  test("Test if functions filters by organizationName properly", () => {
    const testOrganizationNameText = "Lum";
    const filteredArray = FilterFunction(
      "",
      testOrganizationNameText,
      "",
      "",
      "",
      "",
      MockUserDataArray.splice(0, 30)
    );

    if (filteredArray.length > 0) {
      expect(
        filteredArray.every((item) =>
          item.orgName.includes(testOrganizationNameText)
        )
      );
    }
  });
  test("Test if functions filters by Email Name properly", () => {
    const testEmailNameText = "Maverick";
    const filteredArray = FilterFunction(
      "",
      "",
      testEmailNameText,
      "",
      "",
      "",
      MockUserDataArray.splice(0, 30)
    );

    if (filteredArray.length > 0) {
      expect(
        filteredArray.every((item) => item.email.includes(testEmailNameText))
      );
    }
  });
  test("Test if functions filters by createdAt (DateJoined) property properly", () => {
    const testCreatedAtText = "2089-05-21T04:15:40.501Z";
    const filteredArray = FilterFunction(
      "",
      "",
      "",
      testCreatedAtText,
      "",
      "",
      MockUserDataArray.splice(0, 30)
    );

    if (filteredArray.length > 0) {
      expect(
        filteredArray.every((item) => {
          const date = new Date(item.createdAt);
          const testCreatedAtDate = new Date(testCreatedAtText);
          return isEqual(
            new Date(date.getFullYear(), date.getMonth()),
            new Date(testCreatedAtDate.getFullYear(), date.getMonth())
          );
        })
      );
    }
  });
});
