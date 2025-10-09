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
      <div className="fixed top-[20px] right-[20px]">
        <Button
          text={i18n.language === "en" ? "ES" : "EN"}
          classes="animate-top-to-bottom-hop z-50 bg-[#F8B03B]
                   tracking-[2px] font-haas font-bold  text-[16px] px-8 py-2
                   shadow-[0_10px_30px_rgba(248,176,59,0.8)] text-white border-1 border-[#F8B03B] "
          textClasses="!text-black uppercase"
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

    </div>
  );
}

export default HeroSection;
