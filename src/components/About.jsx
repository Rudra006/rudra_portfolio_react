import React, { useEffect, useState } from 'react'

const skillsData = [
  { name: 'React.js', percentage: 80 },
  { name: 'Node.js', percentage: 80 },
  { name: 'MongoDB', percentage: 80 },
  { name: 'C/C++ Programming', percentage: 80 },
  { name: 'HTML/CSS/JS', percentage: 80 },
  { name: 'CSS, Bootstrap', percentage: 80 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'Material UI', percentage: 80 },
  { name: 'Tailwind CSS', percentage: 80 },
  { name: 'Cypress', percentage: 80 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'React-Native', percentage: 80 },
  { name: 'Zustand', percentage: 80 },
]

export default function About({ isActive, scrollY }) {
  const [activeTab, setActiveTab] = useState('education')

  useEffect(() => {
    const sectionElement = document.getElementById('about')
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
    <section id="about" className={`about section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Rudra Madhab Mahanty and <span>Web Developer</span></h3>
                <p>I am a passionate and dedicated IT professional with a strong foundation in computer science. My journey in the world of technology has equipped me with a diverse skill set and a keen eye for innovation. I thrive on challenges and continuously seek opportunities to expand my knowledge and expertise in the ever-evolving tech landscape.</p>
              </div>
            </div>

            <div className="ro">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Birthday : <span>06 Jan 2001</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Age : <span>23</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Website : <span>www.rudra.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email : <span>rudramadhab006@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Degree : <span>IT Graduate</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Phone : <span>+91 7437865981</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>City : <span>Berhampur</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Freelance : <span>Available</span></p>
                  </div>
                </div>

                <div className="row">
                  <div className="buttons padd-15">
                    <a href="#contact" className="btn hire-me">Download CV</a>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="skills padd-15">
                <div className="row">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item padd-15" style={{ flex: '1 1 45%' }}>
                      <h5>{skill.name}</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: `${skill.percentage}%` }}></div>
                        <div className="skill-percent">{skill.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row">
            <div className="education padd-15">
  <h3 className="title">Education</h3>
  <div className="row">
    <div className="timeline-box padd-15">
      <div className="timeline shadow-dark">
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> 2020 - 2024
          </h3>
          <h4 className="timeline-title">Bachelor in Technology</h4>
          <p className="timeline-text">
            My journey in the world of technology began with my pursuit of a Bachelor of Technology (B.Tech) degree in Information Technology. I've maintained a current CGPA of 8.54 at Veer Surendra Sai University of Technology, where I'm developing a strong academic foundation that serves as a stepping stone for my career.
          </p>
        </div>
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> 2016 - 2018
          </h3>
          <h4 className="timeline-title">Intermediate</h4>
          <p className="timeline-text">
            During my time at Khallikote Jr. College, I achieved a solid 75% and cultivated a strong interest in technology. This period honed my discipline, critical thinking, and time management skills, paving the way for my enthusiastic pursuit of a degree in Information Technology.
          </p>
        </div>
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> 2015 - 2016
          </h3>
          <h4 className="timeline-title">Matriculation</h4>
          <p className="timeline-text">
            I successfully completed my matriculation from SSVM Gajapati Nagar with an impressive achievement of 88%. This pivotal phase not only highlighted my commitment to education but also laid the groundwork for my continued academic journey, fostering a strong foundation for my future pursuits in the realm of Information Technology.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="experience padd-15">
  <h3 className="title">Experience</h3>
  <div className="row">
    <div className="timeline-box padd-15">
      <div className="timeline shadow-dark">
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> 12/2023 – Present
          </h3>
          <h4 className="timeline-title">Software Engineer at Neophyte Ambient Intelligence</h4>
          <p className="timeline-text">
            Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB, ensuring optimized performance and responsiveness. Collaborated with cross-functional teams to ensure seamless integration of AI models, optimizing user interfaces for improved performance and user engagement.
            and Implemented RESTful APIs for data interaction and streamlined data management from MongoDB to frontend applications. Improved website performance by 20% through code optimization and reduced re-rendering of React components.
          </p>
        </div>
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> 06/2023 – 07/2023
          </h3>
          <h4 className="timeline-title">Intern at ITR, DRDO</h4>
          <p className="timeline-text">
            Designed and implemented an intuitive and user-friendly GUI using PyQt4, enhancing the overall user experience and simplifying the interaction with the flight simulation software.
          </p>
        </div>
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> 08/2022 – 10/2022
          </h3>
          <h4 className="timeline-title">Intern at Edunet Foundation</h4>
          <p className="timeline-text">
            Led the frontend design and development of the "Food and Fun" website using JavaScript, HTML, and CSS. Ensured responsive design compatibility across multiple devices, improving user engagement and accessibility by 15%.
            and Integrated multimedia content, improving the site's visual appeal and increasing average session duration by 20%.
            
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
