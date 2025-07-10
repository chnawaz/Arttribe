import React from 'react'

function Main() {
  return (
    <>
    <div className='h-[100%]  w-full flex flex-col rounded-[16px] p-[24px] gap-[54px] bg-[#0E0F11]  justify-center'>
        <div className='max-w-[786px] w-full mx-auto py-[32px] px-[24px] gap-[12px] rounded-[16px] border-dashed border-[1px] border-[#525252] flex flex-col items-center justify-center'>
            <img src="/images/Gallery_2.svg" alt="" />
            <div className='flex flex-col gap-[4px] items-center justify-center'>
                <p className='font-[clashGrotesk] font-[600] text-[24px] leading-[150%] tracking-[0.02em] text-white'>Upload pictures (optional)</p>
                <p className='font-[satoshi] font-[500] text-[12px] leading-[1.5] tracking-[0] text-[#D4D4D4]'>Browse or drag n drop from your computer</p>
            </div>
            <div className='group  transition duration-300 cursor-pointer'>
                <p className='font-[satoshi] font-[500] text-[12px] leading-[1.5] tracking-[0]   text-[#00FF00]'>Browse</p>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00FF00]"></span>
            </div>

        </div>
        <div className='max-w-[786px] w-full mx-auto  flex flex-row items-center justify-between rounded-[12px] py-[12px] pr-[12px] pl-[24px] bg-[#1C1D1F]'>
            <p className='font-[satoshi] font-[500] text-[14px] leading-[1.5] tracking-[0.02em] text-[#A3A3A3]'>Write a prompt or click generate to continue</p>
            <div className='flex flex-row items-center gap-[4px] py-[4px] px-[12px] rounded-[8px] bg-[#00FF00] cursor-pointer'>
                <p className='font-[clashGrotesk] font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-black '>Generate</p>
               <img src="/images/Sparkels.svg" alt="" className='h-[24px] w-[24px]'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main
