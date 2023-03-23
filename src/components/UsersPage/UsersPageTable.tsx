import Style from "./UsersPage.module.scss";
import axios from "axios";
import DashboardTableItem from "./UsersPageTableItem";
import { useEffect, useState } from "react";
import { TurnsAFlatArrayIntoNestedArrays } from "./Functions/TurnsAFlatArrayIntoNestedArrays";
import FilterComponent from "./FilterComponent/FilterComponent";
import { DashboardTableItemType } from "./Types/DashboardTableItemType";
import { DashboardTableItemProps } from "./UsersPageTableItem";
import FooterPaginationComponent from "./FooterPaginationComponent/FooterPaginationComponent";
import { GridLoader } from "react-spinners";

export type fetchResultType = {
  isFetching: boolean;
  isError: boolean;
  status: string | null;
  userDataArray: DashboardTableItemType[][];
  userDataFlatArray: DashboardTableItemType[];
};

export default function DashboardTable() {
  const [fetchResults, setFetchResults] = useState<fetchResultType>({
    isFetching: true,
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

  console.log("SDSDSDSD", process.env.REACT_APP_LENDSQR_USERS);

  useEffect(() => {
    const response = async () => {
      setFetchResults((prev) => {
        return { ...prev, isFetching: true, isError: false };
      });
      const res = await axios
        .get(`${process.env.REACT_APP_LENDSQR_USERS}`)
        .catch((err) => {
          console.log(err);
          setFetchResults((prev) => {
            return { ...prev, isFetching: false, isError: true, status: "500" };
          });
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
            isError: false,
            isFetching: false,
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

  const isErrorState = fetchResults.isError && !fetchResults.isFetching;

  const isLoadingState = fetchResults.isFetching;

  const isgoodResponseState = !fetchResults.isError && !fetchResults.isFetching;

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
      {isgoodResponseState &&
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
      {isLoadingState && <GridLoader></GridLoader>}
      {isErrorState && <p>An Error has Ocurred</p>}
      <FooterPaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userDataArray={fetchResults.userDataArray}
      ></FooterPaginationComponent>
    </div>
  );
}
