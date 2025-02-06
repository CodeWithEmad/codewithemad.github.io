'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label='Back to top'
      className={`fixed bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default BackToTop
