"use client"
import React from 'react'
import { Typography } from '../common/Typography'
import Button from '../common/Button/Button'
import { useTranslation } from "react-i18next";

function LearnMore() {

  const { t, i18n } = useTranslation();

  return (
    <div className='w-full bg-black flex items-center justify-center p-[20px]'>
        <div className='w-full max-w-[1189px] flex flex-col gap-y-[15px] items-center bg-[#F5DC7B33] rounded-[40px] py-[50px] border border-[#F5DC7B]'>
            <Typography.Small className='!text-[30px] text-center lg:!text-[70px] text-white font-haas font-bold uppercase'>
                {t("learnMore.title")}
            </Typography.Small>
            <Typography.P className='!text-[#FFFFFF] font-haas font-normal lg:text-[30px] text-center w-full max-w-[795px]'>
                {t("learnMore.text")}
            </Typography.P>
            <Button text={t("learnMore.btnText")} classes={"!border-white"} textClasses={"font-haas font-bold !text-white text-[15px] mt-[10px]"} />
        </div>
    </div>
  )
}

export default LearnMore