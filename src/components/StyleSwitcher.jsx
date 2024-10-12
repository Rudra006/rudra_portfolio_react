import { useState, useEffect } from 'react'
import { Settings, Sun, Moon } from 'lucide-react'

export default function StyleSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const body = document.body
    if (isDarkMode) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleStyleSwitcher = () => {
    setIsOpen(!isOpen)
  }

  const setActiveStyle = (color)   => {
    document.documentElement.style.setProperty('--skin-color', color)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleStyleSwitcher}>
        <Settings />
      </div>
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        {isDarkMode ? <Sun /> : <Moon />}
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setActiveStyle('#ec1839')}></span>
        <span className="color-2" onClick={() => setActiveStyle('#fa5b0f')}></span>
        <span className="color-3" onClick={() => setActiveStyle('#37b182')}></span>
        <span className="color-4" onClick={() => setActiveStyle('#1854b4')}></span>
        <span className="color-5" onClick={() => setActiveStyle('#f021b2')}></span>
      </div>
    </div>
  )
}