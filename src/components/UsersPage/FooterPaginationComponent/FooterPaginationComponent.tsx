import Style from "./Footer.module.scss";
import { DashboardTableItemType } from "../Types/DashboardTableItemType";
import React from "react";
type FooterPaginationProps = {
  userDataArray: DashboardTableItemType[][];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function FooterPaginationComponent(
  props: FooterPaginationProps
) {
  const numberPerPageOptions = Array(100)
    .fill(0)
    .map((v, i) => i + 1);

  const pageNumbers = props.userDataArray.length;

  return (
    <div className={Style.FooterCont}>
      <div>
        Showing{" "}
        <select placeholder="Select">
          {numberPerPageOptions.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })}{" "}
          out of 100
        </select>
      </div>
      <div>
        <button>next</button>
        {props.userDataArray.map((page, index) => {
          return <span key={index}>{index + 1}</span>;
        })}

        <button>prev</button>
      </div>
    </div>
  );
}
