import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import UserPageHeadlineItem from "./UserPageHeadlineItem";
import Style from "./UsersPage.module.scss";

export default function SwipeableDashboard() {
  const userPageHeadlineSvgRootLocation = "/Icons/UsersPage/UserPageHeadline/";

  const [swipeableIndex, setSwipeableIndex] = useState(0);

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
    <div className={Style.SwipeableUserPageHeadlineMainCont}>
      <div>
        <SwipeableViews
          onChangeIndex={(index) => {
            setSwipeableIndex(index);
          }}
          disabled={true}
          index={swipeableIndex}
          className={Style.SwipeableUserPageHeadline}
        >
          {dashboardHeadlineItemsList.map((item, index) => {
            return (
              <div key={index} className={Style.SwipeableUserPageHeadlineCont}>
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
      <div className={Style.UserPageHeadlineButtons}>
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
