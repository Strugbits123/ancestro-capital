"use client";
import React from "react";
import { Typography } from "../Typography";
import backImage from "@/public/images/back.png";
import { useTranslation } from "react-i18next";

function StepperHeading({ step, onClick }) {
  const { t } = useTranslation();

  // Example array (can also come from translations)
  const headers = t("form.headers", { returnObjects: true }); 
  // If you don’t use i18n for this, just hardcode: 
  // const headers = ["Step 01: Personal Info", "Step 02: Investment Interest", "Step 03: Experience & Fit", "Step 04:"];

  return (
    <div className="w-full flex items-center relative">
      {/* Back icon on the left */}
      {step > 1 && (
        <img
          src={backImage.src}
          alt="back"
          onClick={onClick}
          className="w-[30px] h-[30px] absolute left-0 cursor-pointer hidden lg:black"
        />
      )}

      {/* Heading centered */}
      <Typography.H3 className="mx-auto text-white font-haas font-bold text-[27px] uppercase">
        {headers[step - 1]} {/* 👈 renders correct step */}
      </Typography.H3>
    </div>
  );
}

export default StepperHeading;
