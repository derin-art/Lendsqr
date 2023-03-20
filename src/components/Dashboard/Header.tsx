import Style from "./Dashboard.module.scss";

export default function Header() {
  const bellIconLocation = "/Icons/Dashboard/Header/Bell.svg";
  const logoIconLocation = "/Icons/Logo.svg";
  const profilePicLocation = "/Images/Dashboard/Header/ProfilePic.png";
  return (
    <div>
      <div className={`${Style.Header}`}>
        <img className={`${Style.Logo}`} src={logoIconLocation}></img>
        <div className={Style.InfoHeader}>
          <span className={Style.MenuHamburger}>Menu</span>{" "}
          <span className={Style.ProfilePicCont}>
            {" "}
            <span>Docs</span>
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
            <span>Docs</span>
            <img className={Style.BellIcon} src={bellIconLocation}></img>
            <img src={profilePicLocation} className={Style.ProfilePic}></img>
            <span>Adedeji</span>
          </span>
        </div>
      </div>
    </div>
  );
}
