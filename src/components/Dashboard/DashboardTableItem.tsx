type DashboardTableItemProps = {
  Organization: string;
  Username: string;
  Email: string;
  PhoneNumber: string;
  DateJoined: string;
  Status: string;
};

export default function DashboardTableItem(props: DashboardTableItemProps) {
  return (
    <div>
      <span>{props.Organization}</span>
      <span>{props.Username}</span>
      <span>{props.Email}</span>
      <span>{props.PhoneNumber}</span>
      <span>{props.DateJoined}</span>
      <span>{props.Status}</span>
    </div>
  );
}
