import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className='xl:pl-20'>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
