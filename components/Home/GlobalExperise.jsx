"use client"
import React from 'react'
import { Typography } from '../common/Typography'
import flagImage from '../../public/images/flags.png'
import mapImage from '../../public/images/map3.png'
import Button from '../common/Button/Button'
import { useTranslation } from "react-i18next";


function GlobalExperise() {
    const { t, i18n } = useTranslation();

    return (
        <div className='w-full bg-black flex items-center justify-center py-[150px] p-[20px]'>
            <div className='w-full lg:max-w-[1357px] items-center flex max-lg:flex-col'>
                <div className='flex flex-col gap-y-[10px] w-full lg:w-[783px]'>
                    <Typography.H2 className="text-white font-haas font-bold text-[45px] uppercase">
                        {t("globalExpertise.title")}
                    </Typography.H2>
                    <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px] mt-[10px] my-[38px]">
                        {t("globalExpertise.text")}
                    </Typography.P>
                    <div className='w-full lg:w-[679px] h-[97px]'>
                        <img src={flagImage.src} alt="" className='w-full h-full' />
                    </div>
                    <Button
                        onClick={() => {
                            document
                                .getElementById("target-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        text={t("globalExpertise.btnText")}
                        classes={"w-max mt-[38px]"}
                        textClasses={"!font-haas font-bold !text-[#000000] !text-[15px] "}
                    />
                </div>
                <div className='lg:w-[534px] lg:h-[694px] w-full h-auto '>
                    <img src={mapImage.src} alt="" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default GlobalExperise