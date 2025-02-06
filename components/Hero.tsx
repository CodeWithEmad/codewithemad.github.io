'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Typed from 'typed.js'
import { Twitter, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Designer', 'Photographer'],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section
      id='hero'
      className="relative flex min-h-screen flex-col justify-center bg-[url('/images/hero-background.jpeg')] bg-cover bg-right bg-no-repeat"
    >
      <div className='absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/50 dark:from-gray-900 dark:via-gray-900/30 dark:to-transparent'></div>

      <div
        className='container relative z-10 mx-auto text-left max-xl:text-center'
        data-aos='fade'
        data-aos-duration='1000'
      >
        <h1 className='mb-4 text-6xl font-bold text-gray-800 dark:text-gray-100 md:ml-10'>Emad Rad</h1>
        <p className='mb-8 text-2xl text-gray-700 dark:text-gray-300 md:ml-10'>
          I&apos;m a <span ref={el}></span>
        </p>

        <div className='ml-10 flex justify-start gap-5 max-xl:justify-center'>
          <SocialLink href='https://x.com/CodeWithEmad' icon={<Twitter size={24} />} />
          <SocialLink href='https://github.com/codewithemad' icon={<Github size={24} />} />
          <SocialLink href='https://www.linkedin.com/in/emadehsanrad/' icon={<Linkedin size={24} />} />
        </div>
      </div>

      <Link
        href='#about'
        className='absolute bottom-8 left-1/2 h-14 w-8 -translate-x-1/2 rounded-full border-2 border-gray-700 dark:border-gray-300'
        data-aos='fade-up'
        data-aos-delay='150'
      >
        <span className='absolute left-1/2 top-2.5 h-1.5 w-1.5 -translate-x-1/2 animate-scroll rounded-full bg-gray-700 dark:bg-gray-300'></span>
      </Link>
    </section>
  )
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='text-2xl text-gray-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
  >
    {icon}
  </Link>
)

export default Hero
