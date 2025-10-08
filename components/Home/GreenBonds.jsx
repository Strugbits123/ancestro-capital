"use client"

import React from "react";
import { Typography } from "../common/Typography";
import bond from "../../public/images/bonds.png";
import List from "../common/List";
import { useTranslation } from "react-i18next";

function BondsDetail() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex border max-sm:flex-col justify-between items-center gap-x-[50px] lg:gap-x-[120px] gap-y-[20px]">
      <div className="sm:w-[631px] sm:h-[408px] max-sm:w-full border  ">
        <img src={bond.src} alt="" className="w-full h-full rounded-[20px]" />
      </div>
      <div className="flex flex-col gap-y-[10px] sm:w-[758px]">
        <Typography.H2 className="text-white font-haas font-bold">
          {t("greenBonds.heading")}
        </Typography.H2>

        <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px] mt-[10px]">
          {t("greenBonds.description")}
        </Typography.P>

        <List list={t("greenBonds.list", { returnObjects: true })} />

        <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[18px] mt-[10px] italic">
          {t("greenBonds.footer")}
        </Typography.P>
      </div>
    </div>
  );
}

function GreenBonds() {
  return (
    <div className="w-full flex justify-center items-center bg-black py-[50px] px-[20px]">
      <div className="w-full max-w-[1333px] flex flex-col items-center max-sm:gap-y-[50px] sm:gap-y-[150px] ">
        <BondsDetail />
      </div>
    </div>
  );
}

export default GreenBonds;
