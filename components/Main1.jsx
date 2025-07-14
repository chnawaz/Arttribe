"use client";

// import React from "react";
import React, { useRef, useState } from "react";

function Main() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // to trigger hidden input

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="h-[100%]  w-full flex flex-col rounded-[16px] p-[24px] gap-[54px] bg-[#0E0F11]  justify-center items-center mt-[68px]  ">
        <div className="max-w-[786px] w-full mx-auto py-[32px] px-[24px] gap-[12px] rounded-[16px] border-dashed border-[1px] border-[#525252] flex flex-col items-center justify-center">
          {/* <img src="/images/Gallery_2.svg" alt="" /> */}
          {image ? (
            <img
              src={image}
              alt=""
              className="h-40 w-40 rounded-md object-cover"
            />
          ) : (
            <>
              <img src="/images/Gallery_2.svg" alt="" />
              <div className="flex flex-col gap-[4px] items-center justify-center">
                <p className="font-[clashGrotesk] font-[600] text-[24px] leading-[150%] tracking-[0.02em] text-white">
                  Upload pictures (optional)
                </p>
                <p className="font-[satoshi] font-[500] text-[12px] leading-[1.5] tracking-[0] text-[#D4D4D4]">
                  Browse or drag n drop from your computer
                </p>
              </div>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />

          <div className="group  transition duration-300 cursor-pointer">
            <p className="font-[satoshi] font-[500] text-[12px] leading-[1.5] tracking-[0]   text-[#00FF00] ">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              >
                Browse
              </button>
            </p>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00FF00]"></span>
          </div>
        </div>
        <div className="relative max-w-[786px] w-full ">
          <input
            type="text"
            placeholder=" Write a prompt or click generate to continue"
            className="font-[satoshi] font-[500] text-[14px] leading-[1.5] tracking-[0.02em] placeholder:text-[#A3A3A3] max-w-[786px] w-full mx-auto  flex flex-row items-center justify-between rounded-[12px] py-[17.5px] pr-[12px] pl-[24px] bg-[#1C1D1F] hover:bg-[#ffffff09] duration-400 "
          />
          <button className="absolute top-3  right-3.5 flex flex-row items-center gap-[4px] py-[4px] px-[12px] rounded-[8px] bg-[#00FF00]  cursor-pointer font-[clashGrotesk] font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-black ">
            Generate
            <img
              src="/images/Sparkels.svg"
              alt=""
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
