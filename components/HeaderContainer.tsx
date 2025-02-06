'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'

export default function HeaderContainer() {
  const pathname = usePathname()
  const is404Page = pathname === '/not-found'

  if (is404Page) return null
  return <Header />
}
