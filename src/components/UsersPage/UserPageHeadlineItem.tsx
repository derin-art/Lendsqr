import Style from "./UsersPage.module.scss";

type DashboardHeadlineItemProps = {
  icon: string;
  name: string;
  amount: number;
};

export default function UserPageHeadlineItem(
  props: DashboardHeadlineItemProps
) {
  return (
    <div className={Style.DashboardHeadlineItem}>
      <img src={props.icon}></img>
      <span>{props.name}</span>
      <div>{props.amount}</div>
    </div>
  );
}
