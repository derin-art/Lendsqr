import Style from "./UsersPage.module.scss";

export type DashboardTableItemProps = {
  Organization: string;
  Username: string;
  Email: string;
  PhoneNumber: string;
  DateJoined: string;
  Status: string;
};

export default function DashboardTableItem(props: DashboardTableItemProps) {
  const tableHeaderIcon =
    "/Icons/Dashboard/DashboardTableItem/TableHeaderIcon.svg";
  return (
    <div className={Style.UsersPageTableItem}>
      <span className={Style.HorizontalHeader}>
        <p>
          ORGANIZATION <img src={tableHeaderIcon}></img>
        </p>
        {props.Organization}
      </span>
      <span>
        <p>USERNAME</p>
        {props.Username}
      </span>
      <span>
        <p>EMAIL</p>
        {props.Email}
      </span>
      <span>
        <p>PHONE NUMBER</p>
        {props.PhoneNumber}
      </span>
      <span>
        <p>DATE JOINED</p>
        {props.DateJoined}
      </span>
      <span>
        <p>STATUS</p>
        {props.Status}
      </span>
    </div>
  );
}
