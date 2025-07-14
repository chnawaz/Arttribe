"use client";
import React from "react";

import Sbcomponent1 from "@/components/sidebarcomponents/Sbcomponent1";
import Sbcomp2 from "@/components/sidebarcomponents/Sbcomp2";
import Sbcomp3 from "@/components/sidebarcomponents/Sbcomp3";
import Sbcomp4 from "@/components/sidebarcomponents/Sbcomp4";
// import logo from "@/public/images/logo.png"
import { useState } from "react";

function Sidebar() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className=" w-[280px]   p-4 flex flex-col gap-[24px] rounded-[20px] bg-[#0E0F11] sticky min-h-[100vh]">
        <div className="flex flex-row gap-[14px] items-center ">
          <img src="/images/logo.svg" alt="" className="w-[29.9px] h-[28px]" />
          <p className="font-[clashGrotesk] font-[600] text-[22px] leading-[150%] tracking-[0.02em]   text-white cursor-pointer">
            Arttribe
          </p>
        </div>

        {/* 2nd div start */}
        <div className="flex flex-row gap-[8px] items-center cursor-pointer ">
          <img
            src="/images/Arrow_Left.svg"
            alt=""
            className="w-[24px] h-[24px]"
          />
          {/* <p className="font-[Satoshi] font-[500] text-[14px] leading-[1.5] tracking-[0] text-white">
            Back to Image Studio Dashboard
          </p> */}
          <button className="font-[Satoshi] font-[500] text-[14px] leading-[1.5] tracking-[0] text-white cursor-pointer">Back to Image Studio Dashboard</button>
        </div>
        {/* 2nd div end */}
        {/* 3rd div start */}
        <div className="flex flex-col gap-[16px]">
          <Sbcomponent1
            head1="Mode"
            head2="Creative Upscale"
            subhead="Replicate face to new generation"
            image1="/images/Qrcode.svg"
            image2="/images/Right_Arrow.svg"
          />

          <div className="border border-gray-800"></div>
          <Sbcomp2
            head1="Model"
            head2="Realistic"
            image1="/images/Rectangle 43.svg"
            image2="/images/Right_Arrow.svg"
          />
          <div className="border border-gray-800"></div>

          <Sbcomp2
            head1="Aspect Ratio"
            head2="1:1"
            image1="/images/Rectangle 47.svg"
            image2="/images/Right_Arrow.svg"
          />
        </div>
        <div className="border border-gray-800"></div>
        <Sbcomp3
          head1="Styles"
          head2="Styles"
          head3="Lightening"
          head4="Camera"
          image1="/images/Cursor_Click_2.svg"
          image3="/images/Lightbulb_on.svg"
          image4="/images/Camera.svg"
          image2="/images/Right_Arrow.svg"
        />
        <div className="border border-gray-800"></div>
        <Sbcomp4 head1="Number of Images" />

        <div className="border border-gray-800"></div>

        <div className="flex flex-col gap-[8px]">
          <p className="font-[clashGrotesk] font-[600] text-[14px] leading-[1.5] tracking-[0.02em] text-white">
            Enhance Prompt
          </p>
          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
            <button
              onClick={() => setEnabled(!enabled)}
              className={`relative inline-flex h-[14px]  w-[34px] items-center rounded-full transition-colors duration-300 cursor-pointer ${
                enabled ? "bg-[#00FF00]" : "bg-[#A3A3A3]"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                  enabled ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
            {enabled ? (
              <p className="font-[400] text-[14px] leading-[150%] tracking-[0px]">
                On
              </p>
            ) : (
              <p className="font-[400] text-[14px] leading-[150%] tracking-[0px]">
                Off
              </p>
            )}
          </div>
        </div>

        {/* 3rd div end */}
      </div>
    </>
  );
}

export default Sidebar;
