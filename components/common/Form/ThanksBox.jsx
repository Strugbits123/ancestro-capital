import React from "react";
import { Typography } from "../Typography";

function ThanksBox() {
  return (
    <div className="w-full rounded-[20px] py-[50px] px-[20px] sm:px-[144px] bg-[#FFFFFF1A] flex flex-col justify-center items-center border border-[#F8B03B]">
      <Typography.Small className="text-white font-haas font-bold text-[47px] !text-center uppercase">
        Thank You!
      </Typography.Small>
      <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[18px] text-center mt-[10px]">
        Your custom proposal will be generated and sent within 24 hours.
      </Typography.P>
    </div>
  );
}

export default ThanksBox;
