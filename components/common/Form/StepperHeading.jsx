import React from 'react'
import { Typography } from '../Typography'
import backImage from '@/public/images/back.png'

function StepperHeading({ step, onClick }) {
    return (
      <div className="w-full flex items-center  relative">
  {/* Back icon on the left */}
 {step > 1 && (
      <img
    src={backImage.src}
    alt="back"
    onClick={onClick}
    className="w-[30px] h-[30px] absolute left-0 cursor-pointer"
  />
 )}

  {/* Heading centered */}
  <Typography.H3 className="mx-auto text-white font-haas font-bold text-[27px] uppercase">
    Step {step}: Personal Info
  </Typography.H3>
</div>


    )
}

export default StepperHeading