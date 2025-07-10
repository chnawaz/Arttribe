import React from "react";

function Sbcomp3({head1, head2 , head3 , head4, image1,image2,image3,image4,}) {
  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1.5] tracking-[0.02em] text-white">
          {head1}
        </p>
        <div className="flex flex-col gap-[12px]">
          {/* 1st start */}
          <div className="flex flex-row  p-[6px] rounded-[12px] bg-[#25272E] items-center justify-between">
            <div className="flex flex-row gap-[6px] items-center">
              <img src={image1} alt="" className="h-[32px] w-[32px]" />
              <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">
                {head2}
              </p>
            </div>
            <img src={image2} alt="" className="h-[24px] w-[24px]" />
          </div>
          {/* 1st end */}
          {/* 2nd start */}
          <div className="flex flex-row  p-[6px] rounded-[12px] bg-[#25272E] items-center justify-between">
            <div className="flex flex-row gap-[6px] items-center">
              <img src={image3} alt="" className="h-[32px] w-[32px]" />
              <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">
                {head3}
              </p>
            </div>
            <img src={image2} alt="" className="h-[24px] w-[24px]" />
          </div>
          {/* 2nd end */}
          {/* 3rd start */}
          <div className="flex flex-row  p-[6px] rounded-[12px] bg-[#25272E] items-center justify-between">
            <div className="flex flex-row gap-[6px] items-center">
              <img src={image4} alt="" className="h-[32px] w-[32px]" />
              <p className="font-[clashGrotesk] font-[500] text-[14px] leading-[150%] tracking-[0.02em]">
                {head4}
              </p>
            </div>
            <img src={image2} alt="" className="h-[24px] w-[24px]" />
          </div>
          {/* 3rd end */}
        </div>
      </div>
    </>
  );
}

export default Sbcomp3;
