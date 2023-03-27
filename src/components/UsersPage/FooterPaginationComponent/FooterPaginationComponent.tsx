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
      if (prev === pageNumbers - 1) {
        return prev;
      } else return prev + 1;
    });
  };

  return (
    <div className={Style.FooterCont}>
      <div className={Style.FooterSelector}>
        Showing{" "}
        <select placeholder="Select ">
          {numberPerPageOptions.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })}{" "}
        </select>{" "}
        out of 100
      </div>
      <div className={Style.FooterButtons}>
        <button
          className={`${Style.NextPage} ${
            props.currentPage === 0 && Style.cannotBeClicked
          }`}
          onClick={() => {
            handlePrevPage();
          }}
        >
          <img src="\Icons\UsersPage\FooterPaginationComponent\Prev.svg"></img>
        </button>
        <div className={Style.FooterNumbers}>
          {" "}
          <div className={Style.StartingIndexes}>
            {" "}
            {props.userDataArray
              .slice(0, props.userDataArray.length - 2)
              .map((page, index) => {
                return (
                  <span
                    className={`${index === 0 && Style.start} ${
                      index === props.userDataArray.length - 1 && Style.end
                    }`}
                    key={index}
                  >
                    {index + 1}
                  </span>
                );
              })}
          </div>
          {props.userDataArray.map((page, index) => {
            if (props.userDataArray.length - 2 <= index) {
              return (
                <span
                  className={`${index === 0 && Style.start} ${
                    index === props.userDataArray.length - 1 && Style.end
                  }`}
                  key={index}
                >
                  {index + 1}
                </span>
              );
            }
          })}
        </div>
        <button
          onClick={() => {
            handleNextPage();
          }}
          className={`${
            props.currentPage === pageNumbers - 1 && Style.cannotBeClicked
          } `}
        >
          <img src="\Icons\UsersPage\FooterPaginationComponent\Prev.svg"></img>
        </button>
      </div>
    </div>
  );
}
