"use client";

import React from "react";
import { Typography } from "../common/Typography";
import bond from "../../public/images/bonds.png";
import List from "../common/List";
import { useTranslation } from "react-i18next";

function Points({ data }) {
  return (
    <>
      {data.map((dt, index) => (
        <div
          className="w-full lg:w-max flex items-center bg-[#1A1A1A] py-[10px] px-[20px] rounded-[10px]"
          key={index}
        >
          <svg
            width="18"
            className="drop-shadow-md"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z"
              fill="#FFCD28"
            />
          </svg>
          <Typography.Small className="text-white font-haas font-normal text-[18px] ml-[10px]">
            {dt}
          </Typography.Small>
        </div>
      ))}
    </>
  );
}

function BondsDetail() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-row-reverse max-sm:flex-col justify-between items-center gap-x-[50px] lg:gap-x-[120px] gap-y-[20px]">
      <div className="sm:w-[631px] sm:h-[408px] max-sm:w-full ">
        <img src={bond.src} alt="" className="w-full h-full rounded-[20px]" />
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <Typography.H2 className="text-white font-haas font-bold">
          {t("investGreenBonds.title")}
        </Typography.H2>
        <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px] mt-[10px]">
          {t("investGreenBonds.text1")}
        </Typography.P>

        {/* First List */}
        <List list={t("investGreenBonds.list", { returnObjects: true })} />

        <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[18px] mt-[10px] italic">
          {t("investGreenBonds.text2")}
        </Typography.P>

        {/* Second List */}
        <div className="flex flex-col gap-y-[10px]">
          <Points data={t("investGreenBonds.list2", { returnObjects: true })} />
        </div>
      </div>
    </div>
  );
}

function InvestGreenBonds() {
  return (
    <div className="w-full flex justify-center items-center bg-black py-[50px] px-[20px]">
      <div className="w-full max-w-[1333px] flex flex-col items-center max-sm:gap-y-[50px] sm:gap-y-[150px]">
        <BondsDetail />
      </div>
    </div>
  );
}

export default InvestGreenBonds;
