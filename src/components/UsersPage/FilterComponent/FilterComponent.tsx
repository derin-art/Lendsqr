import Style from "./FilterComponent.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FilterFunction } from "./Functions/FilterFunctions";
import { DashboardTableItemProps } from "../UsersPageTableItem";
import { DashboardTableItemType } from "../Types/DashboardTableItemType";
import { format } from "date-fns";
import React from "react";
import { fetchResultType } from "../UsersPageTable";
import { TurnsAFlatArrayIntoNestedArrays } from "../Functions/TurnsAFlatArrayIntoNestedArrays";

type FilterComponentProps = {
  filters: DashboardTableItemProps;
  setFilter: React.Dispatch<React.SetStateAction<DashboardTableItemProps>>;
  userDataFlatArray: DashboardTableItemType[];
  setFetchResults: React.Dispatch<React.SetStateAction<fetchResultType>>;
  isFilterCompRendered: boolean;
};

export default function FilterComponent(props: FilterComponentProps) {
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

  const date = new Date("2020-09-08T15:19:37.972Z");

  console.log("date", format(date, "PPp"));

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        key={String(props.isFilterCompRendered)}
        animate="in"
        initial="out"
        exit={"out"}
      >
        {props.isFilterCompRendered && (
          <div className={`${Style.MainComp} `}>
            {filterInputs.map((item, index) => {
              if (item.optionsInput) {
                return (
                  <div>
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
                <div>
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
            <div>
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
                      userDataFlatArray: newFilteredArray,
                    };
                  });
                }}
              >
                Filter
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
