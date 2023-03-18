import Style from "./Dashboard.module.scss";

export default function Header() {
  return (
    <div>
      <div className={`${Style.Header}`}>
        <img className={`${Style.Logo}`} src="/Icons/Logo.svg"></img>
        <div className={Style.InfoHeader}>
          <span>Menu</span>{" "}
          <span className={Style.ProfilePicCont}>
            {" "}
            <span>Docs</span>
            <img className={Style.BellIcon} src="/Icons/Header/Bell.svg"></img>
            <img
              src="/Images/Header/ProfilePic.png"
              className={Style.ProfilePic}
            ></img>
            <span>Adedeji</span>
          </span>
        </div>

        <input className=""></input>
      </div>
      <div className={`${Style.HeaderTab}`}>
        <img className={`${Style.Logo}`} src="/Icons/Logo.svg"></img>

        <input className=""></input>
        <div className={Style.InfoHeader}>
          <span className={Style.ProfilePicCont}>
            {" "}
            <span>Docs</span>
            <img className={Style.BellIcon} src="/Icons/Header/Bell.svg"></img>
            <img
              src="/Images/Header/ProfilePic.png"
              className={Style.ProfilePic}
            ></img>
            <span>Adedeji</span>
          </span>
        </div>
      </div>
    </div>
  );
}
