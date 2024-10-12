import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StyleSwitcher from './components/StyleSwitcher'
import '../styles/global.css'
import '../styles/variables.css'
import '../styles/about.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Home isActive={activeSection === 'home'} scrollY={scrollY} />
        <About isActive={activeSection === 'about'} scrollY={scrollY} />
        <Services isActive={activeSection === 'services'} scrollY={scrollY} />
        <Portfolio isActive={activeSection === 'portfolio'} scrollY={scrollY} />
        <Contact isActive={activeSection === 'contact'} scrollY={scrollY} />
      </main>
      <Footer />
      <StyleSwitcher />
    </Layout>
  )
}