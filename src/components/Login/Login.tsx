import Style from "./Login.module.scss";
import EnterLoginDetailsComponent from "./EnterLoginDetailsComponent";


export default function Login() {
  const logoSvgLocation = "/Icons/Logo.svg";
  return (
    <div className={Style.Login}>
      <img alt="Logo" className={Style.Logo} src={logoSvgLocation}></img>
      <img
        alt="Man walking through door Illustration"
        className={Style.Illustration}
        src={"/Icons/SignInSvg.svg"}
      ></img>
      <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
    </div>
  );
}
