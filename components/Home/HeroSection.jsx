"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { useTranslation } from "react-i18next";
import Button from "../common/Button/Button";

function HeroSection() {
  const { t, i18n } = useTranslation();

  // toggle between English and Spanish
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center px-[20px]"
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.2) 58.71%, #000000 101.54%),
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
          url(/images/heroImage.png)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔘 Language Switch Button (Top-Left) */}
      <div className="fixed top-[20px] left-[20px]">
        <Button
          text={i18n.language === "en" ? "ES" : "EN"}
          classes="bg-transparent"
          textClasses="uppercase"
          onClick={toggleLanguage}
        />
      </div>

      {/* Top Content */}
      <div className="max-w-[1561px] h-screen flex flex-col justify-center items-center gap-y-[10px]">
        <Typography.H1 className="text-white font-haas font-bold lg:text-[60px] xl:text-[80px] text-center uppercase">
          {t("heroSection.title")}
        </Typography.H1>
        <Typography.H4 className="text-white font-haas font-normal text-[30px] text-center">
          {t("heroSection.subTitle")}
        </Typography.H4>
      </div>

      {/* Bottom Content */}
      <div className="w-full max-w-[900px] mb-[40px]">
        <Typography.H3 className="text-white font-haas font-bold text-[30px] text-center uppercase">
          {t("heroSection.secondTitle")}
        </Typography.H3>
        <Typography.P
          className="!text-[#FFFFFF] font-haas font-normal text-[16px] text-center mt-[10px]"
        >
          {t("heroSection.secondSubTitle")}
          </Typography.P>
      </div>
    </div>
  );
}

export default HeroSection;
