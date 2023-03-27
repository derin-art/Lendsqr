import UserPageHeadline from "./UserPageHeadline";
import UsersPageTable from "./UsersPageTable";
import Style from "./UsersPage.module.scss";

export default function Users() {
  return (
    <div className={Style.UsersPage}>
      <UserPageHeadline></UserPageHeadline>
      <UsersPageTable></UsersPageTable>
    </div>
  );
}
