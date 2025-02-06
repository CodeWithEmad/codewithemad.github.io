'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInit() {
  useEffect(() => {
    // Wait for document to be ready
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800, // Slightly faster animation for better mobile experience
        once: true,
        easing: 'ease-out-cubic',
        offset: 20, // Smaller offset for mobile
        delay: 0,
        mirror: false,
        anchorPlacement: 'top-bottom',
        // Removed the disable: 'mobile' option to enable animations on mobile
      })

      // Handle dynamic content changes
      document.addEventListener('lazybeforeunveil', () => {
        AOS.refresh()
      })

      // Add a refresh on orientation change for better mobile handling
      window.addEventListener('orientationchange', () => {
        AOS.refresh()
      })
    }
  }, [])

  return null
}
