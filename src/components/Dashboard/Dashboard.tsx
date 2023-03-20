import SideBar from "./SideBar";
import Header from "./Header";
import Style from "./Dashboard.module.scss";
import Login from "../Login/Login";
import { useState } from "react";
import DashboardHeadline from "./DashboardHeadline";

export default function Dashboard() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const sideBarHandler = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  return (
    <div className={`${Style.DashboardCont}`}>
      <Header sideBarHandler={sideBarHandler}></Header>

      <div className={`${Style.MainCont}`}>
        <SideBar isSideBarOpen={isSideBarOpen}></SideBar>

        <div className={`${Style.CompCont} c`}>
          <div className={`${Style.ChildCont}`}>
            <DashboardHeadline></DashboardHeadline>
            <div className={Style.Test}>
              <span>h</span>
              <span>hcccc</span>
              <span>hcccsa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
