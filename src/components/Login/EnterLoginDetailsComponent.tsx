import { useState, useRef, useEffect } from "react";
import Style from "./Login.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import {
  ifErrorUpdate,
  notify,
  toastOptions,
  update,
} from "../../hooks/useToastifyPopUp";

export default function EnterLoginDetailsComponent() {
  const toastId2 = "custom";

  useEffect(() => {
    toast.info(
      "Hi User. Type any Text into the Email and Password fields and click the Login button, to access the Users Page. Click to close ",
      {
        autoClose: false,
        toastId: toastId2,
      }
    );
  }, []);
  const navigate = useNavigate();
  const toastId = useRef();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = () => {
    notify(toastId, "Loading");
    if (!email) {
      ifErrorUpdate(toastId, "Please enter an email address");
      return;
    }
    if (!password) {
      ifErrorUpdate(toastId, "Please enter a Password");
      return;
    }
    navigate("/Dashboard");
  };
  return (
    <div className={`${Style.LoginDetailComp}`}>
      <ToastContainer></ToastContainer>
      <div className={`${Style.headingCont}`}>
        <h1 className={Style.h1}>Welcome!</h1>
        <h2 className={Style.h2}>Enter details to login.</h2>
      </div>
      <div className={`w-full ${Style.inputCont}`}>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></input>
      </div>
      <div className={`w-full ${Style.inputCont}`}>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
        ></input>
        <button
          onClick={() => {
            setIsPasswordVisible((prev) => !prev);
          }}
          className={Style.ShowInput}
        >
          SHOW
        </button>
      </div>
      <div className={Style.ForgotBtn}>
        <button>FORGOT PASSWORD?</button>
      </div>
      <div className={`${Style.LoginBtnCont}`}>
        <button
          onClick={() => {
            handleLoginClick();
          }}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
}
