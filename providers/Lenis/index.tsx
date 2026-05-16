'use client'

import { ReactLenis } from 'lenis/react'
import type { PropsWithChildren } from 'react'

const LenisProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactLenis root options={{ duration: 1, smoothWheel: true }} />
      {children}
    </>
  )
}

export default LenisProvider
