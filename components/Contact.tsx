import React from 'react'
import { Twitter, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id='contact' className='py-8 md:py-16'>
      <div className='container mx-auto px-4' data-aos='fade-up'>
        <div className='mb-16 text-center'>
          <h2 className='section-title'>Contact</h2>
          <p className='section-subtitle'>Let&apos;s connect and create something amazing together.</p>
        </div>

        <div className='mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2'>
          <div className='space-y-6'>
            <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
              Feel free to reach out to me through any of these platforms. I&apos;m always open to discussing new
              projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
              Whether you have a question, proposal, or just want to say hello, I&apos;ll try my best to get back to
              you!
            </p>
          </div>

          <div className='flex flex-col gap-6 md:items-center md:justify-center'>
            <SocialLink
              href='https://twitter.com/CodeWithEmad'
              icon={<Twitter size={24} />}
              label='Twitter'
              text='Follow me on Twitter'
            />
            <SocialLink
              href='https://github.com/codewithemad'
              icon={<Github size={24} />}
              label='GitHub'
              text='Check out my GitHub'
            />
            <SocialLink
              href='https://www.linkedin.com/in/emadehsanrad/'
              icon={<Linkedin size={24} />}
              label='LinkedIn'
              text='Connect on LinkedIn'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  text: string
}

const SocialLink = ({ href, icon, label, text }: SocialLinkProps) => (
  <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label} className='group flex items-center gap-4'>
    <div className='flex h-12 w-12 transform items-center justify-center rounded-full bg-blue-600 text-white transition-colors duration-300 group-hover:scale-110 group-hover:bg-blue-700'>
      {icon}
    </div>
    <span className='font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400'>
      {text}
    </span>
  </a>
)

export default Contact
