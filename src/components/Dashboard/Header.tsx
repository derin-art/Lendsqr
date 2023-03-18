import Style from "./Dashboard.module.scss";

export default function Header() {
  return (
    <div className={`${Style.Header}`}>
      <div>
        {" "}
        <img width={"100px"} src="/Icons/Logo.svg"></img>
        <img src="/Icons/Header/Bell.svg"></img>
        <img src="/Icons/Header/ProfilePic.svg"></img>
      </div>

      <input className=""></input>
    </div>
  );
}
