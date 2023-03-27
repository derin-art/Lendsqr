import Style from "./FilterComponent.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FilterFunction } from "./Functions/FilterFunctions";
import { DashboardTableItemProps } from "../UsersPageTableItem";
import { DashboardTableItemType } from "../Types/DashboardTableItemType";
import { format } from "date-fns";
import React from "react";
import { useEffect, useRef } from "react";
import { fetchResultType } from "../UsersPageTable";
import { TurnsAFlatArrayIntoNestedArrays } from "../Functions/TurnsAFlatArrayIntoNestedArrays";

type FilterComponentProps = {
  filters: DashboardTableItemProps;
  setFilter: React.Dispatch<React.SetStateAction<DashboardTableItemProps>>;
  userDataFlatArray: DashboardTableItemType[];
  setFetchResults: React.Dispatch<React.SetStateAction<fetchResultType>>;
  isFilterCompRendered: boolean;
  setISFilterCompRendered: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterComponent(props: FilterComponentProps) {
  const ref: any = useRef();
  const variants = {
    out: {},
    in: {},
  };

  const allOrganizationsFromUserArray = props.userDataFlatArray.map((item) => {
    return item.orgName;
  });
  const filterInputs = [
    {
      name: "Organization",
      optionsInput: true,
      options: allOrganizationsFromUserArray,
      value: props.filters.Organization,
    },
    { name: "Username" },
    { name: "Email" },
    { name: "DateJoined", dateInput: true },
    { name: "PhoneNumber" },
    {
      name: "Status",
      optionsInput: true,
      options: ["Active", "Inactive", "Pending", "Blacklisted"],
      value: props.filters.Status,
    },
  ];

  const handleFilterSelection = (key: string, val: string) => {
    console.log("sent");
    props.setFilter((prev) => {
      return { ...prev, [key]: val };
    });
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setISFilterCompRendered(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      {props.isFilterCompRendered && (
        <div className={`${Style.MainComp} `}>
          {filterInputs.map((item, index) => {
            if (item.optionsInput) {
              return (
                <div key={index}>
                  <label>{item.name}</label>
                  <select
                    value={item.value}
                    placeholder={item.name}
                    onChange={(e) => {
                      handleFilterSelection(item.name, e.target.value);
                    }}
                    key={index}
                  >
                    <option label="Select" disabled selected></option>
                    {item.options.map((option, index) => {
                      return (
                        <option value={option} key={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            }

            return (
              <div key={index}>
                <label>{item.name}</label>
                <input
                  onChange={(e) => {
                    handleFilterSelection(item.name, e.target.value);
                  }}
                  key={index}
                  type={item.dateInput ? "date" : "text"}
                  placeholder={item.name}
                ></input>
              </div>
            );
          })}
          <div className={Style.FilterBtnCont}>
            <button
              onClick={() => {
                const initialArray = TurnsAFlatArrayIntoNestedArrays(
                  10,
                  props.userDataFlatArray
                );
                props.setFetchResults((prev) => {
                  return {
                    ...prev,
                    userDataArray: initialArray,
                  };
                });
              }}
            >
              Reset
            </button>
            <button
              onClick={() => {
                const newFilteredArray = FilterFunction(
                  props.filters.Username,
                  props.filters.Organization,
                  props.filters.Email,
                  props.filters.DateJoined,
                  props.filters.PhoneNumber,
                  props.filters.Status,
                  props.userDataFlatArray
                );
                const nestedFilteredArray = TurnsAFlatArrayIntoNestedArrays(
                  10,
                  newFilteredArray
                );
                props.setFetchResults((prev) => {
                  return {
                    ...prev,
                    userDataArray: nestedFilteredArray,
                  };
                });
              }}
            >
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
