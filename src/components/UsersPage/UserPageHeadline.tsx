import Style from "./UsersPage.module.scss";
import DashboardHeadlineItem from "./DashboardHeadlineItem";
import SwipeableDashboard from "./SwipeableDashboard";

export default function DashboardHeadline() {
  const dashBoardHeadlineSvgRootLocation =
    "/Icons/Dashboard/DashboardHeadline/";

  const dashboardHeadlineItemsList = [
    {
      iconPath: `${dashBoardHeadlineSvgRootLocation}/ActiveUsers.svg`,
      name: "Active Users",
      amount: 2453,
    },
    {
      iconPath: `${dashBoardHeadlineSvgRootLocation}/Users.svg`,
      name: "Users",
      amount: 2453,
    },
    {
      iconPath: `${dashBoardHeadlineSvgRootLocation}/UsersWithLoans.svg`,
      name: "Users With Loans",
      amount: 12453,
    },
    {
      iconPath: `${dashBoardHeadlineSvgRootLocation}/UsersWithSavings.svg`,
      name: "Users With Savings",
      amount: 102453,
    },
  ];

  return (
    <div>
      <div className={Style.UserPageHeadline}>
        {dashboardHeadlineItemsList.map((item, index) => {
          return (
            <DashboardHeadlineItem
              amount={item.amount}
              icon={item.iconPath}
              name={item.name}
              key={index}
            ></DashboardHeadlineItem>
          );
        })}
      </div>
      <SwipeableDashboard></SwipeableDashboard>
    </div>
  );
}
