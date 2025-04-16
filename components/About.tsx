import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='py-8 md:py-16'>
      <div className='container mx-auto px-4' data-aos='fade-up'>
        <div className='mb-16 text-center'>
          <h2 className='section-title'>About Me</h2>
          <p className='section-subtitle'>Discover the journey and expertise of a passionate software engineer.</p>
        </div>

        <div className='flex flex-col gap-8 lg:flex-row'>
          <div className='lg:w-1/3'>
            <Image
              src={'/images/profile-img.jpg'}
              alt='Profile'
              className='w-full rounded-lg'
              width={300}
              height={300}
            />
          </div>
          <div className='lg:w-2/3'>
            <div className='space-y-4 text-lg italic text-gray-600 dark:text-gray-300'>
              <p>
                As a dedicated problem solver and technophile, I thrive on tackling complex challenges and staying ahead
                of the curve with the latest technological advancements. Currently, I am a senior software engineer at
                troweb, where I can fully leverage my passion for AI, technology and innovation.
              </p>
              <p>
                My journey into the world of coding began in my teenage years when it was more of a captivating hobby.
                Armed with a degree in Telecommunication Engineering, I soon discovered that software engineering was
                where my true passion lay.
              </p>
              <p>
                Since embarking on this career path, I have worked on numerous projects and contributed to several
                notable startups and big companies. Today, I am part of the dynamic team at troweb and am also delving
                into the exciting field of AI and Machine Learning in my spare time.
              </p>
              <p>
                My technical repertoire includes expertise in Python, TypeScript, JavaScript, Dart, Flutter, NextJS, and
                ReactJS, among other languages and frameworks. I am continually expanding my skill set and eager to
                explore new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
