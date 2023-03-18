import LendsqrIcon from "../../Icons/LendsqrIcon";
import Style from "./Login.module.scss";
import EnterLoginDetailsComponent from "./EnterLoginDetailsComponent";

export default function Login() {
  return (
    <div className={Style.Login}>
      <img className={Style.Illustration} src={"/Icons/SignInSvg.svg"}></img>
      <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
    </div>
  );
}
