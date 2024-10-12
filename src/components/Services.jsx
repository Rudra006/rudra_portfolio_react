import { Smartphone, Code, Laptop } from 'lucide-react'

export default function Services({ isActive }) {
  return (
    <section className={`service section ${isActive ? 'active' : ''}`} id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <Smartphone />
              </div>
              <h4>Frontend Web development</h4>
              <p>I'm a web developer proficient in HTML, CSS, and JavaScript. I create engaging, responsive websites with a user-centric approach, leveraging modern technologies like React.js for impactful online experiences.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <Laptop />
              </div>
              <h4>Backend Web developer</h4>
              <p>I'm a backend web developer adept in Node.js and PHP. I focus on robust server-side solutions, ensuring efficient data management and enhancing user experiences through optimized server operations.</p>
            </div>
          </div>
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <Code />
              </div>
              <h4>Coder</h4>
              <p>I'm a dedicated coder with a flair for problem-solving. Proficient in C/C++ and Python. I thrive on tackling challenges and translating ideas into functional code for innovative solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}