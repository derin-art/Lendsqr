import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import UserPageHeadlineItem from "./UserPageHeadlineItem";
import Style from "./UsersPage.module.scss";

export default function SwipeableDashboard() {
  const dashBoardHeadlineSvgRootLocation =
    "/Icons/Dashboard/DashboardHeadline/";

  const [swipeableIndex, setSwipeableIndex] = useState(0);

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
    <div className={Style.SwipeableDashboardHeadlineMainCont}>
      <div>
        <SwipeableViews
          onChangeIndex={(index) => {
            setSwipeableIndex(index);
          }}
          enableMouseEvents
          index={swipeableIndex}
          className={Style.SwipeableDashboardHeadline}
        >
          {dashboardHeadlineItemsList.map((item, index) => {
            return (
              <div key={index} className={Style.SwipeableDashboardHeadlineCont}>
                {" "}
                <UserPageHeadlineItem
                  amount={item.amount}
                  icon={item.iconPath}
                  name={item.name}
                  key={index}
                ></UserPageHeadlineItem>
              </div>
            );
          })}
        </SwipeableViews>
      </div>
      <div className={Style.DashboardHeadlineButtons}>
        {dashboardHeadlineItemsList.map((item, index) => {
          return (
            <button
              onClick={() => {
                setSwipeableIndex(index);
              }}
              className={`${swipeableIndex === index && Style.IsInView} `}
              key={index}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
