import Style from "./Dashboard.module.scss";

type SideBarOptionsCompProps = {
  name: string;
  icon: string;
};

export default function SideBarOptionsComp(props: SideBarOptionsCompProps) {
  return (
    <div className={Style.SideBarOptionsComp}>
      <img src={props.icon}></img>
      <span>{props.name}</span>
    </div>
  );
}
