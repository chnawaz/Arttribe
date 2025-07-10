import React from "react";

function Sbcomp4({head1}) {
  return (
    <>
      <div className="flex flex-col gap-[8px]">
        <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1.5] tracking-[0.02em] text-white">
          {head1}
        </p>
        <div className="flex flex-row gap-[12px] items-center justify-between ">
          <div className="bg-[#25272E] px-[22px] py-[7.5px] rounded-[8px]">
            <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">1</p>
          </div>
          <div className="bg-[#25272E] px-[22px] py-[7.5px] rounded-[8px]">
            <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">2</p>
          </div>
          <div className="bg-[#25272E] px-[22px] py-[7.5px] rounded-[8px]">
            <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">3</p>
          </div>
          <div className="bg-[#25272E] px-[22px] py-[7.5px] rounded-[8px]">
            <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">4</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sbcomp4;
