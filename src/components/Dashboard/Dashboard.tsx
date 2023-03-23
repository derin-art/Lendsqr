import SideBar from "./SideBar";
import Header from "./Header";
import Style from "./Dashboard.module.scss";
import Login from "../Login/Login";
import { useState } from "react";

type DashboardProps = {
  children: any;
};

export default function Dashboard(props: DashboardProps) {
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
          <div className={`${Style.ChildCont}`}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
