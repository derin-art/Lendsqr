import Style from "./UsersPage.module.scss";
import PopUpMenu from "./PopUpMenu/PopUpMenu";
import React from "react";

export type DashboardTableItemProps = {
  Organization: string;
  Username: string;
  Email: string;
  PhoneNumber: string;
  DateJoined: string;
  Status: string;
  setIndexOfPopUpMenuOpen: React.Dispatch<React.SetStateAction<string>>;
  indexOfPopUpMenuOpen: string;
  id: string;
};

export default function UserPageTableItem(props: DashboardTableItemProps) {
  const userPageTableItemIconsRootLocation =
    "/Icons/UsersPage/UserPageTableItem";
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

  const handlePopUpButtonClick = () => {
    props.setIndexOfPopUpMenuOpen(props.id);
  };

  return (
    <div>
      <div className={Style.UsersPageTableItem}>
        <span className={Style.HorizontalHeader}>
          <p>
            ORGANIZATION{" "}
            <img
              alt="Header Icon"
              src={`${userPageTableItemIconsRootLocation}/TableHeaderIcon.svg`}
            ></img>
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
        <button
          onClick={() => {
            handlePopUpButtonClick();
          }}
          className={Style.PopUpButton}
        >
          <img
            alt="PopUp Menu Button"
            className={Style.PopUpButtonIcon}
            src={`${userPageTableItemIconsRootLocation}/PopUpMenuIcon.svg`}
          ></img>
        </button>
      </div>
      {props.indexOfPopUpMenuOpen === props.id && (
        <PopUpMenu
          id={props.id}
          setIndexOfPopUpMenuOpen={props.setIndexOfPopUpMenuOpen}
        ></PopUpMenu>
      )}
    </div>
  );
}
