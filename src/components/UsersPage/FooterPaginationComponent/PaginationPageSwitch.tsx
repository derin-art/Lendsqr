import Style from "./Footer.module.scss";
type PaginationPageSwitchProps = {
  pageNo: number[];
  selectedPageNo: number;
};

export default function PaginationPageSwitch(props: PaginationPageSwitchProps) {
  const lastPageNumbers = [props.pageNo[props.pageNo.length - 1]];
  const dynamicPageNumbers = props.pageNo.slice(
    props.selectedPageNo,
    props.selectedPageNo + 3
  );
  return (
    <div>
      <button>next</button>
      {dynamicPageNumbers.map((page, index) => {
        return <span key={index}>{index + 1}</span>;
      })}

      {lastPageNumbers.map((page, index) => {
        return <span key={index}>{index + 1}</span>;
      })}

      <button>prev</button>
    </div>
  );
}
