import { DashboardTableItemProps } from "../../UsersPageTableItem";
import { format, isEqual } from "date-fns";
import { DashboardTableItemType } from "../../Types/DashboardTableItemType";
/*I Imported the type props from DashboardTableItem.tsx to help better with the filtering of the Array that will be passed into the function below. The objects of the array should all be based on the DashboardTableItem type imported above.  */

function FilterFunction(
  Username: string,
  Organization: string,
  Email: string,
  DateJoined: string,
  PhoneNumber: string,
  Status: string,
  Array: DashboardTableItemType[]
) {
  const filterObject = {
    userName: Username,
    orgName: Organization,
    email: Email,
    createdAt: DateJoined,
    status: Status,
    phoneNumber: PhoneNumber,
  };

  const filteredArray = Array.filter((item) => {
    for (let key in filterObject) {
      /* Using Type assertion to assert that dashboardItemKey is the type of one of the keys of the UsersPageTableItemProps/Object   */
      const dashboardItemkey = key as keyof typeof filterObject;

      /*Similarly Using Type assertion to assert that filterObjectItemKey is the type of one of the keys of the filterObject   */
      const filterObjectItemKey = key as keyof typeof filterObject;
      if (key === "createdAt") {
        const date = new Date(item[dashboardItemkey]);

        const filterDate = new Date(filterObject[filterObjectItemKey]);

        /* If the date parameter or option is not given. That is it cannot return a number from the getFullYearMethod, the loop returns true to avoid getting filtering through the date parameter and returning false for all the values */
        if (isNaN(filterDate.getFullYear())) return true;

        /* Compares the dates of the filterParameter/Object and the date of the items in the UsersPageTableItemObject */
        const twoDatesAreDateEqual = isEqual(
          new Date(date.getFullYear(), date.getMonth()),
          new Date(filterDate.getFullYear(), date.getMonth())
        );

        if (!twoDatesAreDateEqual) {
          return false;
        }
      } else {
        const includesFilterValues = item[dashboardItemkey]
          .toLowerCase()
          .includes(filterObject[filterObjectItemKey].toLowerCase());

        if (!includesFilterValues) {
          return false;
        }
      }
    }

    return true;
  });
  console.log("filtered", filteredArray);
  return filteredArray;
}

export { FilterFunction };
