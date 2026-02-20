'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className='flex items-center w-full max-w-xl rounded-full border border-zinc-600 bg-zinc-900 overflow-hidden focus-within:border-orange-500 transition-colors duration-200'>
      {/* Search Icon */}
      <span className='pl-4 pr-2 text-zinc-400 flex-shrink-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z'
          />
        </svg>
      </span>

      {/* Input */}
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Search books, authors, tags...'
        className='flex-1 bg-transparent text-white placeholder-zinc-500 text-sm py-3 pr-2 outline-none'
      />

      {/* Search Button */}
      <button
        type='button'
        onClick={handleSearch}
        className='bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white text-sm font-semibold px-5 py-3 flex-shrink-0 flex items-center gap-1.5 transition-colors duration-200 rounded-full m-1'
      >
        Search
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3.5 w-3.5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2.5}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14M12 5l7 7-7 7' />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar