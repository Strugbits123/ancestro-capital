import React from 'react'
import Marquee from "react-fast-marquee";
import { Typography } from '../common/Typography';

import image1 from "../../public/images/1-marq.png";
import image2 from "../../public/images/2-marq.png";
import image3 from "../../public/images/3-marq.png";
import image4 from "../../public/images/4-marq.png";
import image5 from "../../public/images/5-marq.png";
import image6 from "../../public/images/6-marq.png";
import image7 from "../../public/images/7-marq.png";
import image8 from "../../public/images/8-marq.png";
import image9 from "../../public/images/9-marq.png";
import image10 from "../../public/images/10-marq.png";

const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10
];

function Investors() {
    return (
        <div
            className="flex flex-col justify-center items-center w-full gap-y-[50px] mt-[-300px] px-[20px]"
            style={{
                background: `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.05) 20%,
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0.7) 90%,
      rgba(0, 0, 0, 1) 100%
    )
  `,
            }}

        >
            <Typography.Small className="mt-[50px] font-haas font-bold text-[30px] text-white uppercase text-center">
                Backed by international investors
            </Typography.Small>

            <div className="relative w-full max-w-[1920px] overflow-hidden">
                {/* Left gradient */}
                <div className="absolute left-0 top-0 h-full w-[120px] pointer-events-none z-10" />
                {/* Right gradient */}
                <div className="absolute right-0 top-0 h-full w-[120px] pointer-events-none z-10" />

                <Marquee gradient={false} speed={50}>
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="w-[218px] h-[120px] mr-10 rounded-[20px] flex items-center justify-center bg-[#FFFFFF0F]"
                        >
                            <img
                                src={img.src}
                                alt={`Investor ${idx + 1}`}
                                className="max-w-full max-h-full object-contain rounded-[20px]"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Investors;
