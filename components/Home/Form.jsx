import React from "react";
import MultiStepForm from "../common/Form/Form";
import { Typography } from "../common/Typography";
import grassImage from "../../public/images/grass.png";

function Form() {
  return (
    <div
      className="w-full bg-black py-[150px] flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${grassImage.src})` }}
    >
      <div className="w-full flex flex-col max-w-[931px] gap-y-[20px] items-center  p-8 rounded-lg">
        <Typography.H3 className="text-white font-haas font-bold text-[30px] text-center uppercase">
          apply today to join the clean energy movement
        </Typography.H3>
        <MultiStepForm classes={""} />
      </div>
    </div>
  );
}

export default Form;
