import React from 'react'
import { Typography } from '../common/Typography'
import bond from '../../public/images/bonds.png'
import List from '../common/List'

function BondsDetail() {
    return (
        <div className='w-full flex max-sm:flex-col justify-between items-center gap-x-[50px] lg:gap-x-[120px] gap-y-[20px]'>
            <div className='sm:w-[631px] sm:h-[408px] max-sm:w-full '>
                <img src={bond.src} alt="" className='w-full h-full rounded-[20px]' />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
                <Typography.H2 className="text-white font-haas font-bold">
                    What Are Green Bonds?
                </Typography.H2>
                <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px] mt-[10px]">
                    Green Bonds are the fastest-growing asset class in <br /> sustainable finance. <br />
                    Unlike traditional investments, they combine:
                </Typography.P>
                <List list={["Attractive returns (10-12% annually).", "Positive impact — financing renewable energy + clean infrastructure."]} />
                <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[18px] mt-[10px] italic">
                    With Ancestro, your investment not only earns but saves planet Earth from catastrophe
                </Typography.P>
            </div>
        </div>
    )
}

function GreenBonds() {
    return (
        <div className='w-full flex justify-center  items-center bg-black py-[50px] px-[20px]  '>
            <div className='w-full max-w-[1333px] flex flex-col items-center max-sm:gap-y-[50px] sm:gap-y-[150px] '>
                <div className='w-full max-w-[900px]'>
                    <Typography.H3 className="text-white font-haas font-bold text-[30px] text-center uppercase">
                        Introducing Ancestro Green Bonds
                    </Typography.H3>
                    <Typography.P className="!text-[#FFFFFF] font-haas font-normal text-[16px] text-center mt-[10px]">
                        This is your chance to invest directly in the energy transition of a continent while securing strong, reliable returns. <br />
                        This is more than ROI. It’s about protecting the climate, building infrastructure, and transforming lives — one project at a time.
                    </Typography.P>
                </div>
                <BondsDetail />
            </div>
        </div>
    )
}

export default GreenBonds