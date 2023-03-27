import Style from "./UsersPage.module.scss";
import UserPageHeadlineItem from "./UserPageHeadlineItem";
import SwipeableDashboard from "./SwipeableDashboard";

export default function UserPageHeadline() {
  const userPageHeadlineSvgRootLocation = "/Icons/UsersPage/UserPageHeadline/";

  const dashboardHeadlineItemsList = [
    {
      iconPath: `${userPageHeadlineSvgRootLocation}/ActiveUsers.svg`,
      name: "Active Users",
      amount: 2453,
    },
    {
      iconPath: `${userPageHeadlineSvgRootLocation}/Users.svg`,
      name: "Users",
      amount: 2453,
    },
    {
      iconPath: `${userPageHeadlineSvgRootLocation}/UsersWithLoans.svg`,
      name: "Users With Loans",
      amount: 12453,
    },
    {
      iconPath: `${userPageHeadlineSvgRootLocation}/UsersWithSavings.svg`,
      name: "Users With Savings",
      amount: 102453,
    },
  ];

  return (
    <div>
      <div className={Style.UserPageHeadline}>
        {dashboardHeadlineItemsList.map((item, index) => {
          return (
            <UserPageHeadlineItem
              amount={item.amount}
              icon={item.iconPath}
              name={item.name}
              key={index}
            ></UserPageHeadlineItem>
          );
        })}
      </div>
      <SwipeableDashboard></SwipeableDashboard>
    </div>
  );
}
