import Style from "./UsersPage.module.scss";

type UserPageHeadlineItemProps = {
  icon: string;
  name: string;
  amount: number;
};

export default function UserPageHeadlineItem(props: UserPageHeadlineItemProps) {
  return (
    <div className={Style.UserPageHeadlineItem}>
      <img alt={props.name} src={props.icon}></img>
      <span>{props.name}</span>
      <div>{props.amount}</div>
    </div>
  );
}
