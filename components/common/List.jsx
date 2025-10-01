import React from 'react'
import { Typography } from './Typography'

function List({ list = [] }) {
    return (
        <ul className='list-disc pl-5 text-white'>
            {list.map((dt, index) => (
                <li key={index}><Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px]">{dt}</Typography.P></li>
            ))}
        </ul>
    )
}

export default List