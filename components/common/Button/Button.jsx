import React from 'react'
import { Typography } from '../Typography'

function Button({text, classes, textClasses}) {
  return (
    <button className={`px-[30px] py-[15px] text-[#000000] bg-[#F5DC7B] cursor-pointer rounded-[500px] ${classes} ${textClasses}`}>
        <Typography.Small className={`${textClasses}`}>{text}</Typography.Small>
    </button>
  )
}

export default Button