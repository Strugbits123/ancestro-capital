"use client";
import React from "react";
import { Typography } from "../Typography";
import backImage from "@/public/images/back.png";
import { useTranslation } from "react-i18next";

function StepperHeading({ step, onClick }) {
  const { t } = useTranslation();

  
  const headers = t("form.headers", { returnObjects: true });
 

  return (
    <div className="w-full flex items-center relative">
   
      {step > 1 && (
        <img
          src={backImage.src}
          alt="back"
          onClick={onClick}
          className="w-[30px] h-[30px] absolute left-0 cursor-pointer hidden sm:block"
        />
      )}

     
      <div className="w-full flex items-center justify-center gap-x-[12px]">
        {step > 1 && (
          <img
            src={backImage.src}
            alt="back"
            onClick={onClick}
            className="w-[30px] h-[30px] absolute left-0 cursor-pointer sm:hidden"
          />
        )}

        <Typography.H3 className="mx-auto max-sm:text-center text-white font-haas font-bold text-[20px] dm:text-[27px] uppercase">
          {headers[step - 1]}
        </Typography.H3>
      </div>
    </div>
  );
}

export default StepperHeading;
