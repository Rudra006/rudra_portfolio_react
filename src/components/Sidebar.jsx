// import { useState } from 'react'
// import { Home, User, Briefcase, Server, MessageSquare, Menu } from 'lucide-react'



// export default function Sidebar({ activeSection, setActiveSection }) {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleSidebar = () => setIsOpen(!isOpen)

//   return (
//     <div className={`aside ${isOpen ? 'open' : ''}`}>
//       <div className="logo">
//         <a href="#"><span>R</span>udra</a>
//       </div>
//       <div className="nav-toggler" onClick={toggleSidebar}>
//         <Menu />
//       </div>
//       <ul className="nav">
//         <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}><Home /> Home</a></li>
//         <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}><User /> About</a></li>
//         <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setActiveSection('services')}><Server /> Services</a></li>
//         <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setActiveSection('portfolio')}><Briefcase /> Portfolio</a></li>
//         <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}><MessageSquare /> Contact</a></li>
//       </ul>
//     </div>
//   )
// }