import SideBar from "./SideBar";
import Header from "./Header";
import Style from "./Dashboard.module.scss";
import Login from "../Login/Login";

export default function Dashboard() {
  return (
    <div className={`${Style.DashboardCont}`}>
      <Header></Header>

      <div className={`${Style.MainCont}`}>
        <SideBar></SideBar>
        <div className={`${Style.CompCont} c`}>
          <div className={`${Style.Comp}`}>dd</div>
        </div>
      </div>
    </div>
  );
}
