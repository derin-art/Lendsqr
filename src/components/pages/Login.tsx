import LendsqrIcon from "../../Icons/LendsqrIcon";
import EnterLoginDetailsComponent from "../LoginComponents/EnterLoginDetailsComponent";

export default function Login() {
  return (
    <div className="Login">
      <img src={"/Icons/SignInSvg.svg"}></img>
      <EnterLoginDetailsComponent></EnterLoginDetailsComponent>
    </div>
  );
}
