import { useState } from "react";
import Style from "./Dashboard.module.scss";

type HeaderProps = {
  sideBarHandler: () => void;
};

export default function Header(props: HeaderProps) {
  const bellIconLocation = "/Icons/Dashboard/Header/Bell.svg";
  const logoIconLocation = "/Icons/Logo.svg";
  const profilePicLocation = "/Images/Dashboard/Header/ProfilePic.png";

  return (
    <div>
      <div className={`${Style.Header}`}>
        <img className={`${Style.Logo}`} src={logoIconLocation}></img>
        <div className={Style.InfoHeader}>
          <span
            className={Style.MenuHamburger}
            onClick={() => {
              props.sideBarHandler();
            }}
          >
            Menu
          </span>{" "}
          <span className={Style.ProfilePicCont}>
            {" "}
            <span className={Style.Docs}>Docs</span>
            <img className={Style.BellIcon} src={bellIconLocation}></img>
            <img src={profilePicLocation} className={Style.ProfilePic}></img>
            <span>Adedeji</span>
          </span>
        </div>

        <input className=""></input>
      </div>
      <div className={`${Style.HeaderTab}`}>
        <img className={`${Style.Logo}`} src={logoIconLocation}></img>

        <input className=""></input>
        <div className={Style.InfoHeader}>
          <span className={Style.ProfilePicCont}>
            {" "}
            <span className={Style.Docs}>Docs</span>
            <img className={Style.BellIcon} src={bellIconLocation}></img>
            <img src={profilePicLocation} className={Style.ProfilePic}></img>
            <span>Adedeji</span>
          </span>
        </div>
      </div>
    </div>
  );
}
