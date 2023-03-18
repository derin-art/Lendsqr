import SideBar from "./SideBar";
import Header from "./Header";
import Style from "./Dashboard.module.scss";
import Login from "../Login/Login";

export default function Dashboard() {
  return (
    <div className={`${Style.DashboardCont}`}>
      <Header></Header>

      <div className={`${Style.H}`}>
        <SideBar></SideBar>
        <div className={`${Style.K} c`}>
          <div className={`${Style.T}`}></div>
        </div>
      </div>
    </div>
  );
}
