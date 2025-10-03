"use client"

import React from "react";
import ant1 from "../../public/images/ant-1.png";
import ant2 from "../../public/images/ant-2.png";
import ant3 from "../../public/images/ant-3.png";
import ant4 from "../../public/images/ant-4.png";
import ant5 from "../../public/images/ant-5.png";
import { Typography } from "../common/Typography";
import grassImage from "../../public/images/grass.png";
import logo from "../../public/images/logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center bg-cover bg-center gap-y-[100px] mt-[160px]">
      <img src={logo.src} alt="" className="w-[250px] h-[157px]" />
      <div className="flex gap-x-[10px] w-full justify-center items-center">
        <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px]">
          {t("footer.text1")}
        </Typography.P>

        <svg
          width="50"
          height="2"
          viewBox="0 0 50 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="50" height="1" fill="#D9D9D9" />
        </svg>

        <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px]">
          {t("footer.text2")}
        </Typography.P>
      </div>
    </div>
  );
}

function PoweredAncestro() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full bg-black pb-[50px] pt-[300px] flex flex-col justify-center items-center px-[20px] bg-cover bg-center"
      style={{ backgroundImage: `url(${grassImage.src})` }}
    >
      <div className="w-full max-w-[1001px] h-full grid grid-cols-2 lg:grid-cols-5 place-items-center gap-x-[10px] gap-y-[50px]">
        {/* Heading spans all columns */}
        <Typography.H3 className="col-span-full text-white font-haas font-bold lg:text-[30px] text-center uppercase">
          {t("footer.title")}
        </Typography.H3>

        <img src={ant1.src} alt="Ant1" className="w-[173px]" />
        <img src={ant2.src} alt="Ant2" className="w-[181px]" />
        <img src={ant3.src} alt="Ant3" className="w-[148px]" />
        <img src={ant4.src} alt="Ant4" className="w-[150px]" />
        <img src={ant5.src} alt="Ant5" className="w-[157px]" />
      </div>
      <Footer />
    </div>
  );
}

export default PoweredAncestro;
