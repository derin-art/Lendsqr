import { GridLoader } from "react-spinners";
import Style from "./FetchResponse.module.scss";

type FetchResponseComponent = {
  isGoodResponseState: boolean;
  goodResponse: any;
  isErrorState: boolean;
  isLoadingState: boolean;
};

export default function FetchResponseComponent(props: FetchResponseComponent) {
  return (
    <div className={Style.FetchResponseCont}>
      {props.isGoodResponseState && props.goodResponse}
      {props.isErrorState && (
        <div className={Style.ErrorRes}>
          An error occured. Please check your internet connection and try again
        </div>
      )}
      {props.isLoadingState && (
        <div className={Style.GridLoader}>
          {" "}
          <GridLoader size={30} color="#39cdcc"></GridLoader>
        </div>
      )}
    </div>
  );
}
