import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex flex-row bg-[#0E0F11] items-center justify-between rounded-[16px] py-[12px] pl-[24px] pr-[12px] fixed w-[calc(100%_-_300px)] ">
        <div className="flex flex-row gap-[10px] items-center">
          <img src="/images/Qrcode.svg" alt="" className="h-[32px] w-[32px]" />
          <p className="font-[clashGrotesk] font-[600] text-[24px] leading-[150%] tracking-[0.02em]   text-white">
            Creative Upscale
          </p>
        </div>
        <div className="flex flex-row gap-[12px] justify-between ">
            <div className="flex flex-row gap-[4px] py-[4px] px-[8px] rounded-[12px] bg-[#25272E] items-center cursor-pointer">
                <img src="/images/Polygon 1.svg" alt="" className="h-[16px] w-[16px]" />
                <p className="font-[clashGrotesk] font-[500] text-[16px] leading-[150%] tracking-[0.02em]   text-[#D4D4D4]">49 Credits</p>
            </div>
            <div className="flex flex-row gap-[4px] py-[4px] px-[8px] rounded-[12px] bg-[#00FF001A] items-center text-[#00FF00] cursor-pointer">
                <img src="/images/Diamond.svg" alt="" className="h-[28px] w-[28px]" />
                <p className="font-[clashGrotesk] font-[500] text-[16px] leading-[150%] tracking-[0.02em] ">Upgrade</p>
            </div>
            <img src="/images/Ellipse 1.png" alt=""  />
        </div>
      </div>
    </>
  );
}

export default Navbar;
