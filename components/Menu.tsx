'use client'
import Link from 'next/link'
import { Home, User, FileText, BookOpen, Sun, Moon, MessageCircle } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface MenuProps {
  onClose: () => void
}

const Menu = ({ onClose }: MenuProps) => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const menuItems = [
    { href: '#hero', icon: <Home size={20} />, text: 'Home' },
    { href: '#about', icon: <User size={20} />, text: 'About' },
    { href: '#resume', icon: <FileText size={20} />, text: 'Resume' },
    { href: '#skills', icon: <BookOpen size={20} />, text: 'Skills' },
    { href: '#contact', icon: <MessageCircle size={20} />, text: 'Contact' },
  ]

  return (
    <nav className='flex h-full flex-col justify-center'>
      <ul className='space-y-4'>
        {menuItems.map((item) => (
          <li key={item.text} className='px-8 xl:px-4'>
            <Link
              href={item.href}
              onClick={onClose}
              className='group relative flex h-[56px] items-center rounded-[50px] bg-gray-50/50 text-gray-700 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white dark:bg-gray-800/50 dark:text-gray-200 xl:w-[56px] xl:overflow-hidden xl:hover:w-[180px]'
            >
              <div className='flex min-w-[56px] items-center justify-center'>{item.icon}</div>
              <span className='pr-6 font-medium transition-opacity duration-300 xl:opacity-0 xl:group-hover:opacity-100'>
                {item.text}
              </span>
            </Link>
          </li>
        ))}

        {/* Theme toggle button */}
        <li className='px-8 xl:px-4'>
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className='group relative flex h-[56px] w-full items-center rounded-[50px] bg-gray-50/50 text-gray-700 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white dark:bg-gray-800/50 dark:text-gray-200 xl:w-[56px] xl:overflow-hidden xl:hover:w-[180px]'
          >
            <div className='relative flex min-w-[56px] items-center justify-center'>
              {mounted && (
                <>
                  <Sun
                    size={20}
                    className={`absolute text-inherit transition-opacity duration-300 ${
                      resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <Moon
                    size={20}
                    className={`text-inherit transition-opacity duration-300 ${
                      resolvedTheme === 'dark' ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                </>
              )}
            </div>
            {mounted && (
              <span className='min-w-[100px] whitespace-nowrap pr-6 font-medium transition-opacity duration-300 xl:opacity-0 xl:group-hover:opacity-100'>
                {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
