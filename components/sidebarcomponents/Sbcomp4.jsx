"use clint";
import React, { useState } from "react";

function Sbcomp4({ head1 }) {
  const [curr, setCurr] = useState(1);
  return (
    <>
      <div className="flex flex-col gap-[8px]">
        <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1.5] tracking-[0.02em] text-white ">
          {head1}
        </p>
        <div className="flex flex-row gap-[12px] items-center justify-between  ">
          <div
            onClick={() => setCurr(1)}
            className={`bg-[#FFFFFF0F] px-[22px] py-[7.5px] rounded-[8px] hover:bg-[#ffffff09]  cursor-pointer ${
              curr == 1 ? "border-[1px]" : ""
            }`}
          >
            <button className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em] cursor-pointer">
              1
            </button>
          </div>
          <div
            onClick={() => setCurr(2)}
            className={`bg-[#FFFFFF0F] px-[22px] py-[7.5px] rounded-[8px] hover:bg-[#ffffff09]  cursor-pointer ${
              curr == 2 ? "border-[1px]" : ""
            }`}
          >
            <button className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em] cursor-pointer">
              2
            </button>
          </div>
          <div
            onClick={() => setCurr(3)}
            className={`bg-[#FFFFFF0F] px-[22px] py-[7.5px] rounded-[8px] hover:bg-[#ffffff09]  cursor-pointer ${
              curr == 3 ? "border-[1px]" : ""
            }`}
          >
            <button className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em] cursor-pointer">
              3
            </button>
          </div>
          <div
            onClick={() => setCurr(4)}
            className={`bg-[#FFFFFF0F] px-[22px] py-[7.5px] rounded-[8px] hover:bg-[#ffffff09]  cursor-pointer ${
              curr == 4 ? "border-[1px]" : ""
            }`}
          >
            <button className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em] cursor-pointer">
              4
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sbcomp4;
