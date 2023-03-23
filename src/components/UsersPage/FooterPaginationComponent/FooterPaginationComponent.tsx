import Style from "./Footer.module.scss";

import { DashboardTableItemType } from "../Types/DashboardTableItemType";
import React from "react";
type FooterPaginationProps = {
  userDataArray: DashboardTableItemType[][];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function FooterPaginationComponent(
  props: FooterPaginationProps
) {
  const numberPerPageOptions = Array(100)
    .fill(0)
    .map((v, i) => i + 1);

  const pageNumbers = props.userDataArray.length;

  const pageNumberArray = Array(pageNumbers)
    .fill(0)
    .map((v, i) => i + 1);

  const handlePrevPage = () => {
    props.setCurrentPage((prev) => {
      if (prev === 0) {
        return prev;
      } else return prev - 1;
    });
  };

  const handleNextPage = () => {
    props.setCurrentPage((prev) => {
      if (prev === pageNumbers) {
        return prev;
      } else return prev + 1;
    });
  };

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
        <button
          onClick={() => {
            handleNextPage();
          }}
        >
          next
        </button>
        {props.userDataArray.map((page, index) => {
          return <span key={index}>{index + 1}</span>;
        })}

        <button
          onClick={() => {
            handlePrevPage();
          }}
        >
          prev
        </button>
      </div>
    </div>
  );
}
