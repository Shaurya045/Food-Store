import React from 'react'
import { assets } from '../assets/assets'

function AppDownload() {
  return (
    <div className='m-[auto_auto] mt-[100px] text-[max(3vw,20px)] text-center font-[500]' id='mobile'>
        <p>For Better Experince Download <br /> Tomato App </p>
        <div className='flex justify-center gap-[max(2vw,10px)] mt-[40px]'>
            <img className='w-[max(30vw,120px)] max-w-[180px] duration-[0.5s] cursor-pointer hover:scale-[1.05]' src={assets.play_store} alt="" />
            <img className='w-[max(30vw,120px)] max-w-[180px] duration-[0.5s] cursor-pointer hover:scale-[1.05]' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload