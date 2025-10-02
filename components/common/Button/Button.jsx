import React from 'react'
import { Typography } from '../Typography'

function Button({text, classes, textClasses}) {
  return (
    <button className={`px-[30px] py-[10px] border border-[#F8B03B] cursor-pointer rounded-[500px] ${classes} ${textClasses}`}>
        <Typography.Small className={`!text-[#F8B03B] ${textClasses} `}>{text}</Typography.Small>
    </button>
  )
}

export default Button