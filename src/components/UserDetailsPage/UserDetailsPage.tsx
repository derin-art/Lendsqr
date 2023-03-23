import { useEffect, useState } from "react";
import Style from "./UserDetail.module.scss";
import { useParams } from "react-router-dom";
import { DashboardTableItemType } from "../UsersPage/Types/DashboardTableItemType";
import axios from "axios";
import { GridLoader } from "react-spinners";

export default function UserDetailPage() {
  const { id } = useParams();

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

  return (
    <div className={Style.UserDetailsComp}>
      {isgoodResponseState &&
        userDetailPageInfo.map((section, index) => {
          return (
            <div key={index}>
              <span>{section.name}</span>
              {section.subHeaders.map((sub, index) => {
                return (
                  <div key={index}>
                    {sub.map((item, index) => {
                      return (
                        <div key={index}>
                          {item.name}
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
      {isErrorState && <div>An error Occured</div>}
      {isLoadingState && (
        <div>
          <GridLoader></GridLoader>
        </div>
      )}
    </div>
  );
}
