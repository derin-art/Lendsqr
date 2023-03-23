import DashboardHeadline from "./UserPageHeadline";
import DashboardTable from "./UsersPageTable";
import Style from "./UsersPage.module.scss";

export default function Users() {
  return (
    <div className={Style.UsersPage}>
      <DashboardHeadline></DashboardHeadline>
      <DashboardTable></DashboardTable>
    </div>
  );
}
