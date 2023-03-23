import SwipeableViews from "react-swipeable-views";
import DashboardHeadlineItem from "./DashboardHeadlineItem";
import Style from "./UsersPage.module.scss";

export default function SwipeableDashboard() {
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
      <div>
        <SwipeableViews className={Style.SwipeableDashboardHeadline}>
          {dashboardHeadlineItemsList.map((item, index) => {
            return (
              <div key={index} className={Style.SwipeableDashboardHeadlineCont}>
                {" "}
                <DashboardHeadlineItem
                  amount={item.amount}
                  icon={item.iconPath}
                  name={item.name}
                  key={index}
                ></DashboardHeadlineItem>
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    </div>
  );
}
