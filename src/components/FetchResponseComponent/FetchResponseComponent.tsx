import { GridLoader } from "react-spinners";

type FetchResponseComponent = {
  isGoodResponseState: boolean;
  goodResponse: any;
  isErrorState: boolean;
  isLoadingState: boolean;
};

export default function FetchResponseComponent(props: FetchResponseComponent) {
  return (
    <>
      {props.isGoodResponseState && props.goodResponse}
      {props.isErrorState && <div>An error Occured</div>}
      {props.isLoadingState && (
        <div>
          {" "}
          <GridLoader></GridLoader>
        </div>
      )}
    </>
  );
}
