"use client";

// import React from "react";
import { fal } from "@fal-ai/client";
import React, { useRef, useState } from "react";
fal.config({
  credentials:
    "e20ace8d-2635-42d0-bb65-ec175e40b30e:904859ca20d57f13f9180f25149d90f8",
});

function Main() {
    const [image, setImage] = useState(null);
    

  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
//   old
const fileInputRef = useRef(null); // to trigger hidden input

//     const handleImageChange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         setImage(URL.createObjectURL(file));
//       }
//     };
//   old

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    setOutputImage(null);
    setError("");
  };

  const handleGenerate = async () => {
    if (!file || !prompt.trim()) {
      setError("Please select an image and enter a prompt.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Upload image to Fal storage
      const uploadedUrl = await fal.storage.upload(file);

      // Call Flux image-to-image model
      const result = await fal.subscribe("fal-ai/flux/dev/image-to-image", {
        input: {
          image_url: uploadedUrl,
          prompt: prompt,
          strength: 0.95,
          num_inference_steps: 40,
          guidance_scale: 3.5,
          num_images: 1,
          enable_safety_checker: true,
          output_format: "png",
          acceleration: "none",
        },
        logs: true,
      });

      console.log("Generation result:", result);
      setOutputImage(result.data.images[0]?.url);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Check the console.");
    }

    setLoading(false);
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
            onChange={handleFileChange}
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
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="font-[satoshi] font-[500] text-[14px] leading-[1.5] tracking-[0.02em] placeholder:text-[#A3A3A3] max-w-[786px] w-full mx-auto  flex flex-row items-center justify-between rounded-[12px] py-[17.5px] pr-[12px] pl-[24px] bg-[#1C1D1F] hover:bg-[#ffffff09] duration-400 "
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="absolute top-3  right-3.5 flex flex-row items-center gap-[4px] py-[4px] px-[12px] rounded-[8px] bg-[#00FF00]  cursor-pointer font-[clashGrotesk] font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-black "
          >
            {/* Generate */}
            {loading ? "Generating..." : "Generate"}
            <img
              src="/images/Sparkels.svg"
              alt=""
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>
        {error && <p className="text-red-600 mt-4">{error}</p>}

        {outputImage && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Result</h3>
            <img
              src={outputImage}
              alt="Generated"
              className="rounded border h-70 w-70 object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
