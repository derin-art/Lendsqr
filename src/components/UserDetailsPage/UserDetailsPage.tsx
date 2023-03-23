import { useEffect, useState } from "react";
import Style from "./UserDetail.module.scss";
import { useParams } from "react-router-dom";
import { DashboardTableItemType } from "../UsersPage/Types/DashboardTableItemType";

export default function UserDetailPage() {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState<DashboardTableItemType>();

  useEffect(() => {}, []);
  const userDetailPageInfo = [
    { name: "Personal Information", subHeaders: [[], []] },
  ];

  return <div className={Style.UserDetailsComp}>{id}</div>;
}
