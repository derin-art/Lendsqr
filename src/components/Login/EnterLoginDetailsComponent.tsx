import Style from "./Login.module.scss";

export default function EnterLoginDetailsComponent() {
  return (
    <div className={`${Style.LoginDetailComp}`}>
      <div className={`${Style.headingCont}`}>
        <h1>Welcome!</h1>
        <h2>Enter details to login.</h2>
      </div>
      <div className={`w-full ${Style.inputCont}`}>
        <input placeholder="Email"></input>
      </div>
      <div className={`w-full ${Style.inputCont}`}>
        <input placeholder="Password"></input>
        <button className={Style.ShowInput}>Show</button>
      </div>
      <div className={Style.ForgotBtn}>
        <button>FORGOT PASSWORD?</button>
      </div>
      <div className={`${Style.LoginBtnCont}`}>
        <button>Login</button>
      </div>
    </div>
  );
}
