"use client"
import React from 'react'
import { useTranslation } from "react-i18next";
import { Typography } from '../common/Typography';

function IntroducingAncestro() {
    const { t } = useTranslation();
    
    return (
       <div className='"relative z-[999] w-full bg-black flex justify-center items-center'>
         <div className="w-full max-w-[900px] mb-[40px] z-[999]">
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
    )
}

export default IntroducingAncestro