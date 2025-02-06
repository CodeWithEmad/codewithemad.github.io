'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Menu from '@/components/Menu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <button
        type='button'
        className={`fixed right-4 top-[15px] z-[9999] cursor-pointer border-0 bg-transparent text-2xl outline-none transition-all duration-300 xl:hidden ${
          isOpen ? 'text-blue-600' : 'text-gray-700 dark:text-gray-200'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='sr-only'>Toggle Menu</span>
        {isOpen ? '✕' : '☰'}
      </button>

      <header
        className={`fixed bottom-0 left-0 top-0 z-[9997] w-[300px] pb-[60px] pt-[60px] transition-all duration-500 xl:w-[100px] ${
          isOpen
            ? 'border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'
            : 'bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 xl:border-0 xl:bg-transparent xl:dark:bg-transparent'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0`}
      >
        <Menu onClose={() => setIsOpen(false)} />
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-[9996] bg-gray-600/20 backdrop-blur-sm transition-opacity duration-300 dark:bg-gray-950/40 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } xl:hidden`}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}

export default Header
