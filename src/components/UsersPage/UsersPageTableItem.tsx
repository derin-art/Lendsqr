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
  let statusClassName;
  if (props.Status === "Active") {
    statusClassName = Style.Active;
  } else if (props.Status === "Inactive") {
    statusClassName = Style.Inactive;
  } else if (props.Status === "Pending") {
    statusClassName = Style.Pending;
  } else {
    statusClassName = Style.Blacklisted;
  }
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
        <div className={statusClassName}> {props.Status}</div>
      </span>
    </div>
  );
}
