import { DashboardTableItemProps } from "../../DashboardTableItem";

/*I Imported the type props from DashboardTableItem.tsx to help better with the filtering of the Array that will be passed into the function below. The objects of the array should all be based on the DashboardTableItem type imported above.  */

function FilterFunction(
  Username: string,
  Organization: string,
  Email: string,
  DateJoined: string,
  PhoneNumber: string,
  Status: string,
  Array: []
) {
  const filterObject = {
    Username,
    Organization,
    Email,
    PhoneNumber,
    DateJoined,
    Status,
  };
  const filteredArray = Array.filter((item: DashboardTableItemProps) => {
    Object.entries(filterObject).forEach(([key, val]) => {
      /* Using Type assertion to assert that dashboardItemKey is the type of one of the keys of the DashboardTableItemProps/Object   */
      const dashboardItemkey = key as keyof typeof filterObject;

      /*Similarly Using Type assertion to assert that filterObjectItemKey is the type of one of the keys of the filterObject   */
      const filterObjectItemKey = key as keyof typeof filterObject;

      if (
        item[dashboardItemkey]
          .toLowerCase()
          .includes(filterObject[filterObjectItemKey].toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  });

  return filteredArray;
}

export { FilterFunction };
