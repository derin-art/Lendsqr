import Style from "./PopUpMenu.module.scss";
import { useEffect, useRef } from "react";

type PopUpMenuProps = {
  setIndexOfPopUpMenuOpen: React.Dispatch<React.SetStateAction<string>>;
};

export default function PopUpMenu(props: PopUpMenuProps) {
  const ref: any = useRef();
  const popUpMenuSvgRootLocation = "Icons/UsersPage/PopUpMenu";
  const popUpMenuButtons = [
    {
      name: "View Details",
      svg: `${popUpMenuSvgRootLocation}/ViewDetails.svg`,
    },
    {
      name: "Blacklist User",
      svg: `${popUpMenuSvgRootLocation}/BlackListUser.svg`,
    },
    {
      name: "Activate User",
      svg: `${popUpMenuSvgRootLocation}/ActivateUser.svg`,
    },
  ];

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setIndexOfPopUpMenuOpen("");
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
    <div ref={ref} className={Style.PopUpMenu}>
      {popUpMenuButtons.map((item, index) => {
        return (
          <button key={index}>
            <img src={item.svg}></img> {item.name}
          </button>
        );
      })}
    </div>
  );
}
