import Style from "./Dashboard.module.scss";
import axios from "axios";
import DashboardTableItem from "./DashboardTableItem";
import { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent/FilterComponent";
import { DashboardTableItemType } from "./Types/DashboardTableItemType";

export default function DashboardTable() {
  type fetchResultType = {
    isFetching: boolean;
    isError: boolean;
    status: string | null;
    userDataArray: DashboardTableItemType[];
  };

  const [fetchResults, setFetchResults] = useState<fetchResultType>({
    isFetching: false,
    isError: false,
    status: null,
    userDataArray: [],
  });

  const [filters, setFilters] = useState({
    Organization: "",
    Username: "",
    Email: "",
    Date: "",
    PhoneNumber: "",
    Status: null,
  });

  useEffect(() => {
    const response = async () => {
      const res = await axios
        .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .catch((err) => {
          console.log(err);
          return err;
        });
      if (res) {
        setFetchResults((prev) => {
          return { ...prev, userDataArray: res.data, status: res.status };
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
    <div className={Style.DashboardTable}>
      <FilterComponent></FilterComponent>
      <div className={Style.DashboardTableHeader}>
        {tableHeaderHeadings.map((item, index) => {
          return (
            <p key={index}>
              <span>{item.name}</span>
              <img src={tableHeaderIcon}></img>
            </p>
          );
        })}
      </div>
      {fetchResults.userDataArray &&
        fetchResults.userDataArray.slice(0, 10).map((item, index) => {
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
    </div>
  );
}
