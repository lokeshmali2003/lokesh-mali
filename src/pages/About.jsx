import { useEffect, useRef } from 'react'
import { animateCounter } from '../utils/counterAnimation'
import { 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript, 
  SiPhp, 
  SiMysql 
} from 'react-icons/si'
import './About.css'

const About = () => {
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const skillsRef = useRef(null)

  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
              
              // Animate counters when stats section is visible
              if (entry.target === statsRef.current) {
                const counters = entry.target.querySelectorAll('.counter')
                counters.forEach((counter) => {
                  const target = parseInt(counter.getAttribute('data-target'))
                  const suffix = counter.getAttribute('data-suffix') || ''
                  animateCounter(counter, target, 2000, suffix)
                })
              }
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    if (statsRef.current) observer.observe(statsRef.current)
    if (skillsRef.current) observer.observe(skillsRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
      if (statsRef.current) observer.unobserve(statsRef.current)
      if (skillsRef.current) observer.unobserve(skillsRef.current)
    }
  }, [])

  return (
    <div className="about">
      <div className="container">
        <h1 ref={titleRef} className="page-title fade-in">About Me</h1>
        
        <div ref={contentRef} className="about-content fade-in">
          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-glow"></div>
              <img 
                src="/images/LokeshMali.jpeg" 
                alt="Lokesh Mali" 
                className="profile-image"
              />
            </div>
          </div>
          
          <div className="about-text">
            <h2>Hello, I'm Lokesh Mali</h2>
            <p>
              I'm Lokesh Mali, a passionate web developer with a love for creating beautiful,
              functional, and user-friendly applications. With expertise in modern
              web technologies, I bring ideas to life through clean code and
              innovative solutions.
            </p>
            <p>
              My journey in web development started with curiosity and has evolved
              into a career focused on building exceptional digital experiences.
              I believe in continuous learning and staying updated with the latest
              technologies and best practices.
            </p>
            
            <div ref={statsRef} className="about-stats fade-in">
              <div className="stat-item">
                <h3 className="counter" data-target="10" data-suffix="+">0</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="counter" data-target="1" data-suffix=" Year">0</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item stat-item-company">
                <div className="company-logo-wrapper">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQHskdO0cpDcoQ/company-logo_200_200/company-logo_200_200/0/1679290755268?e=1769644800&v=beta&t=5qfPRD_kl1hIDCJ0CXGWggF1CFSdAA2RyfQZiHISXZ8" 
                    alt="Jediteck" 
                    className="company-logo"
                  />
                </div>
                <p>Working on Jediteck</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="skills-section fade-in">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon-wrapper">
                    <IconComponent className="skill-icon" style={{ color: skill.color }} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

