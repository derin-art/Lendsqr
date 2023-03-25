import { useState } from "react";
import Style from "./Dashboard.module.scss";
import SideBarOptionsItem from "./SideBarOptionsItem";

type SideBarProps = {
  /* Boolean that controls if the sidebar is open or closed */
  isSideBarOpen: boolean;
};

export default function SideBar(props: SideBarProps) {
  const [selectedSideBarItem, setSelecetdSideBarItem] = useState("Users");
  /* For easier importing of SideBar svg assets */

  const sideBarSvgRootLocation = "/Icons/Dashboard/SideBar/";

  const customersMenuSection = [
    { iconPath: `${sideBarSvgRootLocation}/Users.svg`, name: "Users" },
    {
      iconPath: `${sideBarSvgRootLocation}/Guarantors.svg`,
      name: "Guarantors",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Loans.svg`,
      name: "Loans",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/DecisionModel.svg`,
      name: "Decision Models",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Savings.svg`,
      name: "Savings",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/LoanRequest.svg`,
      name: "Loan Requests",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/WhiteList.svg`,
      name: "WhiteList",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Karma.svg`,
      name: "Karma",
    },
  ];

  const businessMenuSection = [
    {
      iconPath: `${sideBarSvgRootLocation}/Organization.svg`,
      name: "Organization",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/LoanProducts.svg`,
      name: "Loan Products",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/SavingsProducts.svg`,
      name: "Savings Products",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/FeesAndCharges.svg`,
      name: "Fees and Charges",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Transactions.svg`,
      name: "Transactions",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Services.svg`,
      name: "Services",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/ServiceAccount.svg`,
      name: "Service Account",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Settlement.svg`,
      name: "Settlements",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/Reports.svg`,
      name: "Reports",
    },
  ];

  const settingsMenuSection = [
    {
      iconPath: `${sideBarSvgRootLocation}/Preferences.svg`,
      name: "Preferences",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/FeesAndPricing.svg`,
      name: "Fees and Pricing",
    },
    {
      iconPath: `${sideBarSvgRootLocation}/AuditLogs.svg`,
      name: "Audit Logs",
    },
  ];

  return (
    <div
      className={`${Style.SideBar} ${
        props.isSideBarOpen ? Style.Opened : Style.Closed
      } `}
    >
      <div className={` ${Style.SwitchOrg} `}>
        <img src={`${sideBarSvgRootLocation}/SwitchOrg.svg`}></img>
        <span>Switch Organization</span>
      </div>
      <div className={Style.Dashboard}>
        <img src={`${sideBarSvgRootLocation}/Dashboard.svg`}></img>
        <span>Dashboard</span>
      </div>
      <div className={`${Style.MenuCont}`}>
        <span>CUSTOMERS</span>
        {customersMenuSection.map((item, index) => {
          return (
            <SideBarOptionsItem
              icon={item.iconPath}
              name={item.name}
              key={index}
              setSelectedSideBarItem={setSelecetdSideBarItem}
              selectedsideBarItem={selectedSideBarItem}
            ></SideBarOptionsItem>
          );
        })}
      </div>
      <div className={`${Style.MenuCont}`}>
        <span>BUSINESSES</span>
        {businessMenuSection.map((item, index) => {
          return (
            <SideBarOptionsItem
              icon={item.iconPath}
              name={item.name}
              key={index}
              setSelectedSideBarItem={setSelecetdSideBarItem}
              selectedsideBarItem={selectedSideBarItem}
            ></SideBarOptionsItem>
          );
        })}
      </div>
      <div className={`${Style.MenuCont}`}>
        <span>SETTINGS</span>
        {settingsMenuSection.map((item, index) => {
          return (
            <SideBarOptionsItem
              icon={item.iconPath}
              name={item.name}
              setSelectedSideBarItem={setSelecetdSideBarItem}
              selectedsideBarItem={selectedSideBarItem}
              key={index}
            ></SideBarOptionsItem>
          );
        })}
      </div>
    </div>
  );
}
