'use client'
import Image from 'next/image'
import { useState } from 'react'
import FadeContent from '@/Components/FadeContent';
import SearchBar from '@/Components/search';

const NAV_TABS = [
  { label: 'Home', icon: '⌂', href: '/' },
  { label: 'Popular', icon: '★', href: '/popular' },
  { label: 'New Releases', icon: '◈', href: '/new' },
  { label: 'Genres', icon: '◧', href: '/genres' },
  { label: 'Watchlist', icon: '♥', href: '/watchlist' },
  { label: 'Settings', icon: '⚙', href: '/settings' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='fixed left-0 right-0 z-[999] bg-black border-b-[0.01rem] border-zinc-700 shadow-md shadow-yellow-900'>
        <div className='relative flex items-center h-[96px] sm:h-[100px] md:h-[120px]'>

          {/* Logo — absolute left, FadeContent only wraps the img */}
          <div className='absolute left-0 flex items-center ps-4 sm:ps-6 md:ps-8'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <img
                src="/favicon.ico"
                alt="logo"
                className='h-[64px] w-auto sm:h-[66px] md:h-[80px] brightness-0 invert'
              />
            </FadeContent>
          </div>

          {/* Search Bar — truly centered */}
          <div className='w-full flex justify-center px-[120px] sm:px-[124px] md:px-[144px]'>
            <div className='w-full max-w-xl'>
              <SearchBar />
            </div>
          </div>

          {/* Menu Button — absolute right */}
          <div className='absolute right-0'>
            <button
              type='button'
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label='Toggle menu'
              aria-expanded={menuOpen}
              className='w-[96px] h-[96px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex justify-center hover:bg-zinc-900 items-center p-5 md:p-6 flex-shrink-0 transition-colors duration-200'
            >
              <Image
                alt='Menu'
                src={'/Menu.png'}
                width={60}
                height={60}
                className='w-12 md:w-14 invert'
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[997] bg-black transition-opacity duration-300 ${
          menuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in Menu Panel */}
      <aside
        className={`fixed top-0 right-0 z-[998] h-full w-72 sm:w-80 bg-zinc-950 border-l border-zinc-800 shadow-2xl shadow-yellow-900/20 flex flex-col transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Panel Header */}
        <div className='flex items-center justify-between px-6 h-[96px] sm:h-[100px] md:h-[120px] border-b border-zinc-800'>
          <span className='text-yellow-500 text-xs uppercase tracking-[0.25em] font-semibold'>
            Navigation
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className='text-zinc-400 hover:text-white transition-colors text-2xl leading-none'
            aria-label='Close menu'
          >
            ✕
          </button>
        </div>

        {/* Nav Tabs */}
        <nav className='flex flex-col px-4 py-6 gap-1 flex-1'>
          {NAV_TABS.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              onClick={() => setMenuOpen(false)}
              className='group flex items-center gap-4 px-4 py-3.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-all duration-200'
            >
              <span className='text-yellow-600 group-hover:text-yellow-400 transition-colors text-lg w-6 text-center'>
                {tab.icon}
              </span>
              <span className='text-sm font-medium tracking-wide'>
                {tab.label}
              </span>
              <span className='ml-auto text-zinc-700 group-hover:text-zinc-500 text-xs'>→</span>
            </a>
          ))}
        </nav>

        {/* Panel Footer */}
        <div className='px-6 py-5 border-t border-zinc-800'>
          <p className='text-zinc-700 text-xs tracking-widest uppercase'>© 2025</p>
        </div>
      </aside>
    </>
  )
}

export default Navbar