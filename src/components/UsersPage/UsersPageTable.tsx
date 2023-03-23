import Style from "./UsersPage.module.scss";
import axios from "axios";
import DashboardTableItem from "./UsersPageTableItem";
import { useEffect, useState } from "react";
import { TurnsAFlatArrayIntoNestedArrays } from "./Functions/TurnsAFlatArrayIntoNestedArrays";
import FilterComponent from "./FilterComponent/FilterComponent";
import { DashboardTableItemType } from "./Types/DashboardTableItemType";
import { DashboardTableItemProps } from "./UsersPageTableItem";
import FooterPaginationComponent from "./FooterPaginationComponent/FooterPaginationComponent";

export type fetchResultType = {
  isFetching: boolean;
  isError: boolean;
  status: string | null;
  userDataArray: DashboardTableItemType[][];
  userDataFlatArray: DashboardTableItemType[];
};

export default function DashboardTable() {
  const [fetchResults, setFetchResults] = useState<fetchResultType>({
    isFetching: false,
    isError: false,
    status: null,
    userDataArray: [],
    userDataFlatArray: [],
  });

  const [filters, setFilters] = useState<DashboardTableItemProps>({
    Organization: "",
    Username: "",
    Email: "",
    DateJoined: "",
    PhoneNumber: "",
    Status: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  console.log(filters, "sfd");

  useEffect(() => {
    const response = async () => {
      const res = await axios
        .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .catch((err) => {
          console.log(err);
          return err;
        });

      if (res) {
        const modefiedResDatatoAddStatus = res.data.map(
          (item: DashboardTableItemType) => {
            const possibleStatuses = [
              "Active",
              "Inactive",
              "Pending",
              "Blacklisted",
            ];
            const randomIndex = Math.floor(Math.random() * 4);
            return {
              ...item,
              status: possibleStatuses[randomIndex],
            };
          }
        );
        setFetchResults((prev) => {
          const nestedUserDataArray = TurnsAFlatArrayIntoNestedArrays(
            10,
            modefiedResDatatoAddStatus
          );
          console.log("sdsd", nestedUserDataArray);
          return {
            ...prev,
            userDataArray: nestedUserDataArray,
            userDataFlatArray: modefiedResDatatoAddStatus,
            status: res.status,
          };
        });
        return res;
      }
    };
    response();
  }, []);

  console.log("res", fetchResults);

  const tableHeaderHeadings = [
    { name: "ORGANIZATION" },
    { name: "USERNAME" },
    { name: "EMAIL" },
    { name: "PHONE NUMBER" },
    { name: "DATE JOINED" },
    { name: "STATUS" },
  ];

  const tableHeaderIcon =
    "/Icons/Dashboard/DashboardTableItem/TableHeaderIcon.svg";

  return (
    <div className={Style.UsersPageTable}>
      <FilterComponent
        setFetchResults={setFetchResults}
        userDataFlatArray={fetchResults.userDataFlatArray}
        filters={filters}
        setFilter={setFilters}
      ></FilterComponent>
      <div className={Style.UsersPageTableHeader}>
        {tableHeaderHeadings.map((item, index) => {
          return (
            <p key={index}>
              <span>{item.name}</span>
              <img src={tableHeaderIcon}></img>
            </p>
          );
        })}
      </div>
      {fetchResults.userDataArray[0] &&
        fetchResults.userDataArray[currentPage].map((item, index) => {
          return (
            <DashboardTableItem
              DateJoined={item.createdAt}
              Email={item.email}
              Organization={item.orgName}
              PhoneNumber={item.phoneNumber}
              Status={"active"}
              Username={item.userName}
              key={index}
            ></DashboardTableItem>
          );
        })}
      <FooterPaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userDataArray={fetchResults.userDataArray}
      ></FooterPaginationComponent>
    </div>
  );
}
