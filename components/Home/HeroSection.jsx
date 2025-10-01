import React from 'react'
import { Typography } from '../common/Typography';
import Button from '../common/Button/Button';
import Investors from './Investors';

function HeroSection() {
    return (
        <div
            className="w-full min-h-screen h-[1200px] bg-cover bg-center flex  items-center flex-col px-[20px]"
            style={{ backgroundImage: `url(/images/heroImage.png)` }}
        >
            <div className='max-w-[1561px] flex flex-col items-center gap-y-[10px] mt-[323px]'>
                <Typography.H1 className="text-white font-haas font-bold lg:text-[60px] xl:text-[80px] text-center uppercase">Financing the Latin American Energy Transition Institutional Capital. Primal Power.</Typography.H1>
                <Typography.H4 className="text-white font-haas font-normal text-[30px] text-center">Capital solutions designed for renewable energy, EV, and sustainable infrastructure projects.</Typography.H4>
                <Button text={"Apply Now"} textClasses={"font-haas font-bold !text-[#000000] text-[15px] mt-[10px]"} />
            </div>
        </div>
    );
}

export default HeroSection;
