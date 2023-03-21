import Style from "./Dashboard.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardTable() {
  const [fetchResults, setFetchResults] = useState({
    isFetching: false,
    isError: false,
    status: null,
    userDataArray: [],
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
  return <div></div>;
}
