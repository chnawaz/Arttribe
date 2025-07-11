import React from "react";

function Sbcomponent1({ head1, head2, subhead, image1, image2 }) {
  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1.5] tracking-[0.02em] text-white">
          {head1}
        </p>
        <div className="flex flex-row gap-[8px] p-[12px] rounded-[12px] bg-[#FFFFFF0F] items-center justify-center">
          <img src={image1} alt="" className="h-[32px] w-[32px]" />
          <div className="flex flex-col gap-[4px] ">
            <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1] tracking-[0.02em] text-white">
              {head2}
            </p>
            <p className="font-[satoshi] font-[500] text-[12px] leading-[1.5] tracking-[0] text-[#A3A3A3]">
              {subhead}
            </p>
          </div>
          <img src={image2} alt="" className="h-[24px] w-[24px]" />
        </div>
      </div>
    </>
  );
}

export default Sbcomponent1;
