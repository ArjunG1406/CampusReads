'use client'
import Image from 'next/image'
import FadeContent from '@/Components/FadeContent';
import { useState } from 'react';


const navbar = () => {
  return (
    <>
      {/* <div>{isOpen ? "Menu Open" : "Menu Closed"}</div> Use isOpen to avoid unused variable warning */}
     <nav className='flex border-b-[0.01rem] border-zinc-700 justify-between fixed left-0 right-0 z-999 bg-black items-center h-96px sm:h-100px md:h-120px shadow-md shadow-yellow-900'>
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <img src="/favicon.ico" alt="logo" className='h-[64px] w-auto sm:h-[66px] md:h-[80px] ps-8 sm:ps-10 md:ps-12 brightness-0 invert' />
            </FadeContent>
            <button 
                    type='button' 
                    // onClick={() => toggleOpen()} 
                    className='w-[96px] h-[96px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex justify-center hover:bg-zinc-100 items-center p-5 sm:p-5 md:p-6'
                >
            <Image 
                        alt='Menu' 
                        src={'/Menu.png'} 
                        width={60} 
                        height={60} 
                        className='w-12 sm:w-12.5 md:w-15 invert'
                    />
                    </button>
     </nav>
    </>
  )
}

export default navbar