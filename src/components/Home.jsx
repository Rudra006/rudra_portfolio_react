import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import rudraimg from '/home/rudra/driveD/web_dev/portfolio2/myPortfolio/src/assets/images/rudrapic_comp.jpeg'

export default function Home({ isActive, scrollY }) {
  const typedRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [" ", "Web Designer", "Full-Stack Web Developer", "Coder"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  useEffect(() => {
    const sectionElement = sectionRef.current
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop
      const sectionHeight = sectionElement.offsetHeight
      const windowHeight = window.innerHeight

      if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
        sectionElement.classList.add('active')
      } else {
        sectionElement.classList.remove('active')
      }
    }
  }, [scrollY])

  return (
    <section ref={sectionRef} className={`home section ${isActive ? 'active' : ''}`} id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hello, My name is <span className="name">Rudra Madhab Mahanty</span></h3>
            <h3 className="my-profession">I'm a <span ref={typedRef} className="typing"></span></h3>
           <p>A motivated IT professional with over 10 months of hands-on experience in software development, specializing in React, Node.js, and MongoDB. Passionate about leveraging technical skills to deliver innovative solutions. Seeking opportunities to further contribute to the success of a dynamic organization by applying expertise in web development, state management, and modern JavaScript frameworks.</p>

            <a href="https://drive.google.com/drive/folders/1R2eEkErzYNzGCPI4fiudW6v0DtA86c3V?usp=sharing" target="_blank" className="btn">Download CV</a>
          </div>
          <motion.div className="home-img padd-15">
      <motion.img 
        src={rudraimg} 
        alt="Rudra Madhab Mahanty" 
        initial={{ scale: 1, rotateY: 0 }} // Normal state
        whileHover={{ scale: 1.2, rotateY: 360 }} // Scale up and rotate 3D on hover
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut" 
        }} 
        style={{ transformOrigin: "center" }} // Set the rotation axis
      />
    </motion.div>
        </div>
      </div>
    </section>
  )
}