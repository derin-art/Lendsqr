import Style from "./PopUpMenu.module.scss";

export default function PopUpMenu() {
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
  return (
    <div className={Style.PopUpMenu}>
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
