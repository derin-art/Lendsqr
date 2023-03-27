import { useEffect, useState } from "react";
import Style from "./UserDetail.module.scss";
import { useParams } from "react-router-dom";
import { DashboardTableItemType } from "../UsersPage/Types/DashboardTableItemType";
import axios from "axios";
import { GridLoader } from "react-spinners";
import FetchResponseComponent from "../FetchResponseComponent/FetchResponseComponent";

export default function UserDetailPage() {
  const { id } = useParams();

  const [selectedHeader, setSelectedHeader] = useState("General Details");
  const [userDetails, setUserDetails] = useState<DashboardTableItemType>();

  type fetchResults = {
    isFetching: boolean;
    isError: boolean;
    status: string | null;
  };

  const [fetchResults, setFetchResults] = useState<fetchResults>({
    isError: false,
    isFetching: true,
    status: null,
  });

  useEffect(() => {
    if (id) {
      /* Checks if userDetails already exists in local Storage, if it does, it proceeds to set it as the userDetails State, if it dosen't it performs a fetch request to the Api */
      const localStorageUserData = localStorage.getItem(id);
      if (localStorageUserData) {
        setUserDetails(JSON.parse(localStorageUserData));
        setFetchResults((prev) => {
          return { ...prev, isFetching: false };
        });
        return;
      }
    }
    const response = async () => {
      setFetchResults((prev) => {
        return { ...prev, isFetching: true, isError: false };
      });
      const res = await axios
        .get(`${process.env.REACT_APP_LENDSQR_USERS}/${id}`)
        .catch((err) => {
          console.log(err);
          setFetchResults((prev) => {
            return {
              ...prev,
              isFetching: false,
              isError: true,
              status: "500",
            };
          });
          return err;
        });
      if (res.data) {
        setUserDetails(res.data);
        /* Storing UserData in local storage by user id, for later retrieval*/
        localStorage.setItem(res.data.id, JSON.stringify(res.data));
        setFetchResults((prev) => {
          return {
            ...prev,
            status: res.status,
            isError: false,
            isFetching: false,
          };
        });
      }
    };

    response();
  }, []);
  const userDetailPageInfo = [
    {
      name: "Personal Information",
      subHeaders: [
        [
          {
            name: "FULL NAME",
            value: `${userDetails?.profile.firstName} ${userDetails?.profile.lastName}`,
          },
          { name: "email Address", value: userDetails?.email },
          { name: "PHONE NUMBER", value: userDetails?.phoneNumber },
          { name: "BVN", value: userDetails?.profile.gender },
        ],
        [
          { name: "Marital Status", value: "Single" },
          { name: "Children", value: "None" },
          { name: "Type of Residence", value: "Parent's Apartment" },
        ],
      ],
    },

    {
      name: "Education and Employement",
      subHeaders: [
        [
          { name: "Level of Education", value: userDetails?.education.level },
          {
            name: "Employement Status",
            value: userDetails?.education.employmentStatus,
          },
          {
            name: "Sector of Employement",
            value: userDetails?.education.sector,
          },
          {
            name: "Duration of Employement",
            value: userDetails?.education.duration,
          },
        ],
        [
          { name: "Office Mail", value: userDetails?.education.officeEmail },
          {
            name: "Monthly income",
            value: userDetails?.education.monthlyIncome,
          },
          {
            name: "Loan Repayment",
            value: userDetails?.education.loanRepayment,
          },
        ],
      ],
    },
    {
      name: "Socials",
      subHeaders: [
        [
          { name: "Twitter", value: userDetails?.socials.twitter },
          { name: "Facebook", value: userDetails?.socials.facebook },
          { name: "Instagram", value: userDetails?.socials.instagram },
        ],
      ],
    },
    {
      name: "Guarantor",
      subHeaders: [
        [
          {
            name: "Full Name",
            value: `${userDetails?.guarantor.firstName} 
           ${userDetails?.guarantor.lastName}`,
          },
          { name: "Phone Number", value: userDetails?.guarantor.phoneNumber },
          { name: "Email", value: userDetails?.guarantor.address },
          { name: "RelationShip", value: "Sister" },
        ],
      ],
    },
  ];

  const isErrorState = fetchResults.isError && !fetchResults.isFetching;

  const isLoadingState = fetchResults.isFetching;

  const isgoodResponseState = !fetchResults.isError && !fetchResults.isFetching;

  const headingData = [
    {
      jsx: (
        <div className={Style.UserName}>
          <img src={userDetails?.profile.avatar}></img>
          <span>
            <p>{`${userDetails?.profile.firstName} ${userDetails?.profile.lastName}`}</p>
            <div>{userDetails?.accountNumber}</div>
          </span>
        </div>
      ),
    },
    {
      jsx: (
        <span className={Style.UserTier}>
          <p>User's Tier</p>
          <div className={Style.UserTierStarCont}>
            {[1, 2, 3].map((item, index) => {
              return (
                <img
                  className={Style.UserTierStar}
                  key={index}
                  src="/Icons/UserDetailsPage/StarIcon.svg"
                ></img>
              );
            })}
          </div>
        </span>
      ),
    },

    {
      jsx: (
        <span className={Style.UserBank}>
          <p>{userDetails?.accountBalance}</p>
          <div>{userDetails?.accountNumber}/Providus Bank</div>
        </span>
      ),
    },
  ];

  const headerButtons = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div>
      <div className={Style.UserDetailsCompHeader}>
        <div className={Style.HeaderDetails}>
          {headingData.map((item, index) => {
            return (
              <div className={Style.HeaderDetailsCont} key={index}>
                {item.jsx}
              </div>
            );
          })}
        </div>
        <div className={Style.HeaderButtonsCont}>
          {headerButtons.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setSelectedHeader(item);
                }}
                className={`${selectedHeader === item ? Style.isSelected : ""}`}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className={Style.UserDetailsComp}>
        <FetchResponseComponent
          isErrorState={isErrorState}
          isGoodResponseState={isgoodResponseState}
          isLoadingState={isLoadingState}
          goodResponse={userDetailPageInfo.map((section, index) => {
            return (
              <div key={index} className={Style.UserDetailsCompSection}>
                <span>{section.name}</span>
                {section.subHeaders.map((sub, index) => {
                  return (
                    <div key={index} className={Style.SubHeadings}>
                      {sub.map((item, index) => {
                        return (
                          <div key={index}>
                            <p> {item.name}</p>
                            {item.value}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        ></FetchResponseComponent>
      </div>
    </div>
  );
}
