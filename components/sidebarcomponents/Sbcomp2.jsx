import React from "react";

function Sbcomp2({ head1, head2, image1, image2 }) {
  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1.5] tracking-[0.02em] text-white">
          {head1}
        </p>
        <div className="flex flex-row  p-[6px] rounded-[12px] bg-[#25272E] items-center justify-between">
          <div className="flex flex-row gap-[6px] items-center">
            <img src={image1} alt="" className="h-[32px] w-[32px]" />
            <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">
              {head2}
            </p>
          </div>
          <img src={image2} alt="" className="h-[24px] w-[24px]" />
        </div>
      </div>
    </>
  );
}

export default Sbcomp2;
