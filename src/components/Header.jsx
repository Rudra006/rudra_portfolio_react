import { useState } from 'react'
import { Home, User, Briefcase, Server, MessageSquare, Menu, X } from 'lucide-react'



export default function Header({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="header flex ">
       <div className="logo">
        <a href="#"><span>R</span>udra</a>
      </div>
      <div className="container">
     
     
      <nav className={`nav ${isMenuOpen ? 'open' : ''} flex align-middle mt-2  `}>
        <ul>
          <li><a href="#home" className={activeSection === 'home' ? 'active flex gap-1' : 'flex gap-1'} onClick={() => setActiveSection('home')}><Home /> Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active flex gap-1' : 'flex gap-1'} onClick={() => setActiveSection('about')}><User /> About</a></li>
          <li><a href="#services" className={activeSection === 'services' ? 'active flex gap-1' : 'flex gap-1'} onClick={() => setActiveSection('services')}><Server /> Services</a></li>
          <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active flex gap-1' : 'flex gap-1'} onClick={() => setActiveSection('portfolio')}><Briefcase /> Portfolio</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active flex gap-1' : 'flex gap-1'} onClick={() => setActiveSection('contact')}><MessageSquare /> Contact</a></li>
        </ul>
      </nav>
      <button className="nav-toggler md:hidden " onClick={toggleMenu}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      </div>
    </header>
  )
}


// import React, { useState } from 'react'
// import { Menu, X,} from 'lucide-react'

// export default function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false)

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen)
//   }

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <a href="#"><span>R</span>udra</a>
//         </div>
//         <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
//           <ul>
//             <li><a href="#home" className="active">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//         <button className="nav-toggler" onClick={toggleNav}>
//           {isNavOpen ? <X /> : <Menu />}
//         </button>
//       </div>
//     </header>
//   )
// }