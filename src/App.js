import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import DotGroup from './components/DotGroup/DotGroup'
import Landing from './pages/Landing/Landing'
import LineGradient from './components/LineGradient/LineGradient'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Testimonials from './pages/Testimonials/Testimonials'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion'
import useMediaQuery from './hooks/useMediaQuery'

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage('home')
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-auto w-5/6">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="mx-auto w-5/6">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <Skills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="mx-auto w-5/6">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="mx-auto w-5/6">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('testimonials')}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient />
      <div className="mx-auto w-5/6 md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App
