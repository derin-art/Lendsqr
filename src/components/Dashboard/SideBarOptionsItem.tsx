import React from "react";
import Style from "./Dashboard.module.scss";

type SideBarOptionsCompProps = {
  name: string;
  icon: string;
  selectedsideBarItem: string;
  setSelectedSideBarItem: React.Dispatch<React.SetStateAction<string>>;
};

export default function SideBarOptionsItem(props: SideBarOptionsCompProps) {
  const handleSideBarItemClick = () => {
    props.setSelectedSideBarItem(props.name);
  };
  return (
    <button
      onClick={() => {
        console.log(props.name === props.selectedsideBarItem);
        handleSideBarItemClick();
      }}
      className={`${Style.SideBarOptionsComp} ${
        props.name === props.selectedsideBarItem ? Style.isSelected : ""
      } `}
    >
      <img alt={props.name} src={props.icon}></img>
      <span>{props.name}</span>
    </button>
  );
}
