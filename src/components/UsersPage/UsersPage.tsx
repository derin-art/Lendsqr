import UserPageHeadline from "./UserPageHeadline";
import UsersPageTable from "./UsersPageTable";
import Style from "./UsersPage.module.scss";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Users() {
  const toastId2 = "custom";

  useEffect(() => {
    console.log("heyy");
    toast.info(
      "Hi User. Click on the table header to open up the filter component. Click to close",
      {
        autoClose: false,
        toastId: toastId2,
      }
    );
  }, []);
  return (
    <div className={Style.UsersPage}>
      <ToastContainer></ToastContainer>
      <UserPageHeadline></UserPageHeadline>
      <UsersPageTable></UsersPageTable>
    </div>
  );
}
